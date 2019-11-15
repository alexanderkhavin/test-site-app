import React from 'react';
import './Feedback.css';
import UserImage from  '../images/Ellipse.png';
import icDown from '../images/ic-down.png';

export default class Feedback extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            nextSlide: false,
            blockKey: undefined,
            data: [
                {
                    name: 'Алексей Гоно',
                    image: UserImage,
                    comment: 'Отличное и удобное приложение. Классные возможности, отзывчивая поддержка.'
                },
                {
                    name: 'Алексей Рано',
                    image: UserImage,
                    comment: 'Отличное и удобное приложение. Классные возможности, отзывчивая поддержка.'
                },
                {
                    name: 'Александр Хавин',
                    image: UserImage,
                    comment: 'Отличное и удобное приложение. Классные возможности, отзывчивая поддержка. А еще на работу хочу'
                }
    
            ]
        }
    }

    NextComment(key) {
        this.setState({nextSlide: true});
        this.setState({blockKey: key});
    }

    render() {
        const classes = ['Feedback'];

        if (this.state.nextSlide) {
            classes.push('none')

        }


        let feedbackBlocks = this.state.data.map((item, key) => {
            return (  
                <div key={key} className={classes.join(key)}>
                    <img className="UserImage" src={item.image}/>
                    <h3 className="UserName">{item.name}</h3>
                    <h2 className="UserComment">{item.comment}</h2>
                    <button className="ButtonFeedbackBlock" onClick={() => {this.NextComment(key)}}><img src={icDown}></img></button>
                </div>
            )
        }) 

        return(
            <div>
            <p className="FeedbackText">Отзывы</p>
                {feedbackBlocks}
            </div>
        )
    }
}