import React from 'react';
import Header from '../header/Header';
import '../styles/all.css';

function Sub1() {
    return (
        <div>
            <Header />
            {/* 나머지 섹션을 필요에 따라 추가할 수 있습니다. */}
            <div>sub1 페이지</div>
        </div>
    );
}

export default Sub1;
