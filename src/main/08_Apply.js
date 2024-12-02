import React from 'react';
import "../styles/all.css"
import './08_Apply.css';

function Apply() {
    const handleConsultClick = () => {
        window.open("https://forms.gle/YRKqLGjRfMHiHEp99", "_blank");
    };

    return (
        <div className="apply">
            {/* 제목 */}
            <h2 className="title">
                시니핏이 궁금하다면, 아래에서 신청하세요!
            </h2>

            {/* 설명 텍스트 */}
            <p className="apply-description">
                ‘상담신청’ 버튼을 눌러주시면, 신청서 작성 페이지로 이동합니다. <br />
                아래 신청서를 남겨주시면, 연락드릴게요. (평일 10시~18시)
            </p>

            {/* 상담신청 버튼 */}
            <div className="application-consult" onClick={handleConsultClick}>
                상담신청 →
            </div>

            {/* 소요 시간 */}
            <p className="apply-time">소요시간 : 40초</p>
        </div>
    );
}

export default Apply;
