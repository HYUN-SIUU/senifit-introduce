import React from 'react';
import './SNSLinks.css';

function SNSLinks() {
    return (
        <div className="sns-links lab">
            <a href="https://blog.link" target="_blank" rel="noopener noreferrer" className="sns-button">
                블로그
            </a>
            <a href="https://instagram.link" target="_blank" rel="noopener noreferrer" className="sns-button">
                인스타
            </a>
            <a href="https://kakaotalk.link" target="_blank" rel="noopener noreferrer" className="sns-button">
                카카오
            </a>
        </div>
    );
}

export default SNSLinks;
