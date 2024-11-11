import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../styles/all.css';

function Sub4() {
    return (
        <div>
            <Header />
            <Footer />
            {/* 나머지 섹션을 필요에 따라 추가할 수 있습니다. */}
            <div>sub4 페이지</div>
        </div>
    );
}

export default Sub4;