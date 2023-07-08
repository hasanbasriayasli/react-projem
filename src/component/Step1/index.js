import React from "react";
import SelectComponent from "../SelectComponent";
import GreenButton from "../Button";
import './index.css';


export default function Step1({setSteps}) {
  return (
    <>
      <section className="section">
        <h2 className="section-title">
          Beraber Çözelim hizmetine hoş geldiniz!
        </h2>
        <p className="section-content">
          Aşağıdaki adımları takip ederek yaşadığınız problemleri en güvenli ve
          hızlı şekilde çözebilir veya servis randevusu oluşturabiliriz.
        </p>
      </section>
      <section className="section">
        <h2 className="section-title">Size nasıl yardımcı olabiliriz?</h2>
        <ul className="services-list">
          <li className="service-item">
            Örnek: Buzdolabı soğutmuyor, Klima bakım
          </li>
          <SelectComponent />
        </ul>
        <div className="section-button-step1">
          <GreenButton text={"Devam"} onClick={()=>setSteps('step2')}/>
        </div>
      </section>
    </>
  );
}
