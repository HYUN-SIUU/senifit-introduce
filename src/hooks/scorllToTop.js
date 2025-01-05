import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // 바로 맨 위로 이동
        window.scrollTo({
            top: 0,      // Y축 맨 위로
            left: 0,     // X축 맨 왼쪽으로
            behavior: "auto" // 애니메이션 비활성화
        });
    }, [pathname]);

    return null;
}

export default ScrollToTop;
