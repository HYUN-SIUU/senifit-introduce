import React, { useEffect, useState } from 'react';
import "../styles/all.css"
import './03_Why2.css';
import Medic from '../img/sub2_03_medic.png';
import Medic2 from '../img/sub2_03_medic2.png';
import Image1 from '../img/04_why1.png';
import Image2 from '../img/04_why2.png';
import Image3 from '../img/04_why3.png';
import Image4 from '../img/04_why4.png';

function Why() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1270);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1270);
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 초기 화면 크기에 맞춰 설정

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="why2">
            {isLargeScreen ? (
                <>
                <div className="up">
                    <div className="title">
                        <span className="orange">왜</span>
                        <p>‘시니핏’이어야</p>
                        <p>할까요?</p>
                    </div>
                    <div className="first">
                        <div className="count">01</div>
                        <p>의학 기반으로 <span className="orange">4가지 테마</span>로</p>
                        <p>근력 운동을 진행합니다.</p>
                        <br/>
                        <span>어르신들의 신체 능력 향상을 위해 체계적으로 운동을 진행합니다.</span>
                        <br/><br/>
                        <img src={Medic} alt="medic" />
                    </div>
                </div>
                <div className="down">
                    <div className="second">
                        <div className="count">02</div>
                        <p>스포츠 프로그램을 통해&nbsp;<span className="orange">재미</span>를 더했습니다.</p>
                        <br/>
                        <span>태권도, 복싱 등을 비롯하여 새로운 스포츠 접근을 통해</span>
                        <span>어르신들의 흥미를 이끕니다.</span>
                        <br/>
                        <div className="why-imgs">
                            <div className="item">
                                <img src={Image1} alt="advan_medic" />
                                <span className="orange">스포츠</span>
                                <span className="orange">학습</span>
                            </div>
                            <div className="item">
                                <img src={Image2} alt="advan_medic" />
                                <span className="orange">스포츠</span>
                                <span className="orange">실습</span>
                            </div>
                            <div className="item">
                                <img src={Image3} alt="advan_medic" />
                                <span className="orange">인지향상</span>
                                <span className="orange">기합게임</span>
                            </div>
                            <div className="item">
                                <img src={Image4} alt="advan_medic" />
                                <span className="orange">노래스포츠</span>
                                <span className="orange">체조</span>
                            </div>
                        </div>
                    </div>
                    <div className="third">
                        <div className="count">03</div>
                        <p><span className="orange">교구</span>를 통해 어르신들의&nbsp;<span className="orange">운동의 강도</span>를</p>
                        <p><span className="orange">맞춤으로 조절</span>합니다.</p>
                        <br/>
                        <span>의학 기반 테마에 맞게&nbsp;<span className="orange">교구 4가지를 활용하여</span></span>
                        <span><span className="orange">강도를 조절</span>하여 운동을 진행합니다.</span>
                        <br/>
                        <span>하체 운동을 더 효과적으로 진행하기 위해</span>
                        <span>교구를&nbsp;<span className="orange">자체 개발 진행중</span>입니다. (출시예정)</span>
                    </div>
                </div>
                </>
            ) : (
                <>
                    <div className="title">
                        <p><span className="orange">왜</span>&nbsp;&nbsp;‘시니핏’이어야 할까요?</p>
                    </div>
                    
                    <div className="first">
                        <div className="count">01</div>
                        <p>의학 기반으로 <span className="orange">4가지 테마</span>로</p>
                        <p>근력 운동을 진행합니다.</p>
                        <br/>
                        <span>어르신들의 신체 능력 향상을 위해 체계적으로 운동을 진행합니다.</span>
                        <br/><br/>

                        {isMobile ? (
                            <img src={Medic2} alt="의학 사진" />
                        ) : (
                            <img src={Medic} alt="의학 사진" />
                        )}
                    </div>
                    <div className="second">
                        <div className="count">02</div>
                        <p>스포츠 프로그램을 통해&nbsp;<span className="orange">재미</span>를 더했습니다.</p>
                        <br/>
                        <span>태권도, 복싱 등을 비롯하여 새로운 스포츠 접근을 통해</span>
                        <span>어르신들의 흥미를 이끕니다.</span>
                        <br/>
                        <div className="why-imgs">
                            <div className="item">
                                <img src={Image1} alt="advan_medic" />
                                <span className="orange">스포츠</span>
                                <span className="orange">학습</span>
                            </div>
                            <div className="item">
                                <img src={Image2} alt="advan_medic" />
                                <span className="orange">스포츠</span>
                                <span className="orange">실습</span>
                            </div>
                            <div className="item">
                                <img src={Image3} alt="advan_medic" />
                                <span className="orange">인지향상</span>
                                <span className="orange">기합게임</span>
                            </div>
                            <div className="item">
                                <img src={Image4} alt="advan_medic" />
                                <span className="orange">노래스포츠</span>
                                <span className="orange">체조</span>
                            </div>
                        </div>
                    </div>
                    <div className="third">
                        <div className="count">03</div>
                        <p><span className="orange">교구</span>를 통해 어르신들의&nbsp;<span className="orange">운동의 강도</span>를</p>
                        <p><span className="orange">맞춤으로 조절</span>합니다.</p>
                        <br/><br/>
                        <span>의학 기반 테마에 맞게&nbsp;<span className="orange">교구 4가지를 활용하여 강도를 조절</span>하여 운동을 진행합니다.</span>
                        <br/><br/>
                        <span>하체 운동을 더 효과적으로 진행하기 위해 교구를&nbsp;<span className="orange">자체 개발 진행중</span>입니다. (출시예정)</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default Why;
