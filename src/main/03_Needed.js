import React, { useState, useEffect } from 'react';
import './03_Needed.css';

function Needed() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="needed">
            <div className="title">
                <p>원장님, 이런&nbsp;<span className="orange">고민</span>&nbsp;있지 않으세요?</p>
            </div>
            <div className={isMobile ? `run` : `rise`}>
                <div className="first">
                    <div className="textbox">
                        <p>어르신들의 낙상 사고는</p>
                        <p>생각만해도 끔찍해요.</p>
                        <br/>
                        <p className="orange">하체 운동을 시켜주고 싶은데</p>
                        <p className="orange">운동 프로그램이 마땅치 않아요.</p>
                    </div>
                </div>
                <div className="second">
                    <div className="textbox">
                        <p>어르신들을 위해서 운동 프로그램을 </p>
                        <p>도입했는데 운동 효과는 모르겠어요.</p>
                        <br/>
                        <p>상체운동은 저희도 영상보고</p>
                        <p>할 수 있지만</p>
                        <p className="orange">하체운동은 정보가 적고 어려워요.</p>
                    </div>
                </div>
                <div className="third">
                    <div className="textbox">
                        <p>어르신들에게 운동을 시켜도</p>
                        <p>재미가 없으면 하질 않으세요.</p>
                        <br/>
                        <p>운동 효과 뿐만 아니라</p>
                        <p className="orange">재미도 있는</p>
                        <p className="orange">운동 프로그램을 도입하고 싶어요.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Needed;
