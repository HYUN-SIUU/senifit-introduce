import React, { useState, useEffect } from "react";
import "./04_Teacher.css";
import FilterPopup from "./04-01_Filter";
import TeacherCard from "./04-02_Card";

const message = {
  active: "현재 활발히 활동하고 있어요!",
  preparing: "아직은 수업 준비중이에요 :)",
  ready: "예비 협회원! 교육수료 후 올게요!"
};

const Teacher = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState(["전국"]);
  const [selectedStatus, setSelectedStatus] = useState(["전체"]);

  const [teachersData, setTeachersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("http://ec2-43-203-236-199.ap-northeast-2.compute.amazonaws.com:8080/api/members");
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

          setTeachersData(data.data.map(teacher => ({
            memberId: teacher.memberId,
            profile: teacher.profile,
            statusType: teacher.status,
            statusMsg: type,
            name: teacher.name,
            description: teacher.description,
            region: "전국",
            days: teacher.weeks.map(week => week.name).join(", "),
            time: teacher.time + "시"
          })));
        }
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  if (loading) return <p>로딩 중...</p>;

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
        {filteredTeachers.map((teacher) => (
          <TeacherCard key={teacher.memberId} teacher={teacher}/>
        ))}
      </div>

    </div>
  );
};

export default Teacher;
