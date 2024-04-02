import React, {useState} from 'react';
import Section1 from './components/Section1';
import StepScrollComponent from './components/StepScrollComponent';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Services from './components/Services';
import Otzivi from './components/Otzivi';


function App() {
  return (
    <div className="App">
      <Section1 />
      <StepScrollComponent />
      <Section3 />
      <Section4 />
      <Services />
      <Otzivi />
    </div>
  );
}

export default App;
