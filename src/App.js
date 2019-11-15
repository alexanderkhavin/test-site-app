/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import Feedback from './Feedback/Feedback';
import icLogo from './images/ic-logo.svg';
import Camera from './images/camera.png';
import Cam1 from './images/cam (1).png';
import Cam2 from './images/cam (2).png';
import Onehundred from './images/100.png';
import BTV from './images/btv.png';
import Ras from './images/ras.png';
import WiFi from './images/wifi.png';
import Form from './Form/Form';
import Close from './images/Group.png';
import Smart from './images/smart.png';
import icWifi from './images/ic-wifi.png';
import icResolution from './images/ic-resolution.png';
import icNight from './images/ic-night.png';
import icRecord from './images/rec.png';
import icAngle from './images/ic-angle.png';
import icMove from './images/ic-move.png';
import icServer from './images/ic-server.png';
import icAccess from './images/ic-access.png';
import icArchive from './images/ic-archive.png';
import icGeo from './images/ic-geo.png';
import icNotifications from './images/ic-notifications.png';

class App extends React.Component {

  state = {
    modalVisible1: false,
    modalVisible2: false,
  }

  openModal1() {
    this.setState({modalVisible1: true});
  }

  closeModal1() {
    this.setState({modalVisible1: false});
  }

  openModal2() {
    this.setState({modalVisible2: true});
  }

  closeModal2() {
    this.setState({modalVisible2: false});
  }


  render() {

    const classes1 = ['CamBlock1'];
    const classes2 = ['CamBlock2'];

    if(this.state.modalVisible1) {
      classes1.push('noneback');
    }
    if(this.state.modalVisible2) {
      classes2.push('noneback');
    }

    return (
      <div>
        <div className="Banner">
          <img src={icLogo} className="Banner-ic-logo" />
          <h1 className="MainText">Датчик спокойствия</h1>
          <p className="TextPforBanner">Комплекс из камеры и мобильного приложения, который помогает в любой момент убедиться, что с близкими и домом всё в порядке.</p>
        </div>
        <div className={classes1.join(' ')}>
          <img src={Camera} className="Camera1" />
        </div>
        <div className="ShadowCamBlock1"></div>
        <button onClick={() => {this.openModal1()}} className="infoButton1">Подробнее</button>

        {this.state.modalVisible1 ? 
          <div className="ModalOverlay">
                <div className="ModalWindow">
                <button className="CloseModalButton" onClick={() => {this.closeModal1()}}><img src={Close}/></button>
                <div className="ModalWindowBlock11">
                  <div className="ModalWindowBlockCircle">
                    <img src={icWifi} className="ModalWindowBlockCircleImage"/>
                  </div>
                  <p className="ModalWindowBlockText">Работает по Wi-Fi или кабелю</p>
                </div>
                <div className="ModalWindowBlock12">
                  <div className="ModalWindowBlockCircle">
                    <img src={icResolution} className="ModalWindowBlockCircleImage"/>
                  </div>
                  <p className="ModalWindowBlockText">Разрешение 1280х960 (HD)</p>
                </div>
                <div className="ModalWindowBlock21">
                  <div className="ModalWindowBlockCircle">
                    <img src={icNight} className="ModalWindowBlockCircleImage"/>
                  </div>
                  <p className="ModalWindowBlockText">Ночная съемка</p>
                </div>
                <div className="ModalWindowBlock22">
                  <div className="ModalWindowBlockCircle">
                    <img src={icRecord} className="ModalWindowBlockCircleImage"/>
                  </div>
                  <p className="ModalWindowBlockText">Запись звука и видео</p>
                </div>
                <div className="ModalWindowBlock31">
                  <div className="ModalWindowBlockCircle">
                    <img src={icAngle} className="ModalWindowBlockCircleImage"/>
                  </div>
                  <p className="ModalWindowBlockText">Угол обзора 100°</p>
                </div>
                <div className="ModalWindowBlock32">
                  <div className="ModalWindowBlockCircle">
                    <img src={icWifi} className="ModalWindowBlockCircleImage"/>
                  </div>
                  <p className="ModalWindowBlockText">Длина кабеля 1.5 метра</p>
                </div>
                </div>
            </div> : null
        }

        

        <div className={classes2.join(' ')}>
          <img src={Smart} className="Camera2" />
        </div>
        <div className="ShadowCamBlock2"></div>
        <button onClick={() => {this.openModal2()}} className="infoButton2">Подробнее</button>

        {this.state.modalVisible2 ? 
          <div className="ModalOverlay">
                <div className="ModalWindow2">
                <button className="CloseModalButton2" onClick={() => {this.closeModal2()}}><img src={Close}/></button>
                <div className="ModalWindowBlock11">
                  <div className="ModalWindowBlockCircle">
                    <img src={icMove} className="ModalWindowBlockCircleImage"/>
                  </div>
                  <p className="ModalWindowBlockText">Уведомление на телефон о движении</p>
                </div>
                <div className="ModalWindow2Block12">
                  <div className="ModalWindowBlockCircle">
                    <img src={icServer} className="ModalWindowBlockCircleImage"/>
                  </div>
                  <p className="ModalWindowBlockText">Хранение данных на защищенных серверах</p>
                </div>
                <div className="ModalWindow2Block21">
                  <div className="ModalWindowBlockCircle">
                    <img src={icAccess} className="ModalWindowBlockCircleImage"/>
                  </div>
                  <p className="ModalWindowBlockText">Совместный доступ у членов семьи </p>
                </div>
                <div className="ModalWindow2Block22">
                  <div className="ModalWindowBlockCircle">
                    <img src={icArchive} className="ModalWindowBlockCircleImage"/>
                  </div>
                  <p className="ModalWindowBlockText">Скачивание/удаление архивных записей</p>
                </div>
                <div className="ModalWindow2Block31">
                  <div className="ModalWindowBlockCircle">
                    <img src={icGeo} className="ModalWindowBlockCircleImage"/>
                  </div>
                  <p className="ModalWindowBlockText">Доступ из любой точки мира</p>
                </div>
                <div className="ModalWindow2Block32">
                  <div className="ModalWindowBlockCircle">
                    <img src={icNotifications} className="ModalWindowBlockCircleImage"/>
                  </div>
                  <p className="ModalWindowBlockText">Уведомление о приходе «Домашних» </p>
                </div>
                </div>
            </div> : null
        }
  
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
          <img src={BTV} className="SLON" />
          <img src={Onehundred} className="OneHundred"/>
          <img src={Cam2} className="Cam2"/>
          <img src={WiFi} className="WiFi"/>
          <p className="TextPforBuyBlock3paket">Пакет</p>
          <p className="TextPforBuyBlock3">"Всё под контролем"</p>
        </div>
        <div>
          <Form />
        </div>
        <div>
          <Feedback />
        </div>
      </div>
    );
  }
}

export default App;
