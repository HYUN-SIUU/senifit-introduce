import React from "react";
import "../styles/all.css"
import "./02_Seminar.css";

function Seminar() {
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
                <div className="mass">
                    <p className="circle-text">시니핏 프로그램을 활용<br/>SGEE 전문가로 출강</p>
                </div>
            </div>

            <div className="seminar-button">
                <div className="btn-orange">
                    <button className="seminar-btn">
                        <a 
                        href="https://open.kakao.com/o/g7HzuG1g" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        바로 참가신청하기
                        </a>
                    </button>
                    <p>클릭시 신청서 작성 폼으로 이동합니다.</p>
                </div>
                <div className="btn-brown">
                    <button className="seminar-btn">
                        <a 
                        href="https://open.kakao.com/o/g7HzuG1g" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        새로운 일정 알림신청
                        </a>
                    </button>
                    <p>다음 행사 일정을 먼저 연락드립니다.</p>
                </div>
                <div className="btn-brown">
                    <button className="seminar-btn">
                        <a 
                        href="https://open.kakao.com/o/g7HzuG1g" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        카카오톡 문의
                        </a>
                    </button>
                    <p>궁금한 점은 언제든지 문의주세요.</p>
                </div>
            </div>
        </div>
    );
}

export default Seminar;