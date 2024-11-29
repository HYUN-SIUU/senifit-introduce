import React, { useState, useEffect } from 'react';
import './06_Award.css';
import videoFile from '../img/06_award.MOV';
import bgImage1 from '../img/06_award1.jpg';
import bgImage2 from '../img/06_award2.jpg';
import bgImage3 from '../img/06_award3.jpg';

function Award() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openLink = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
        <div className="award">
            {/* 제목 */}
            <h2 className="title">
                시니핏은 이렇게 <span className="orange">인정</span>받고 있어요!
            </h2>

            {/* 동영상 영역 */}
            <div className="video-container">
                <video controls>
                    <source src={videoFile} type="video/mp4" />
                    해당 브라우저는 동영상을 지원하지 않습니다.
                </video>
            </div>
        </div>
        {/* 배경 사진 영역 */}
        {isMobile ? (
                <div className="award-images mobile">
                    <div className="background-item" onClick={() => openLink('https://isplus.com/article/view/isp202411260047')}>
                        <img src={bgImage1} alt="배경 이미지 1" />
                        <div className="overlay">
                            <p>시니핏, 시니어 운동 문화 형성 및 건강관리 위한 솔루션 제시해</p>
                            <span>출처 : 일간스포츠</span>
                        </div>
                    </div>
                    <div className="background-item" onClick={() => openLink('https://www.incheonilbo.com/news/articleView.html?idxno=1259410')}>
                        <img src={bgImage2} alt="배경 이미지 2" />
                        <div className="overlay">
                            <p>'2024 안산 스타트 업 청년창업 경진대회' 성황리에 종료...우수상에 선정된 예비 창업가 ‘시니핏’ 팀</p>
                            <span>출처 : 인천일보</span>
                        </div>
                    </div>
                    <div className="background-item" onClick={() => openLink('https://it.chosun.com/news/articleView.html?idxno=2023092126888')}>
                        <img src={bgImage3} alt="배경 이미지 3" />
                        <div className="overlay">
                            <p>‘서울 AI 영포럼’ 개최…청년 창업가들 AI 미래 보여줘...시니핏 등은 투자자들 앞에서 IR을 진행</p>
                            <span>출처 : IT조선</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="award-images desktop">
                    <div className="background-item" onClick={() => openLink('https://isplus.com/article/view/isp202411260047')}>
                        <img src={bgImage1} alt="배경 이미지 1" />
                        <div className="overlay">
                            <p>시니핏, 시니어 운동 문화 형성 및 건강관리 위한 솔루션 제시해</p>
                            <span>출처 : 일간스포츠</span>
                        </div>
                    </div>
                    <div className="background-item" onClick={() => openLink('https://www.incheonilbo.com/news/articleView.html?idxno=1259410')}>
                        <img src={bgImage2} alt="배경 이미지 2" />
                        <div className="overlay">
                            <p>'2024 안산 스타트 업 청년창업 경진대회' 성황리에 종료...우수상에 선정된 예비 창업가 ‘시니핏’ 팀</p>
                            <span>출처 : 인천일보</span>
                        </div>
                    </div>
                    <div className="background-item" onClick={() => openLink('https://it.chosun.com/news/articleView.html?idxno=2023092126888')}>
                        <img src={bgImage3} alt="배경 이미지 3" />
                        <div className="overlay">
                            <p>‘서울 AI 영포럼’ 개최…청년 창업가들 AI 미래 보여줘...시니핏 등은 투자자들 앞에서 IR을 진행</p>
                            <span>출처 : IT조선</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Award;
