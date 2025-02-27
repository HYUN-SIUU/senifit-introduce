import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderMenu.css';
import home from '../img/home.png';
import shop from '../img/shoppingBag2.png';

function HeaderMenu() {
    const navigate = useNavigate();

    const openStore = () => window.open("https://smartstore.naver.com/teunteunturtle", "_blank");

    return (
        <div className="hamburger-menu">
            <div className='up'>
                <div className='btn-menu'>
                    <img src={home} className="home-btn" alt="홈 버튼" onClick={() => navigate('/main')} />
                    <button className="close-btn" onClick={() => navigate(-1)}></button>
                </div>
                <div className="move-btn">
                    <button onClick={() => navigate('/sub1')}>SGEE 소개</button>
                    <button onClick={() => navigate('/sub2')}>시니핏 소개</button>
                    <button onClick={() => navigate('/sub3')}>SGEE 교육</button>
                    <button onClick={() => navigate('/sub4')}>문의하기</button>
                </div>
            </div>
            <div className='down'>
                <button className="store-btn" onClick={openStore}>
                    <img src={shop} alt="쇼핑백" />공식스토어 바로가기
                </button>
            </div>
        </div>
    );
}

export default HeaderMenu;
