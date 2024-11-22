import React from 'react';
import sini from '../img/sini_white.png';
import './02_Line.css';

function Line() {
    return (
        <div className="line">
            <img src={sini} alt="시니핏 로고" className="sini" />
            <p>시니핏은 복지사님들과 어르신들의 피드백을 바탕으로<br/>SGEE가 자체 개발한 노인단체운동프로그램 입니다.</p>
        </div>
    );
}

export default Line;