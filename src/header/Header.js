import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import mainLogo from '../img/main.png';

function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo" onClick={() => navigate('/main')}>
                    <img src={mainLogo} alt="SGEE Logo" />
                </div>
                <div className="header-title">
                    <p>한국노인단체운동전문가협회</p>
                </div>
                <nav className="header-nav">
                    <button onClick={() => navigate('/sub1')}>SGEE 소개</button>
                    <button onClick={() => navigate('/sub2')}>시니핏 소개</button>
                    <button onClick={() => navigate('/sub3')}>SGEE 교육</button>
                    <button onClick={() => navigate('/sub4')}>문의하기</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
