import React, { useState, useEffect } from "react";
import "./04-02_Card.css";

const message = {
    active: "현재 활발히 활동하고 있어요!",
    preparing: "아직은 수업 준비중이에요 :)",
    ready: "예비 협회원! 교육수료 후 올게요!"
};
  
const TeacherPopup = ({ teacherId, onClose }) => {

    const [teacherData, setTeacherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeacherDetails = async () => {
        try {
            const response = await fetch(`http://ec2-43-203-236-199.ap-northeast-2.compute.amazonaws.com:8080/api/members/${teacherId}`);
            const data = await response.json();
            if (data.status === 200) {
                var type;
                if (data.data.status === "활동중") {
                  type = message.active;
                }
                else if (data.data.status === "활동예정") {
                  type = message.preparing;
                }
                else if (data.data.status === "교육중") {
                  type = message.ready;
                }
            
                setTeacherData({
                    profile: data.data.profile,
                    statusType: data.data.status,
                    statusMsg: type,
                    name: data.data.name,
                    description: data.data.description,
                    certificates: data.data.certificates.map(cert => cert.name),
                    careers: data.data.careers.map(career => career.name),
                    areas: data.data.areas.map(area => area.name).join(", "),
                    days: data.data.weeks.map(week => week.name).join(", "),
                    time: data.data.time + "시"
                });
            }
        } catch (error) {
            console.error("Failed to fetch teacher details:", error);
        } finally {
            setLoading(false);
        }
        };
        fetchTeacherDetails();
    }, [teacherId]);

    if (loading) return <p>로딩 중...</p>;

    if (!teacherData) return <p>데이터를 불러오는 데 실패했습니다.</p>;

    return (
        <div className="teacher-overlay" onClick={onClose}>
            <div className="teacher-popup" onClick={(e) => e.stopPropagation()}>
                <img className="teacher-image" src={teacherData.profile} alt={teacherData.name} />
                <div className="teacher-text">
                    <div className={`status ${teacherData.statusType}`}>{teacherData.statusMsg}</div>
                    <h2 className="teacher-name">{teacherData.name}</h2>
                    <div className="teacher-description">
                        <span>소개</span>
                        <p>{teacherData.description}</p>
                    </div>
                    <div className="teacher-details">
                        <div>
                            <span>자격증</span>
                            <ul>
                                {teacherData.certificates.map((qualification, index) => (
                                    <li key={index}>{qualification}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span>경력사항</span>
                            <ul>
                                {teacherData.careers.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <p><span>활동지역:</span> {teacherData.areas}</p>
                        <p><span>수업요일:</span> {teacherData.days}</p>
                        <p><span>수업시간:</span> {teacherData.time}</p>
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
                <img className="teacher-image" src={teacher.profile} alt={teacher.name} />
                <div className="teacher-text">
                <div className={`status ${teacher.statusType}`}>{teacher.statusMsg}</div>
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
                <TeacherPopup teacherId={teacher.memberId} onClose={() => setIsPopupOpen(false)} />
            )}
        </>
    );
};

export default TeacherCard;