import React from 'react';
// import React, { useEffect, useRef, useState } from 'react';
import Header from '../header/Header';
import MainTitle from '../main/02_MainTitle';
import Needed from '../main/03_Needed';
import Why from '../main/04_Why';
import Verified from '../main/05_Verified';
import Award from '../main/06_Award';
// import Promotion from '../main/07_Promotion';
import Apply from '../main/08_Apply';
import LearnMore from '../main/09_LearnMore';
import SNSLinks from '../main/11_SNSLinks';
import Footer from '../footer/Footer';
import '../styles/all.css';

function Main() {
    // const [activeCard, setActiveCard] = useState('first');
    // const firstCardRef = useRef(null);
    // const secondCardRef = useRef(null);
    // const thirdCardRef = useRef(null);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const firstCard = firstCardRef.current.getBoundingClientRect();
    //         const secondCard = secondCardRef.current.getBoundingClientRect();
    //         const thirdCard = thirdCardRef.current.getBoundingClientRect();
    //         const windowBottom = window.innerHeight;

    //         if (windowBottom > thirdCard.bottom*0.9) {
    //             setActiveCard('third');
    //         } else if (windowBottom > secondCard.bottom*0.7) {
    //             setActiveCard('second');
    //         } else if (windowBottom > firstCard.bottom) {
    //             setActiveCard('first');
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    
    return (
        <div>
            <Header />
            <MainTitle/>
            <SNSLinks />
            <Needed />
            <Why />
            <Verified />
            <Award />
            {/*<Promotion />*/}
            <Apply />
            <LearnMore />
            <Footer />
            {/* 나머지 섹션을 필요에 따라 추가할 수 있습니다. */}
        </div>
    );
}

export default Main;
