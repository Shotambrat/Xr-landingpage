import React, { useEffect } from 'react';
import Section1 from './components/Section1';
import StepScrollComponent from './components/StepScrollComponent';
import Section3 from './components/Section3';
import Specialization from './components/Specialization';
import Services from './components/Services';
import Otzivi from './components/Otzivi';
import Connect from './components/Connect';
import Footer from './components/Footer';
import './i18n/i18n'; 
import { useTranslation } from 'react-i18next';
import {getLanguageFromStorageOrCookie} from './hook/getLocaleFromStorage'


function App() {
  const { i18n } = useTranslation();

  


  useEffect(() => {
    const pathLang = window.location.pathname.split('/')[1];
    const storageLang = getLanguageFromStorageOrCookie();

    if (!['uz', 'ru'].includes(pathLang)) {
      window.location.pathname = `/${storageLang}/`;
    } else {
      i18n.changeLanguage(pathLang);
    }
  }, [i18n]);

 


  return (
    <div className="App">
      <Section1 />
      <StepScrollComponent />
      <Section3 />
      <Specialization />
      <Services />
      <Otzivi />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
