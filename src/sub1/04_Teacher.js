import React from "react";
import "./04_Teacher.css";

const teachers = [
  {
    name: "최진석",
    description:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요.",
    region: "서울 전체",
    days: "화, 목",
    time: "13-17시",
    status: "현재 활발히 활동하고 있어요!",
    statusType: "active",
  },
  {
    name: "최진석",
    description:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요.",
    region: "서울 전체",
    days: "화, 목",
    time: "13-17시",
    status: "아직은 수업 준비중이에요 :)",
    statusType: "preparing",
  },
  {
    name: "최진석",
    description:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요.",
    region: "서울 전체",
    days: "화, 목",
    time: "13-17시",
    status: "이미 협회원 교육을 수료하고 졸업!",
    statusType: "ready",
  },
];

const TeacherCard = ({ teacher }) => {
  return (
    <div className="teacher-card">
      <div className={`status ${teacher.statusType}`}>{teacher.status}</div>
      <div className="teacher-info">
        <div className="teacher-image"></div>
        <div>
          <h2 className="teacher-name">{teacher.name}</h2>
          <p className="teacher-description">{teacher.description}</p>
        </div>
      </div>
      <div className="teacher-details">
        <p>활동지역: {teacher.region}</p>
        <p>활동요일: {teacher.days}</p>
        <p>활동시간: {teacher.time}</p>
      </div>
    </div>
  );
};

const Teacher = () => {
  return (
    <div className="teachers-list">
      <h1>협회원 소개</h1>
      <p>신청하실 때, 원하는 강사를 선택하실 수 있습니다. 어떤 강사가 있는지 미리 둘러보세요!</p>
      <div>
        {teachers.map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default Teacher;