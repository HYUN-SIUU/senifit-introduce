import React from 'react';
import Header from '../header/Header';
import Line from '../sub2/02_Line';
import Why from '../sub2/03_Why2';
import Example from '../sub2/04_Example';
import SNSLinks from '../main/11_SNSLinks';
import Footer from '../footer/Footer';
import '../styles/all.css';

function Sub2() {
    return (
        <div>
            <Header />
            <Line />
            <Why />
            <Example />
            <SNSLinks />
            <Footer />
            {/* 나머지 섹션을 필요에 따라 추가할 수 있습니다. */}
        </div>
    );
}

export default Sub2;