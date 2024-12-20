import React from "react";
import { useNavigate } from 'react-router-dom';
import pop1 from '../img/sub3_02_pop1.png';
import pop2 from '../img/sub3_02_pop2.png';
import pop3 from '../img/sub3_02_pop3.png';
import pop4 from '../img/sub3_02_pop4.png';
import pop5 from '../img/sub3_02_pop5.png';
import pop6 from '../img/sub3_02_pop6.png';
import "../styles/all.css"
import "./02-2_Pop.css";

function Pop() {
    const navigate = useNavigate();

    const handleConsultClick = () => {
        window.open("https://forms.gle/YRKqLGjRfMHiHEp99", "_blank");
    };

    return (
        <div className="pop-up">
            <div className="up">
                <div className="up-text">
                    <p>현재&nbsp;<span className="orange">진행중</span>인 교육</p>
                </div>
                <button className="close-menu" onClick={() => navigate('/sub3')}></button>
            </div>

            <div className="down">
                <img src={pop1} alt="pop1"></img>
                <img src={pop2} alt="pop2"></img>
                <img src={pop3} alt="pop3"></img>
                <img src={pop4} alt="pop4"></img>
                <img src={pop5} alt="pop5"></img>
                <img src={pop6} alt="pop6"></img>
                <div className="down-button">
                    <button className="down-btn" onClick={handleConsultClick}>
                        바로 참가신청하기
                    </button>
                    <p>클릭시 신청서 작성 폼으로 이동합니다.</p>
                </div>
            </div>
        </div>
    );
}

export default Pop;