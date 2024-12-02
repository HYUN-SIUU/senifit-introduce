import React from "react";
import in1 from '../img/sub4_02_Inquire1.png';
import in2 from '../img/sub4_02_Inquire2.png';
import in3 from '../img/sub4_02_Inquire3.png';
import "../styles/all.css"
import "./02_Inquire.css";

function Inquire() {
    const handleConsultClick = () => {
        window.open("https://forms.gle/YRKqLGjRfMHiHEp99", "_blank");
    };

    const handleConsultClick2 = () => {
        window.open("https://open.kakao.com/o/g7HzuG1g", "_blank");
    };

    return (
        <div className="inquire">
            {/* Title Section */}
            <div className="inquire-title">
                <p>궁금한 점은 언제든지 연락주세요!</p>
            </div>

            {/* Contact Information Section */}
            <div className="inquire-contact">
                <div className="contact-item">
                    <p>상담가능시간</p>
                    <p>10:00 ~ 18:00</p>
                    <img src={in1} alt="상담" className="contact-icon" />
                </div>
                <div className="contact-item">
                    <p>전화번호</p>
                    <p>02-###-####</p>
                    <img src={in2} alt="전화" className="contact-icon" />
                </div>
                <div className="contact-item">
                    <p>이메일</p>
                    <p>teunteun.turtle</p>
                    <p>@gmail.com</p>
                    <img src={in3} alt="이메일" className="contact-icon" />
                </div>
            </div>

            {/* Buttons Section */}
            <div className="inquire-button">
                <div className="btn-orange">
                    <button className="inquire-btn" onClick={handleConsultClick}>
                        상담신청하기
                    </button>
                    <p>클릭시 상담신청 작성</p>
                    <p>페이지로 이동합니다.</p>
                </div>
                <div className="btn-brown">
                    <button className="inquire-btn" onClick={handleConsultClick2}>
                        카카오톡 문의
                    </button>
                    <p>궁금한 점은</p>
                    <p>언제든지 문의주세요.</p>
                </div>
            </div>
        </div>
    );
}

export default Inquire;
