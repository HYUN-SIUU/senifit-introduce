import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/all.css"
import "./02_Seminar.css";

function Seminar() {
    const navigate = useNavigate();

    const handleConsultClick = () => {
        window.open("https://forms.gle/YRKqLGjRfMHiHEp99", "_blank");
    };

    const handleConsultClick2 = () => {
        window.open("https://docs.google.com/forms/d/1-v0rm7xCxu2NWSjCQW6ajyqcAWfgakBpTdNptqKWBKw/edit", "_blank");
    };

    const handleConsultClick3 = () => {
        window.open("http://pf.kakao.com/_rXiVn", "_blank");
    };

    return (
        <div className="seminar">
            <p className="title"><span className="brown">SGEE 교육</span>에서 <span className="orange">채용</span>까지!</p>
            <div className="process">
                <div className="mass">
                    <div className="circle-brown">
                        <p>SGEE<br/>BASIC<br/>교육</p>
                    </div>
                    <div className="circle-brown-2">
                        <p>센터<br/>후순위<br/>연계자격</p>
                    </div>
                </div>
                <div className="mass">
                    <div className="circle-orange">
                        <p>SGEE<br/>EXPERT<br/>교육</p>
                    </div>
                    <div className="circle-orange-2">
                        <p>센터<br/>선순위<br/>연계자격</p>
                    </div>
                </div>
                <div className="mass mass-last">
                    <p className="circle-text">시니핏 프로그램을 활용<br/>SGEE 전문가로 출강</p>
                </div>
                <div className="line"></div>
                <div className="arrow"></div>
                <div className="mass-text">
                    <p>연계 시&nbsp;</p>
                    <p>EXPERT 교육은&nbsp;</p>
                    <p>필수!</p>
                </div>
            </div>

            <div className="now">
                <div className="now-text">
                    <p>현재&nbsp;<span className="orange">진행중</span>인 교육</p>
                </div>
                {/* <div className="now-img"></div>
                <div className="now-btn" onClick={() => navigate('/sub3/pop')}>
                    자세히 보기
                </div> */}
            </div>

            <div className="seminar-button">
                <div className="btn-orange">
                    <button className="seminar-btn" onClick={handleConsultClick}>
                        바로 참가신청하기
                    </button>
                    <p>클릭시 신청서 작성 폼으로 이동합니다.</p>
                </div>
                <div className="btn-brown">
                    <button className="seminar-btn" onClick={handleConsultClick2}>
                        새로운 일정 알림신청
                    </button>
                    <p>다음 행사 일정을 먼저 연락드립니다.</p>
                </div>
                <div className="btn-brown">
                    <button className="seminar-btn" onClick={handleConsultClick3}>
                        카카오톡 문의
                    </button>
                    <p>궁금한 점은 언제든지 문의주세요.</p>
                </div>
            </div>
        </div>
    );
}

export default Seminar;