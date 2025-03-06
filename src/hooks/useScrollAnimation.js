import { useState, useEffect, useRef } from "react";

const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        if (!elementRef.current) return; // 요소가 렌더링되지 않았다면 실행 X

        const currentElement = elementRef.current; // 현재 ref 값 저장

        const observer = new IntersectionObserver(
            ([entry]) => {
                const rect = entry.boundingClientRect;
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                // ❌ 기존 문제: 요소가 뷰포트 위로 나가도 false가 됨
                // ✅ 해결: 요소가 뷰포트 위쪽에 있으면 상태 유지, 아래쪽으로 벗어나면 false
                if (rect.top > windowHeight) {
                    setIsVisible(false);  // 👈 요소가 화면 아래쪽으로 벗어났을 때만 숨김
                } else if (entry.isIntersecting || rect.top < 0) {
                    setIsVisible(true);  // 👈 요소가 화면 위쪽이면 계속 보이도록 유지
                }
            },
            {
                root: null, // 뷰포트 기준 감지
                rootMargin: "0px", // 추가 여백 없이 감지
                threshold: 0.1, // 10% 이상 보이면 감지
            }
        );

        observer.observe(currentElement); // 감시 시작

        return () => {
            if (currentElement) { // cleanup 시에도 동일한 요소 해제
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return { elementRef, isVisible };
};

export default useScrollAnimation;
