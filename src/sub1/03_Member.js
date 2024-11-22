import React, { useEffect, useRef, useState } from 'react';
import './03_Member.css';
import member1 from '../img/03_member1.png';
import member2 from '../img/03_member2.png';
import member3 from '../img/03_member3.png';

function Member() {
    const [activeCard, setActiveCard] = useState('first');
    const [circleStyle, setCircleStyle] = useState();
    const firstCardRef = useRef(null);
    const secondCardRef = useRef(null);
    const thirdCardRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const firstCard = firstCardRef.current.getBoundingClientRect();
            const secondCard = secondCardRef.current.getBoundingClientRect();
            const thirdCard = thirdCardRef.current.getBoundingClientRect();
            const windowBottom = window.innerHeight;

            if (windowBottom > thirdCard.bottom*0.9) {
                setActiveCard('third');
            } else if (windowBottom > secondCard.bottom*0.7) {
                setActiveCard('second');
            } else if (windowBottom > firstCard.bottom) {
                setActiveCard('first');
            }
        };

        const controlCircle = () => {
            const firstCard = firstCardRef.current.getBoundingClientRect();
            const secondCard = secondCardRef.current.getBoundingClientRect();
            const thirdCard = thirdCardRef.current.getBoundingClientRect();
            const card = cardRef.current.getBoundingClientRect();
            const windowBottom = window.innerHeight;

        
            if (windowBottom > thirdCard.bottom*0.9) {
                setCircleStyle({
                    top: `${card.height - thirdCard.height*0.6}px`,
                    left: '-20%'
                });
            } else if (windowBottom > secondCard.bottom*0.7) {
                setCircleStyle({
                    top: `${card.height - thirdCard.height - secondCard.height*0.7}px`,
                    right: '-20%',
                    left: "auto"
                });
            } else if (windowBottom > firstCard.bottom) {
                setCircleStyle({
                    top: `${card.height - thirdCard.height - secondCard.height - firstCard.height*0.8}px`,
                    left: '-20%'
                });
            }
            else {
                setCircleStyle({
                    top: `${card.height - thirdCard.height - secondCard.height - firstCard.height*0.8}px`,
                    left: '-20%'
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', controlCircle);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', controlCircle);
        };
    }, []);

    return (
        <div className="member">
            <div className="circle" style={circleStyle}></div>

            <div className="member-title">
                <p>협회임원 소개</p>
            </div>

            <div className="member-box" ref={cardRef}>
                <div className={`member-card ${activeCard === 'first' ? 'active' : ''}`} ref={firstCardRef}>
                    <img src={member1} alt="협회장" className="member-image" />
                    <div className="member-info">
                        <p>안녕하십니까.<br />협회장&nbsp;<span>최진석</span>&nbsp;입니다.</p>
                        <br />
                        <ul>
                            <li>서울 도봉구 등 노인복지시설 노인 운동 강사</li>
                            <li>생활스포츠지도사 2급 (보디빌딩)</li>
                            <li>노인스포츠지도사 (보디빌딩)</li>
                            <li>노인인지놀이지도사/시니어인지활동지도사</li>
                            <li>PT 트레이너 및 노인 운동 지도 경력 2년</li>
                        </ul>
                    </div>
                </div>
                <div className={`member-card reverse ${activeCard === 'second' ? 'active' : ''}`} ref={secondCardRef}>
                    <img src={member2} alt="부회장" className="member-image" />
                    <div className="member-info">
                        <p>반갑습니다.<br />부회장&nbsp;<span>홍자형</span>&nbsp;입니다.</p>
                        <br />
                        <ul>
                            <li>광운대 스포츠융합학과 전공</li>
                            <li>서울 도봉구 등 노인복지시설 노인 운동 강사</li>
                            <li>태권도 유아 체육 강사</li>
                            <li>태권도 선수 및 경력 14년</li>
                            <li>시니어인지활동지도사 1급</li>
                        </ul>
                    </div>
                </div>
                <div className={`member-card ${activeCard === 'third' ? 'active' : ''}`} ref={thirdCardRef}>
                    <img src={member3} alt="수석연구원" className="member-image" />
                    <div className="member-info">
                        <p>환영해요.<br />수석연구원&nbsp;<span>이승협</span>&nbsp;입니다.</p>
                        <br />
                        <ul>
                            <li>한림대 의학 전공</li>
                            <li>연세대 학부생공공학과/인지과학 졸업</li>
                            <li>노인두뇌훈련지도사/인지활동심리상담사</li>
                            <li>2022 대한민국 인재상 수상</li>
                            <li>청년 정신건강 혁신리더 선정</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member;
