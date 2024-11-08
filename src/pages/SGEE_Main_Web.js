import React from 'react';
import Header from '../header/Header';
import MainTitle from '../main/02_MainTitle';
import Needed from '../main/03_Needed';
import Advantage from '../main/04_Advantage';
import SNSLinks from '../main/11_SNSLinks';
import '../styles/all.css';
import './SGEE_Main_Web.css';

function Main() {
    return (
        <div>
            <Header />
            <MainTitle />
            <SNSLinks />
            <Needed />
            <Advantage />
            {/* 나머지 섹션을 필요에 따라 추가할 수 있습니다. */}
        </div>
    );
}

export default Main;
