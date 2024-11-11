import React, { useEffect, useState } from 'react';
import './04_Why.css';
import advanImage from '../img/advan_medic.png';
import Image from '../img/image.png';

function Why() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1270);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1270) {
                setIsLargeScreen(true);
                webScreenMax();
            } else {
                setIsLargeScreen(false);
                webScreenMin();
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 초기 화면 크기에 맞춰 설정

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleResize2 = () => {
            if (window.innerWidth <= 800) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize2);
        handleResize2(); // 초기 화면 크기에 맞춰 설정

        return () => window.removeEventListener('resize', handleResize2);
    }, []);

    const webScreenMax = () => {
        // 2x2 그리드로 설정
        document.querySelector(".frame106").style = `
            position: absolute; top: 0; left: 2vw;
            width: 47%; height: 395px;
            display: flex; justify-content: space-between; align-items: flex-end;
        `;
        document.querySelector(".frame89").style = `
            position: absolute; top: 0; right: 2vw;
            width: 47%; height: 395px; min-width: 600px; padding: 40px;
            display: flex; flex-direction: column; justify-content: center; flex: 1 0 0;
            border-radius: 60px 60px 60px 0px;
            background: #DD7600;
        `;
        document.querySelector(".frame80").style = `
            position: absolute; bottom: 0; left: 2vw;
            width: 47%; height: 400px; min-width: 600px; padding: 30px;
            display: flex; flex-direction: column; justify-content: center; align-items: flex-start; flex: 1 0 0;
            border-radius: 60px 0px 60px 60px;
            background: #D58223;
        `;
        document.querySelector(".frame86").style = `
            position: absolute; bottom: 0; right: 2vw;
            width: 47%; height: 400px; min-width: 600px; padding: 40px;
            display: flex; flex-direction: column; justify-content: center; flex: 1 0 0; gap: 8px;
            border-radius: 0px 60px 60px 60px;
            background: #914D00;
        `;
    };

    const webScreenMin = () => {
        // 1x4 세로 배열로 설정
        document.querySelector('.frame106').style = `
            position: absolute; top: 0; left: 2vw;
            width: 75%; height: 400px;
            display: flex; justify-content: space-between; align-items: flex-end;
        `;
        document.querySelector('.frame89').style = `
            position: absolute; top: 410px; left: 2vw;
            width: 75%; height: 400px; min-width: 600px; padding: 40px;
            display: flex; flex-direction: column; justify-content: center; flex: 1 0 0;
            border-radius: 60px 60px 0px 0px;
            background: #DD7600;
        `;
        document.querySelector('.frame80').style = `
            position: absolute; top: 820px; left: 2vw;
            width: 75%; height: 400px; min-width: 600px; padding: 30px;
            display: flex; flex-direction: column; justify-content: center; align-items: flex-start; flex: 1 0 0;
            border-radius: 0px 0px 0px 0px;
            background: #D58223;
        `;
        document.querySelector('.frame86').style = `
            position: absolute; top: 1230px; left: 2vw;
            width: 75%; height: 400px; min-width: 600px; padding: 40px;
            display: flex; flex-direction: column; justify-content: center; flex: 1 0 0;
            border-radius: 0px 0px 60px 60px;
            background: #914D00;
        `;
    };

    return (
        <div className="advantage">
            <div className="frame106">
                {isMobile ? (
                    <div className="textbox">
                        <p>그럼,&nbsp;<span className="orange">왜</span>&nbsp;‘시니핏’이어야 할까요?</p>
                    </div>
                ) : (
                    <div className="textbox">
                        <p>그럼,&nbsp;<span className="orange">왜</span></p>
                        <p>‘시니핏’이어야</p>
                        <p>할까요?</p>
                    </div>
                )}
            </div>
            <div className="frame89">
                <p className="h3">의학 기반으로 4가지 테마로</p>
                <p className="h3">근력 운동을 진행합니다.</p>
                <br/><br/><br/>
                <p>어르신들의 신체 능력 향상을 위해 체계적으로 운동을 진행합니다.</p>
                <img src={advanImage} alt="advan_medic" />
            </div>
            <div className="frame80">
                <p className="h3">스포츠 프로그램을 통해 재미를 더했습니다.</p>
                <br/><br/><br/>
                <p>태권도, 복싱 등 비전통적인 스포츠 접근을 통해</p>
                <p>어르신들의 흥미를 이끌어냅니다.</p>
                <div className="main-advantange-imgArray">
                    <div className="main-advantange-imgArray2">
                        <img src={Image} alt="advan_medic" />
                        <span>스포츠</span>
                        <br/>
                        <span>학습</span>
                    </div>
                    <div className="main-advantange-imgArray2">
                        <img src={Image} alt="advan_medic" />
                        <span>스포츠</span>
                        <br/>
                        <span>실습</span>
                    </div>
                    <div className="main-advantange-imgArray2">
                        <img src={Image} alt="advan_medic" />
                        <span>인지향상</span>
                        <br/>
                        <span>기합게임</span>
                    </div>
                    <div className="main-advantange-imgArray2">
                        <img src={Image} alt="advan_medic" />
                        <span>노래스포츠</span>
                        <br/>
                        <span>체조</span>
                    </div>
                </div>
            </div>
            <div className="frame86">
                <p className="h3">교구를 통해 어르신들의 운동의 강도를</p>
                <p className="h3">맞춤으로 조절합니다.</p>
                <br/><br/><br/>
                <p>의학 기반 테마에 맞춰 교구 4가지를 활용하여 강도를</p>
                <p>조절하여 운동을 진행합니다.</p>
                <br/><br/><br/>
                <p>하체 운동을 더 효과적으로 진행하기 위해</p>
                <p>교구를 자체 개발 진행중입니다. (출시예정)</p>
            </div>
        </div>
    );
}

export default Why;
