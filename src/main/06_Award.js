import React, { useState, useEffect } from 'react';
import './06_Award.css';
import videoFile from '../img/06_award.MOV';
import bgImage1 from '../img/06_award1.png';
import bgImage2 from '../img/06_award2.png';
import bgImage3 from '../img/06_award3.png';

function Award() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                    <div className="background-item">
                        <img src={bgImage1} alt="배경 이미지 1" />
                        <div className="overlay">
                            <p>[수상] 우수상에 선정된 예비 창업가 ‘시니핏’팀 ...</p>
                            <span>출처 : 아뉴스투데이</span>
                        </div>
                    </div>
                    <div className="background-item">
                        <img src={bgImage2} alt="배경 이미지 2" />
                        <div className="overlay">
                            <p>[수상] 우수상에 선정된 예비 창업가 ‘시니핏’팀 ...</p>
                            <span>출처 : 아뉴스투데이</span>
                        </div>
                    </div>
                    <div className="background-item">
                        <img src={bgImage3} alt="배경 이미지 3" />
                        <div className="overlay">
                            <p>[수상] 우수상에 선정된 예비 창업가 ‘시니핏’팀 ...</p>
                            <span>출처 : 아뉴스투데이</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="award-images desktop">
                    <div className="background-item">
                        <img src={bgImage1} alt="배경 이미지 1" />
                        <div className="overlay">
                            <p>[수상] 우수상에 선정된 예비 창업가 ‘시니핏’팀 ...</p>
                            <span>출처 : 아뉴스투데이</span>
                        </div>
                    </div>
                    <div className="background-item">
                        <img src={bgImage2} alt="배경 이미지 2" />
                        <div className="overlay">
                            <p>[수상] 우수상에 선정된 예비 창업가 ‘시니핏’팀 ...</p>
                            <span>출처 : 아뉴스투데이</span>
                        </div>
                    </div>
                    <div className="background-item">
                        <img src={bgImage3} alt="배경 이미지 3" />
                        <div className="overlay">
                            <p>[수상] 우수상에 선정된 예비 창업가 ‘시니핏’팀 ...</p>
                            <span>출처 : 아뉴스투데이</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Award;
