import React, { useState } from "react";
import "./04_Teacher.css";
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
    statusType: "active",
    image: member1
  },
  {
    name: "최진석",
    description: "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요.",
    region: "경기",
    days: "화, 목",
    time: "13-17시",
    status: statusMsg.preparing,
    statusType: "preparing",
    image: member1
  }
];

const regions = ["전국", "서울", "경기", "인천", "대전", "광주", "대구", "울산", "부산", "세종", 
  "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];
const statusOptions = ["전체", "활동중", "활동예정", "교육중"];


//필터 컴포넌트
const FilterPopup = ({ isOpen, setIsOpen, selectedRegions, setSelectedRegions, selectedStatus, setSelectedStatus }) => {
  if (!isOpen) return null;

  const toggleRegion = (region) => {
    setSelectedRegions((prev) => 
      prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
    );
  };

  const toggleStatus = (status) => {
    setSelectedStatus((prev) => 
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const removeSelectedRegion = (region) => {
    setSelectedRegions((prev) => prev.filter((r) => r !== region));
  };

  const removeSelectedStatus = (status) => {
    setSelectedStatus((prev) => prev.filter((s) => s !== status));
  };

  return (
    <div className="filter-overlay" onClick={() => setIsOpen(false)}>
      <div className="filter-popup" onClick={(e) => e.stopPropagation()}>
        <div className="filter-component">
          <p>지역</p>
          <div className="filter-options1">
            {regions.map((region) => (
              <label key={region} className={`filter-label ${selectedRegions.includes(region) ? "selected" : ""}`}>
                <input type="checkbox" checked={selectedRegions.includes(region)} onChange={() => toggleRegion(region)} />
                {region}
              </label>
            ))}
          </div>
        </div>
        <div className="selected-tags">
          {selectedRegions.map((region) => (
            <span key={region} className="selected-tag">
              {region} <button onClick={() => removeSelectedRegion(region)}>X</button>
            </span>
          ))}
        </div>

        <div className="line"></div>

        <div className="filter-component">
          <p>활동 상태</p>
          <div className="filter-options2">
            {statusOptions.map((status) => (
              <label key={status} className={`filter-label ${selectedStatus.includes(status) ? "selected2" : ""}`}>
                <input type="checkbox" checked={selectedStatus.includes(status)} onChange={() => toggleStatus(status)} />
                {status}
              </label>
            ))}
          </div>
        </div>
        <div className="selected-tags">
          {selectedStatus.map((status) => (
            <span key={status} className="selected-tag">
              {status} <button onClick={() => removeSelectedStatus(status)}>X</button>
            </span>
          ))}
        </div>

        <button className="confirm-btn" onClick={() => setIsOpen(false)}>선택완료</button>
      </div>
    </div>
  );
};


//선생님들 컴포넌트
const TeacherCard = ({ teacher, onClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="teacher-card">
      <img className="teacher-image" src={teacher.image} alt={teacher.name} />
      <div className="teacher-text">
        <div className={`status ${teacher.statusType}`}>{teacher.status}</div>
        <h2 className="teacher-name">{teacher.name}</h2>
        <p className="teacher-description">
          {expanded ? teacher.description : teacher.description.slice(0, 50)}
          {teacher.description.length > 50 && (
            <span className="read-more" onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}>
              {expanded ? " 접기" : " 더보기"}
            </span>
          )}
        </p>
        <div className="teacher-details">
          <p><span>활동지역:</span> {teacher.region}</p>
          <p><span>활동요일:</span> {teacher.days}</p>
          <p><span>활동시간:</span> {teacher.time}</p>
        </div>
      </div>
    </div>
  );
};

const Teacher = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState(["전국"]);
  const [selectedStatus, setSelectedStatus] = useState(["전체"]);

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
        <button className="filter-btn" onClick={() => setIsFilterOpen(true)}><p>지역·활동 필터</p></button>
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
        {teachersData.map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} />
        ))}
      </div>

    </div>
  );
};

export default Teacher;
