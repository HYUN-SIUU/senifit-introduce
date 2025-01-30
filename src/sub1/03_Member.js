import React from 'react';
import "../styles/all.css"
import './03_Member.css';
import member1 from '../img/sub1_03_member1.png';
import member2 from '../img/sub1_03_member2.png';
import member3 from '../img/sub1_03_member3.png';

const Members = [
    {
        img: member1,
        hello1: "안녕하십니까.",
        hello2: "협회장  ",
        name: "최진석",
        hello3: "  입니다.",
        description1: "서울 도봉구 등 노인복지시설 노인 운동 강사",
        description2: "생활스포츠지도사 2급 (보디빌딩)",
        description3: "노인스포츠지도사 (보디빌딩)",
        description4: "노인두뇌훈련지도사/ 시니어인지활동지도사",
        description5: "(주) 튼튼한거북이 대표"
    },
    {
        img: member2,
        hello1: "반갑습니다.",
        hello2: "부협회장  ",
        name: "홍자형",
        hello3: "  입니다.",
        description1: "광운대 스포츠융합과학 전공",
        description2: "서울 도봉구 등 노인복지시설 노인 운동 강사",
        description3: "태권도 유아 체육 강사",
        description4: "태권도 4단 및 경력 14년",
        description5: "시니어인지활동지도사 1급"
    },
    {
        img: member3,
        hello1: "환영해요.",
        hello2: "수석연구원  ",
        name: "이승협",
        hello3: "  입니다.",
        description1: "한림대 의학 전공",
        description2: "연세대 화공생명공학과/인지과학 졸업",
        description3: "노인두뇌훈련상담사/ 인지행동심리상담사",
        description4: "2022 대한민국 인재상 수상",
        description5: "청년 정신건강 혁신리더 선정"
    },
];
  
const MemberCard = ({ member }) => {
    return (
        <div className="member-card">
            <img src={member.img} alt="인물 사진" className="member-image represent-image" />
            <div className="member-info">
                <p>{member.hello1}</p>
                <p>{member.hello2}<span>{member.name}</span>{member.hello3}</p>
                <br />
                <ul>
                    <li>{member.description1}</li>
                    <li>{member.description2}</li>
                    <li>{member.description3}</li>
                    <li>{member.description4}</li>
                    <li>{member.description5}</li>
                </ul>
            </div>
        </div>
    );
};

function Member() {
    return (
        <div className="member">
            <div className="circle1"></div>
            <div className="circle2"></div>

            <div className="member-title">
                <p>협회임원진 소개</p>
            </div>

            <div className="member-box">
                {Members.map((member, index) => (
                    <MemberCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
}

export default Member;
