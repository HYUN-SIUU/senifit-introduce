import React, { useEffect, useState } from 'react';
import "../styles/all.css"
import './04_Why.css';
import SiniTrans from '../img/sini-trans.png';
import Medic from '../img/04_medic.png';
import Medic2 from '../img/04_medic2.png';
import Image1 from '../img/04_why1.png';
import Image2 from '../img/04_why2.png';
import Image3 from '../img/04_why3.png';
import Image4 from '../img/04_why4.png';

function Why() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1270);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
    const [medicSrc, setMedicSrc] = useState(Medic);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1270);
            setIsMobile(window.innerWidth <= 800);
            setMedicSrc(window.innerWidth <= 800 ? Medic2 : Medic);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 초기 화면 크기에 맞춰 설정

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="why">
            {isLargeScreen ? (
                <>
                <div className="up">
                    <div className="title">
                        <p>그럼,&nbsp;<span className="orange">왜</span></p>
                        <p>‘시니핏’이어야</p>
                        <p>할까요?</p>
                        <img src={SiniTrans} alt="sini" />
                    </div>
                    <div className="first">
                        <p>의학 기반으로 4가지 테마로</p>
                        <p>근력 운동을 진행합니다.</p>
                        <br/>
                        <span>어르신들의 신체 능력 향상을 위해 체계적으로 운동을 진행합니다.</span>
                        <br/><br/>
                        <img src={Medic} alt="medic" />
                    </div>
                </div>
                <div className="down">
                    <div className="second">
                        <p>스포츠 프로그램을 통해 재미를 더했습니다.</p>
                        <br/>
                        <span>태권도, 복싱 등을 비롯하여 새로운 스포츠 접근을 통해</span>
                        <span>어르신들의 흥미를 이끕니다.</span>
                        <br/>
                        <div className="why-imgs">
                            <div className="item">
                                <img src={Image1} alt="advan_medic" />
                                <span>스포츠</span>
                                <span>학습</span>
                            </div>
                            <div className="item">
                                <img src={Image2} alt="advan_medic" />
                                <span>스포츠</span>
                                <span>실습</span>
                            </div>
                            <div className="item">
                                <img src={Image3} alt="advan_medic" />
                                <span>인지향상</span>
                                <span>기합게임</span>
                            </div>
                            <div className="item">
                                <img src={Image4} alt="advan_medic" />
                                <span>노래스포츠</span>
                                <span>체조</span>
                            </div>
                        </div>
                    </div>
                    <div className="third">
                        <p>교구를 통해 어르신들의 운동의 강도를</p>
                        <p>맞춤으로 조절합니다.</p>
                        <br/><br/>
                        <span>의학 기반 테마에 맞게 교구 4가지를 활용하여</span>
                        <span>강도를 조절하여 운동을 진행합니다.</span>
                        <br/><br/>
                        <span>하체 운동을 더 효과적으로 진행하기 위해</span>
                        <span>교구를 자체 개발 진행중입니다. (출시예정)</span>
                    </div>
                </div>
                </>
            ) : (
                <>
                    {isMobile ? (
                        <div className="title">
                            <p>그럼,&nbsp;<span className="orange">왜</span>&nbsp;‘시니핏’이어야 할까요?</p>
                        </div>
                    ) : (
                        <div className="title">
                            <p>그럼,&nbsp;<span className="orange">왜</span></p>
                            <p>‘시니핏’이어야</p>
                            <p>할까요?</p>
                            <img src={SiniTrans} alt="sini" />
                        </div>
                    )}
                    <div className="first">
                        <p>의학 기반으로 4가지 테마로</p>
                        <p>근력 운동을 진행합니다.</p>
                        <br/>
                        <span>어르신들의 신체 능력 향상을 위해 체계적으로 운동을 진행합니다.</span>
                        <br/><br/>
                        <img src={medicSrc} alt="medic" />
                    </div>
                    <div className="second">
                        <p>스포츠 프로그램을 통해 재미를 더했습니다.</p>
                        <br/>
                        <span>태권도, 복싱 등을 비롯하여 새로운 스포츠 접근을 통해</span>
                        <span>어르신들의 흥미를 이끕니다.</span>
                        <br/>
                        <div className="why-imgs">
                            <div className="item">
                                <img src={Image1} alt="advan_medic" />
                                <span>스포츠</span>
                                <span>학습</span>
                            </div>
                            <div className="item">
                                <img src={Image2} alt="advan_medic" />
                                <span>스포츠</span>
                                <span>실습</span>
                            </div>
                            <div className="item">
                                <img src={Image3} alt="advan_medic" />
                                <span>인지향상</span>
                                <span>기합게임</span>
                            </div>
                            <div className="item">
                                <img src={Image4} alt="advan_medic" />
                                <span>노래스포츠</span>
                                <span>체조</span>
                            </div>
                        </div>
                    </div>
                    <div className="third">
                        <p>교구를 통해 어르신들의 운동의 강도를</p>
                        <p>맞춤으로 조절합니다.</p>
                        <br/><br/>
                        <span>의학 기반 테마에 맞게 교구 4가지를 활용하여</span>
                        <span>강도를 조절하여 운동을 진행합니다.</span>
                        <br/><br/>
                        <span>하체 운동을 더 효과적으로 진행하기 위해</span>
                        <span>교구를 자체 개발 진행중입니다. (출시예정)</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default Why;
