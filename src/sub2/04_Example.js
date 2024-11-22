import React from 'react';
import Image1 from '../img/03_need1.JPG';
import Image2 from '../img/03_need2.JPG';
import Image3 from '../img/03_need3.JPG';
import './04_Example.css';

function Example() {
    return (
        <div className="example">
            <div className="title">
                <p><span className="orange">만족도 높은</span>&nbsp;시니핏, 이렇게 활동해요!</p>
            </div>
            <div className="example-box">
                <div className="box1">
                    <img src={Image1} alt="image1" />
                    <div className="image-box">
                        <img src={Image2} alt="image2" />
                        <img src={Image3} alt="image3" />
                    </div>
                </div>
                <div className="box2">
                    <img src={Image1} alt="image1" />
                    <div className="image-box">
                        <img src={Image2} alt="image2" />
                        <img src={Image3} alt="image3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;