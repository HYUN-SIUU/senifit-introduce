import React from "react";
import "../styles/all.css"
import "./02_Intro.css";
import sgeeLogo from "../img/main.png"; // 이미지 파일 경로에 맞게 수정

function Intro() {
    return (
        <div className="intro">
            
            <div className="up">
                <p>협회소개</p>
            </div>
            
            <div className="down">
                <div className="image-container">
                    <img src={sgeeLogo} alt="SGEE Logo" />
                </div>
                <div className="text-container">
                    <p>한국노인단체운동전문가협회(SGEE)를 소개합니다.</p>
                    <br/>
                    <p>어르신들이 안전하고 재미있게, 운동할 수 있는 노인 단체 운동 프로그램인 ‘시니핏’을 개발합니다.</p>
                    <p>낙상 방지를 위한, 하지 특화 운동 교구를 자체 개발합니다.</p>
                    <p>노인 단체 운동 전문가를 양성하여 노인복지시설로 연계합니다.</p>
                    <br/>
                    <p>많은 어르신들이 안전하게 운동할 수 있는 문화를 형성하기 위해 최선을 다하고 있습니다.</p>
                </div>
            </div>
        </div>
    );
}

export default Intro;
