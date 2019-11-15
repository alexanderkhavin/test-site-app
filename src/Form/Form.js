import React from 'react';
import './Form.css';
import icSend from '../images/ic-send.png';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isSuccess: false,
            value: '+7',
            isNotEdit: true,
            isInput: false,
            isFilled: false,
            error: false,
            errorMessage: 'Проверьте набранный номер', 
            validation: {
                required: true,
            }
        };

        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    isSuccessFunction() {
        this.setState({isSuccess: true});
        console.log(this.state.value);
    }

    handlePhoneChange(event) {
        if (event.target.value > 0) {
            this.setState({value: event.target.value});
            this.setState({isInput: true});
        } else {
            this.setState({isInput: false});
            this.setState({error: true});
        }
    }

    render() {
        const classes = ['InputCallbackBlock']

        if (this.state.isInput) {
            classes.push('isInput')
        } else if (this.state.error) {
            classes.push('Error')
        }
        console.log(this.state.isInput)
        return(
            <div>
            {this.state.error ? 
                <div>
                    <p className="ErrorMessage">{this.state.errorMessage}</p>
                </div> : null
            }
            {!this.state.isSuccess ? 
                <div>
                    <div className="CallbackBlock">
                        <h3 className="TextCallbackBlock">Оставьте заявку, и мы позвоним вам в ближайшее время</h3>
                        <form>
                        <input className="InputCallbackBlock" className={classes.join(' ')} type="tel" value={this.state.value} onChange={this.handlePhoneChange}/> 
                        <button type="submit" className="ButtonCallbackBlock" onClick={() => {this.isSuccessFunction()}}>
                            <p className="CallBackBlockButtonText">ОТПРАВИТЬ ЗАЯВКУ</p> 
                            <img src={icSend} className="icSend" />
                        </button> 
                        <div className="ShadowButtonCallbackBlock"></div>
                        </form>
                    </div>
                    <div className="ShadowCallbackBlock"></div> 
                </div> :
                <div className="CallbackSuccessBlock">
                    <p className="CallbackSuccessBlockText">Спасибо, что оставили заявку. Мы скоро вам перезвоним.</p>
                    <button className="CallbackSuccessButton">
                        <p className="CallBackBlockButtonText">ОТПРАВИТЬ ЗАЯВКУ</p> 
                        <img src={icSend} className="icSend" />
                    </button>
                </div>
            }
            </div>
        )
    }
}