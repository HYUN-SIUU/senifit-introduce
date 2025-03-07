import React from 'react';
import kakao from '../img/kakao.png';
import blog from '../img/blog.png';
import insta from '../img/insta.png';
import youtube from "../img/youtube.png";
import "../styles/all.css"
import './11_SNSLinks.css';

function SNSLinks() {

    return (
        <div className="sns-links">
            <a 
                href="http://pf.kakao.com/_rXiVn" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={kakao} alt="카카오 로고" className="sns-button" />
            </a>
            <a 
                href="https://m.blog.naver.com/tt-turtle" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={blog} alt="블로그 로고" className="sns-button" />
            </a>
            <a 
                href="https://www.instagram.com/sgee__official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={insta} alt="인스타 로고" className="sns-button" />
            </a>
            <a 
                href="https://www.youtube.com/@%ED%8A%BC%ED%8A%BC%ED%95%9C%EA%B1%B0%EB%B6%81%EC%9D%B4-o9l/videos" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={youtube} alt="유튜브 로고" className="sns-button" />
            </a>
        </div>
    );
}

export default SNSLinks;
