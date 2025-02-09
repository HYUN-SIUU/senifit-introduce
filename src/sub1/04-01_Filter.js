import React from "react";
import "./04-01_Filter.css";

const regions = ["전국", "서울", "경기", "인천", "대전", "광주", "대구", "울산", "부산", "세종", 
    "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];
const statusOptions = ["전체", "활동중", "활동예정", "교육중"];

const FilterPopup = ({ isOpen, setIsOpen, selectedRegions, setSelectedRegions, selectedStatus, setSelectedStatus }) => {
  if (!isOpen) return null;

  const toggleRegion = (region) => {
    setSelectedRegions((prev) => {
      // "전국"만 선택된 경우, 다른 지역을 추가하면 "전국"을 제거
      if (prev.length === 1 && prev.includes("전국") && region !== "전국") {
          return [region];
      }
      
      // "전국"을 선택하면 다른 모든 지역을 해제하고 "전국"만 선택
      if (region === "전국") {
          return prev.includes("전국") ? [] : ["전국"];
      }

      // 기존에 region이 포함되어 있으면 제거, 아니면 추가
      return prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region];
    });
  };

  const toggleStatus = (status) => {
    setSelectedStatus((prev) => {
      // "전체"만 선택된 경우, 다른 지역을 추가하면 "전체"를를 제거
      if (prev.length === 1 && prev.includes("전체") && status !== "전체") {
          return [status];
      }
      
      // "전체"를 선택하면 다른 모든 지역을 해제하고 "전체체"만 선택
      if (status === "전체") {
          return prev.includes("전체") ? [] : ["전체"];
      }

      // 기존에 region이 포함되어 있으면 제거, 아니면 추가
      return prev.includes(status) ? prev.filter((r) => r !== status) : [...prev, status];
    });
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

export default FilterPopup;