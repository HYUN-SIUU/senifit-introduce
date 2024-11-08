import { useEffect } from 'react';

function useScrollAnimation(className) {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.8, // 요소의 50%가 보일 때 애니메이션 적용
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, [className]);
}

export default useScrollAnimation;
