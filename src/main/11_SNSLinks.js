import React from 'react';
import kakao from '../img/kakao.png';
import blog from '../img/blog.png';
import insta from '../img/insta.png';
import './11_SNSLinks.css';

function SNSLinks() {

    return (
        <div className="sns-links lab">
            <img src={kakao} alt="카카오 로고" className="sns-button" />
            <img src={blog} alt="블로그 로고" className="sns-button" />
            <img src={insta} alt="인스타 로고" className="sns-button" />
        </div>
    );
}

export default SNSLinks;
