import React, { useState } from "react";
import "./04_Teacher.css";
import FilterPopup from "./04-01_Filter";
import Card from "./04-02_Card";
import member1 from "../img/sub1_03_member1.png";

const statusMsg = {
  active: "현재 활발히 활동하고 있어요!",
  preparing: "아직은 수업 준비중이에요 :)",
  ready: "예비 협회원! 교육수료 후 올게요!"
};

const teachersData = [
  {
    name: "최진석",
    description: "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요.",
    region: "서울",
    days: "화, 목",
    time: "13-17시",
    status: statusMsg.active,
    statusType: "활동중",
    image: member1,
    qualifications: [
      "자격증1",
      "자격증2"
    ],
    career: [
      "경력1",
      "경력2"
    ]
  },
  {
    name: "최진석",
    description: "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요.",
    region: "경기",
    days: "화, 목",
    time: "13-17시",
    status: statusMsg.preparing,
    statusType: "활동예정",
    image: member1,
    qualifications: [
      "자격증3",
      "자격증4"
    ],
    career: [
      "경력3",
      "경력4"
    ]
  },
  {
    name: "최진석",
    description: "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요.",
    region: "제주",
    days: "토, 일",
    time: "13-17시",
    status: statusMsg.ready,
    statusType: "교육중",
    image: member1,
    qualifications: [
      "자격증5",
      "자격증6",
      "자격증7"
    ],
    career: [
      "경력5",
      "경력6",
      "경력7"
    ]
  }
];

const Teacher = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState(["전국"]);
  const [selectedStatus, setSelectedStatus] = useState(["전체"]);

  const filteredTeachers = teachersData.filter((teacher) => {
    const regionMatch = selectedRegions.includes("전국") || selectedRegions.includes(teacher.region);
    const statusMatch = selectedStatus.includes("전체") || selectedStatus.includes(teacher.statusType);
    return regionMatch && statusMatch;
  });

  return (
    <div className="teachers-list">
      <h1>협회원 소개</h1>
      <p>신청하실 때, 원하는 강사를 선택하실 수 있습니다. 어떤 강사가 있는지 미리 둘러보세요!</p>
      <br/>
      <div className="filter">
        <p className="filter-info">
          지역: {selectedRegions.length > 0 ? selectedRegions.join(', ') : setSelectedRegions(["전국"])}&nbsp;&nbsp;&nbsp;
          활동상태: {selectedStatus.length > 0 ? selectedStatus.join(', ') : setSelectedStatus(["전체"])}
        </p>
        <button className="filter-btn" onClick={() => setIsFilterOpen(true)}>지역·활동 필터</button>
      </div>

      <FilterPopup
        isOpen={isFilterOpen}
        setIsOpen={setIsFilterOpen}
        selectedRegions={selectedRegions}
        setSelectedRegions={setSelectedRegions}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      <div className="teachers-grid">
        {filteredTeachers.map((teacher, index) => (
          <Card key={index} teacher={teacher}/>
        ))}
      </div>

    </div>
  );
};

export default Teacher;
