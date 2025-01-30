import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import "../styles/all.css"
import mainLogo from '../img/main.png';
import home from '../img/home.png';

function Header() {
    const navigate = useNavigate();

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1270);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1270);
        };

        handleResize(); // 초기 설정
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
            {!isLargeScreen ? (
                menuOpen ? (
                    <div className="hamburger-menu">
                        <div>
                            <div className="home-img"><img src={home} alt="홈 버튼" onClick={() => navigate('/main')}/></div>
                            <div className="move-button">
                                <button onClick={() => navigate('/sub1')}>SGEE 소개</button>
                                <button onClick={() => navigate('/sub2')}>시니핏 소개</button>
                                <button onClick={() => navigate('/sub3')}>SGEE 교육</button>
                                <button onClick={() => navigate('/sub4')}>문의하기</button>
                            </div>
                        </div>
                        <button className="close-menu" onClick={toggleMenu}></button>
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
                            <button 
                                className="navbar-toggler" 
                                type="button" 
                                onClick={toggleMenu}
                                data-bs-toggle="collapse" 
                                data-bs-target="#navbarToggleExternalContent" 
                                aria-controls="navbarToggleExternalContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    
                )
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
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
