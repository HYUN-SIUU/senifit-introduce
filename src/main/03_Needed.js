import React, { useState, useEffect } from 'react';
import "../styles/all.css"
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
                        <p className="orange">낙상 방지를 위해</p>
                        <p className="orange">운동을 시켜주고 싶은데</p>
                        <p className="orange">기존 낙상 방지 운동 기구는 너무 비싸요</p>
                    </div>
                </div>
                <div className="second">
                    <div className="textbox">
                        <p>어르신들을 위해서 체조를 진행하고 있는데</p>
                        <p>운동 효과가 있는지 모르겠어요.</p>
                        <br/>
                        <p>낙상 방지를 위한 다리 운동은</p>
                        <p className="orange">정보도 없고 위험할 것 같아요.</p>
                    </div>
                </div>
                <div className="third">
                    <div className="textbox">
                        <p>어르신들을 위해 강사를 초빙하는데</p>
                        <p>실제로 효과가 있으면 좋겠어요.</p>
                        <br/>
                        <p className="orange">안전하고 재밌게 운동하면서</p>
                        <p className="orange">효과도 볼 수 있는 프로그램이 있으면 좋겠어요.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Needed;
