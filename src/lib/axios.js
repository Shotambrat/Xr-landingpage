import axios from "axios";
import DOMPurify from "dompurify"; 

const activeRequests = {};
const DAILY_LIMIT = 2;

const getDeviceId = () => {
  let deviceId = localStorage.getItem("deviceId");
  if (!deviceId) {
    deviceId = `device-${Date.now()}-${Math.random()}`;
    localStorage.setItem("deviceId", deviceId);
  }
  return deviceId;
};

const getRequestState = () => {
  const deviceId = getDeviceId();
  const state = JSON.parse(localStorage.getItem("requestState")) || {};
  if (!state[deviceId]) {
    state[deviceId] = { count: 0, lastRequestDate: null };
  }
  return { state, deviceId };
};

const updateRequestState = (deviceId, count, date) => {
  const state = JSON.parse(localStorage.getItem("requestState")) || {};
  state[deviceId] = { count, lastRequestDate: date };
  localStorage.setItem("requestState", JSON.stringify(state));
};

const sanitizeUrl = (url) => DOMPurify.sanitize(url);

const Axios = axios.create({
  baseURL: sanitizeUrl("https://api.example.com"), 
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

Axios.interceptors.request.use(
  (config) => {
    const { state, deviceId } = getRequestState();
    const requestInfo = state[deviceId];
    const today = new Date().toISOString().split("T")[0];

    if (requestInfo.lastRequestDate === today) {
      if (requestInfo.count >= DAILY_LIMIT) {
        return Promise.reject({
          message: `Siz bugungi kun uchun ${DAILY_LIMIT} marta so'rov yuborishingiz mumkin.`,
        });
      }
    } else {
      requestInfo.count = 0;
      requestInfo.lastRequestDate = today;
    }

    requestInfo.count += 1;
    updateRequestState(deviceId, requestInfo.count, today);

    const requestKey = `${deviceId}_${config.method}_${sanitizeUrl(config.url)}`;
    activeRequests[requestKey] = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    const deviceId = getDeviceId();
    const requestKey = `${deviceId}_${response.config.method}_${sanitizeUrl(response.config.url)}`;
    delete activeRequests[requestKey];
    return response;
  },
  (error) => {
    if (error.config) {
      const deviceId = getDeviceId();
      const requestKey = `${deviceId}_${error.config.method}_${sanitizeUrl(error.config.url)}`;
      delete activeRequests[requestKey];
    }

    if (error.response) {
      return Promise.reject({
        message: DOMPurify.sanitize(error.response.data?.message || "Xatolik yuz berdi."),
        ...DOMPurify.sanitize(error.response.data),
      });
    }
    return Promise.reject({
      message: "Tarmoq xatosi yoki server javob bermadi.",
    });
  }
);

export default Axios;
