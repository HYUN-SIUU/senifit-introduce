import React, { useState } from "react";
import "./04-02_Card.css";
  
const TeacherPopup = ({ teacher, onClose }) => {
    return (
        <div className="teacher-overlay" onClick={onClose}>
            <div className="teacher-popup" onClick={(e) => e.stopPropagation()}>
                <img className="teacher-image" src={teacher.image} alt={teacher.name} />
                <div className="teacher-text">
                    <div className={`status ${teacher.statusType}`}>{teacher.status}</div>
                    <h2 className="teacher-name">{teacher.name}</h2>
                    <div className="teacher-description">
                        <span>소개</span>
                        <p>{teacher.description}</p>
                    </div>
                    <div className="teacher-details">
                        <div>
                            <span>자격증</span>
                            <ul>
                                {teacher.qualifications.map((qualification, index) => (
                                    <li key={index}>{qualification}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span>경력사항</span>
                            <ul>
                                {teacher.career.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <p><span>활동지역:</span> {teacher.region}</p>
                        <p><span>수업요일:</span> {teacher.days}</p>
                        <p><span>수업시간:</span> {teacher.time}</p>
                    </div>
                    <button onClick={onClose}>이전 화면으로 돌아가기</button>
                </div>
            </div>
        </div>
    );
};

const TeacherCard = ({ teacher }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            <div className="teacher-card" onClick={() => setIsPopupOpen(true)}>
                <img className="teacher-image" src={teacher.image} alt={teacher.name} />
                <div className="teacher-text">
                <div className={`status ${teacher.statusType}`}>{teacher.status}</div>
                <h2 className="teacher-name">{teacher.name}</h2>
                <p className="teacher-description">
                    {teacher.description.length > 40 ? teacher.description.slice(0, 40) + "..." : teacher.description}
                    {teacher.description.length > 40 && <p className="read-more">더보기</p>}
                </p>
                <div className="teacher-details">
                    <p><span>활동지역:</span> {teacher.region}</p>
                    <p><span>수업요일:</span> {teacher.days}</p>
                    <p><span>수업시간:</span> {teacher.time}</p>
                </div>
                </div>
            </div>

            {isPopupOpen && (
                <TeacherPopup teacher={teacher} onClose={() => setIsPopupOpen(false)} />
            )}
        </>
    );
};

export default TeacherCard;