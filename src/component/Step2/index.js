import React from 'react'
import GreenButton from '../Button'
import SearchInput from '../SearchInput.js'
import './index.css';
import BackButton from '../BackButton';



export default function Step2({setSteps}) {
  return (
   <>
       <section className="section">
        <h2 className="section-title">Ürününüzün modelini biliyor musunuz? (Zorunlu değildir)</h2>
        <ul className="services-list">
          <li className="service-item">
          Seçilen konu: Akıllı tahta sürgülü tahta mekanik sorunu
          </li>
        </ul>
        <SearchInput/>
        <br/>
        <div className="section-button">
          <BackButton text={"Geri"} onClick={()=>setSteps('step1')}/>
          <GreenButton text={"Devam"} onClick={()=>setSteps('step3')}/>
        </div>
      </section>
   </>
  )
}
