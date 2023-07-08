import React, { useState } from 'react'
import Step1 from '../../component/Step1';
import Step2 from '../../component/Step2';

export default function Home() {
    const [steps,setSteps]= useState('step1');
    return (
      <div className="app">
        <header className="header">
          <img src='https://ucretsizkesif.vaillant.com.tr/img/vaillant-logo.png'/>
        </header>
        <main className="main">
        {Steps(steps, setSteps)}
        </main>
        <footer className="footer">
          <p>Telif Hakkı &copy; 2023. Örnek Şirketi. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    );
}


const Steps = (key, setSteps) => {
    switch (key) {
      case "step1":
        return <Step1 step={key} setSteps={setSteps} />;
      case "step2":
        return <Step2 step={key} setSteps={setSteps} />;
      default:
        break;
    }
  };