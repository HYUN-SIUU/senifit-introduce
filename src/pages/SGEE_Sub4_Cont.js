import React from 'react';
import Header from '../header/Header';
import Inquire from "../sub4/02_Inquire";
import SNSLinks from '../main/11_SNSLinks';
import Footer from '../footer/Footer';
import '../styles/all.css';

function Sub4() {
    return (
        <div>
            <Header />
            <Inquire />
            <SNSLinks />
            <Footer />
            {/* 나머지 섹션을 필요에 따라 추가할 수 있습니다. */}
        </div>
    );
}

export default Sub4;