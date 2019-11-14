import React from 'react';
import Slider from 'infinite-react-carousel';
import './Slider.css' 

const SimpleSlider = () => (
    <div className="MainFeedbackBlock">
    <Slider dots>
        <div>
        <h3>1</h3>
        <div className="Feedback">
            
        </div>
        </div>
        <div>
        <h3>2</h3>
        </div>
        <div>
        <h3>3</h3>
        </div>
        <div>
        <h3>4</h3>
        </div>
        <div>
        <h3>5</h3>
        </div>
    </Slider>
  </div>
);

export default SimpleSlider;