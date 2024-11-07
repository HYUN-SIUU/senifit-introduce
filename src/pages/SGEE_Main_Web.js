import React from 'react';
import MainTitle from '../main/MainTitle';
import SNSLinks from '../main/SNSLinks';
import './SGEE_Main_Web.css';
import '../styles/common.css';

function Main() {
    return (
        <div className="main-web">
            <MainTitle />
            <SNSLinks />
            {/* 나머지 섹션을 필요에 따라 추가할 수 있습니다. */}
        </div>
    );
}

export default Main;

