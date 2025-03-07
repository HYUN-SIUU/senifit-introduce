import React from 'react';
import siniImage from '../img/sini.png';
import "../styles/all.css"
import './02_MainTitle.css';

function MainTitle() {
    const handleConsultClick = () => {
        window.open("http://pf.kakao.com/_rXiVn", "_blank");
    };

    return (
        <div className='main-title'>
            <div>
                <p className="h2">복지사님들과 어르신들의 피드백을 바탕으로 SGEE가 자체 개발한</p>
            </div>
            <div className="twenty-two">
                <p className="h1">어르신들이</p>
                <p className="h1 orange">재밌고! 안전하게!</p>
                <p className="h1">운동할 수 있는 단체운동 프로그램</p>
            </div>
            <div className="sini-section twenty-two">
                <img src={siniImage} alt="시니핏 로고" className="sini-image" />
                <p>시니핏</p>
            </div>
            <div className="application-consult" onClick={handleConsultClick}>
                상담신청 → 
            </div>
        </div>
    );
}

export default MainTitle;
