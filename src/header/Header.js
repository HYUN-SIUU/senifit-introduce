import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import "../styles/all.css";
import mainLogo from '../img/main.png';
import shop from '../img/shoppingBag.png';

function Header() {
    const navigate = useNavigate();
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1270);

    const openStore = () => window.open("https://smartstore.naver.com/teunteunturtle", "_blank");

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth > 1270);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            {!isLargeScreen ? (
                <div className="header-container">
                    <div className="header-nav-0">
                        <div className="header-logo" onClick={() => navigate('/main')}>
                            <img src={mainLogo} alt="SGEE Logo" />
                        </div>
                        <div className="header-title" onClick={() => navigate('/main')}>
                            <p>한국노인단체운동전문가협회</p>
                        </div>
                    </div>
                    <button className="navbar-toggler" onClick={() => navigate('/menu')}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            ) : (
                <div className="header-container">
                    <div className="header-nav-0">
                        <div className="header-logo" onClick={() => navigate('/main')}>
                            <img src={mainLogo} alt="SGEE Logo" />
                        </div>
                        <div className="header-title" onClick={() => navigate('/main')}>
                            <p>한국노인단체운동전문가협회</p>
                        </div>
                    </div>
                    <nav className="header-nav">
                        <ul>
                            <li><button onClick={() => navigate('/sub1')}>SGEE 소개</button></li>
                            <li><button onClick={() => navigate('/sub2')}>시니핏 소개</button></li>
                            <li><button onClick={() => navigate('/sub3')}>SGEE 교육</button></li>
                            <li><button onClick={() => navigate('/sub4')}>문의하기</button></li>
                            <li className="store-btn" onClick={openStore}><button><img src={shop} alt="쇼핑백" />공식스토어</button></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
