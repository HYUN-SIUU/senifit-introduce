import React from 'react';
import Header from '../header/Header';
import Seminar from '../sub3/02_Seminar.js';
import Before from "../sub3/03_Before";
import SNSLinks from '../main/11_SNSLinks';
import Footer from '../footer/Footer';
import '../styles/all.css';

function Sub3() {
    return (
        <div>
            <Header />
            <Seminar />
            <Before />
            <SNSLinks />
            <Footer />
            {/* 나머지 섹션을 필요에 따라 추가할 수 있습니다. */}
        </div>
    );
}

export default Sub3;