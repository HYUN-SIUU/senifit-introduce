import React, { useEffect, useState } from 'react';
import "../styles/all.css"
import "./03_Before.css";

function Before() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
       <div className="before">
            <div className="up">
                <p>과거에 진행한 교육</p>
            </div>
            {isMobile ? (
                <div className="down">
                    <div className="back1"></div>
                    <div className="back2"></div>
                </div>
            ) : (
                <div className="down">
                    <div className="back1"></div>
                    <div className="back2"></div>
                </div>
            )}
       </div> 
    );
}

export default Before;
