import React, { useState, useEffect } from 'react';
import "../styles/all.css"
import './05_Verified.css';
import person1 from '../img/05_people1.png';
import person2 from '../img/05_people2.png';

function Verified() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1270);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1270);
        };

        handleResize(); // 초기 설정
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
        <div className="real">
            <div className="verify">
                {/* 첫 줄 제목 */}
                <h2 className="title">
                    시니핏은 <span className="orange">이미 검증된 단체운동 프로그램</span>입니다.
                </h2>

                {/* 두 번째 섹션: 사용자 후기 */}
                {isLargeScreen ? (
                    <div className="real-feedback1">
                        <div className="feedback1">
                            <img src={person1} alt="어르신 이미지" className="feedback-img1" />
                            <div className="feedback-text1">
                                <p>무릎 쪽이 안 좋았는데 운동을 하고나서 많이 좋아졌어요!</p>
                                <span>- OO 데이케어센터 최OO 어르신</span>
                            </div>
                            <img src={person1} alt="어르신 이미지" className="feedback-img1 visible0" />
                        </div>
                        <div className="feedback1">
                            <img src={person2} alt="복지사 이미지" className="feedback-img1 visible0" /> 
                            <div className="feedback-text1">
                                <p>어르신들이 운동시간만 기다리고 있으시더라고요,</p>
                                <p>수업이 끝나도 스포츠 동작을 자주 연습하세요!</p>
                                <span className="right-text">- OO 데이케어센터 이OO 복지사</span>
                            </div>
                            <img src={person2} alt="복지사 이미지" className="feedback-img1" />
                        </div>
                    </div>
                ) : (
                    <div className="real-feedback2">
                        <div className="feedback2">
                            <img src={person1} alt="어르신 이미지" className="feedback-img2" />
                            <div className="feedback-text2">
                                <p>무릎 쪽이 안 좋았는데 운동을 하고나서 많이 좋아졌어요!</p>
                                <span>- OO 데이케어센터 최OO 어르신</span>
                            </div>
                        </div>
                        <div className="feedback2">
                            <img src={person2} alt="복지사 이미지" className="feedback-img2" />
                            <div className="feedback-text2">
                                <p>어르신들이 운동시간만 기다리고 있으시더라고요,</p>
                                <p>수업이 끝나도 스포츠 동작을 자주 연습하세요!</p>
                                <span>- OO 데이케어센터 이OO 복지사</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        {/* 세 번째 섹션: 배경 사진 */}
        <div className="real-images">
            <div className="background-img1" ></div>
            <div className="background-img2" ></div>
            <div className="background-img3" ></div>
        </div>
        </>
    );
}

export default Verified;
