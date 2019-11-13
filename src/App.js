/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import icLogo from './images/ic-logo.svg';
import Camera from './images/camera.png';
import Cam1 from './images/cam (1).png';
import Cam2 from './images/cam (2).png';
import Onehundred from './images/100.png';
import BTV from './images/btv.png';
import Ras from './images/ras.png';
import WiFi from './images/wifi.png';

function App() {
  return (
    <div>
      <div className="Banner">
        <img src={icLogo} className="Banner-ic-logo" />
        <h1 className="MainText">Датчик спокойствия</h1>
        <p className="TextPforBanner">Комплекс из камеры и мобильного приложения, который помогает в любой момент убедиться, что с близкими и домом всё в порядке.</p>
      </div>
      <div className="CamBlock1">
        <img src={Camera} className="Camera1" />
      </div>
      <div className="ShadowCamBlock1"></div>
      <button className="infoButton1">Подробнее</button>
      <div className="CamBlock2">
        <img src={Camera} className="Camera2" />
      </div>
      <div className="ShadowCamBlock2"></div>
      <button className="infoButton2">Подробнее</button>

      <h1 className="BuyText">Приобрести</h1>
      <div className="BuyBlock1">
        <img src={Cam1} className="Cam1" />
        <p className="TextPforBuyBlock1">Покупка</p>
      </div>
      <div className="BuyBlock2">
        <img src={Ras} className="Ras" />
        <p className="TextPforBuyBlock2">Рассрочка</p>
      </div>
      <div className="BuyBlock3">
        <img src={Onehundred} className="OneHundred"/>
        <img src={Cam1} className="Cam1"/>
        <img src={WiFi} className="WiFi"/>
        <p className="TextPforBuyBlock3paket">Пакет</p>
        <p className="TextPforBuyBlock3">"Всё под контролем"</p>
      </div>
      <div className="BuyBlock4">

      </div>
    </div>
  );
}

export default App;
