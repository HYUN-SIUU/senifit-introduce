import React from 'react';
import Header from '../header/Header';
import Intro from '../sub1/02_Intro';
import Member from '../sub1/03_Member';
// import Teacher from '../sub1/04_Teacher';
import SNSLinks from '../main/11_SNSLinks';
import Footer from '../footer/Footer';
import '../styles/all.css';

function Sub1() {
    return (
        <div>
            <Header />
            <Intro />
            <Member />
            {/*<Teacher />*/}
            <SNSLinks />
            <Footer />
            {/* 나머지 섹션을 필요에 따라 추가할 수 있습니다. */}
        </div>
    );
}

export default Sub1;
