import React from 'react';
import "../styles/all.css"
import './04_Example.css';

function Example() {
    return (
        <div className="example">
            <div className="title">
                <p><span className="orange">만족도 높은</span>&nbsp;시니핏, 이렇게 활동해요!</p>
            </div>
            <div className="example-box">
                <div className="box1">
                    <div className="image1 img"></div>
                    <div className="image-box">
                        <div className="image2"></div>
                        <div className="image3"></div>
                    </div>
                </div>
                <div className="box2">
                    <div className="image4 img"></div>
                    <div className="image-box">
                        <div className="image5"></div>
                        <div className="image6"></div>
                    </div>
                </div>
                <div className="box1">
                    <div className="image7 img"></div>
                    <div className="image-box">
                        <div className="image8"></div>
                        <div className="image9"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;