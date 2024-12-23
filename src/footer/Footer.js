import React from 'react';
import "../styles/all.css"
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>㈜ 튼튼한 거북이</p>
            <p>대표 : 최진석</p>
            <p>본점 : 경기도 안산시 단원구 원포공원1로 59, 신명트윈타워 A동 5층 창업 5호</p>
            <p>서울지점 : 서울특별시 광진구 아차산로 272 B128 8호 (자양동, 더샵스타시티 스타트업존)</p>
            <p>사업자번호 : 327-86-03115</p>
            <p>TEL : 070-8065-7080</p>
            <p>E-MAIL : <span className="footer-email">teunteun.turtle@gmail.com</span></p>
            <p>Copyright 2024. SGEE.. All rights reserved</p>
        </footer>
    );
}

export default Footer;
