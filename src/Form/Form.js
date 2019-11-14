import React from 'react';
import './Form.css';
import icSend from '../images/ic-send.png';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value: '',
            isInput: false,
            isFilled: false,
            error: false,
            errorMessage: 'Проверьте набранный номер', 
            validation: {
                required: true,
            }
        };
    }

    render() {
        return(
            <div>
                <div className="CallbackBlock">
                    <h3 className="TextCallbackBlock">Оставьте заявку, и мы позвоним вам в ближайшее время</h3>
                    <form>
                    <input className="InputCallbackBlock" type="tel"/> 
                    <button className="ButtonCallbackBlock">
                        <p className="CallBackBlockButtonText">ОТПРАВИТЬ ЗАЯВКУ</p> 
                        <img src={icSend} className="icSend" />
                    </button> 
                    <div className="ShadowButtonCallbackBlock"></div>
                    </form>
                </div>
                <div className="ShadowCallbackBlock">

                </div>
            </div>
        )
    }
}