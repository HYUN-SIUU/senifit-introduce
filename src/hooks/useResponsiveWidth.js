import { useState, useEffect } from 'react';

function useResponsiveWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        handleResize(); // 초기 너비 설정

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth * 0.8; // 요소 너비를 화면의 80%로 설정
}

export default useResponsiveWidth;
