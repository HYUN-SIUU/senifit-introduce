import React from 'react';
import { useNavigate } from 'react-router-dom';
import './09_LearnMore.css';

function LearnMore() {
    const navigate = useNavigate();

    return (
        <div className="learn-more">
            <p>노인 단체 운동 전문가에 관심 있으신가요?</p>
            <p>SGEE가 시장 현황부터 구직 연계까지 함께 하겠습니다.</p>
            <div className="learn-more-button" onClick={() => navigate('/sub3')}>
                SGEE 더 알아보기
            </div>
        </div>
    );
}

export default LearnMore;
