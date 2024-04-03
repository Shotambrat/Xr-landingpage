import React, {useState} from 'react';
import Section1 from './components/Section1';
import StepScrollComponent from './components/StepScrollComponent';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Services from './components/Services';
import Otzivi from './components/Otzivi';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Services2 from './components/Services2';
import Services3 from './components/Services3';


function App() {
  return (
    <div className="App">
      <Section1 />
      <StepScrollComponent />
      <Section3 />
      <Section4 />
      <Services />
      {/* <Services2 /> */}
      {/* <Services3 /> */}
      <Otzivi />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
