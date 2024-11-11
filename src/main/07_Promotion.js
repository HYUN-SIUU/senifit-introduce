import React from 'react';
import { useNavigate } from 'react-router-dom';
import './07_Promotion.css';

function Promotion() {
    const navigate = useNavigate();

    return (
        <div className="promotion">
            <div className="application-consult" onClick={() => navigate('/sub4')}>
                상담신청→
            </div>
        </div>
    );
}

export default Promotion;
