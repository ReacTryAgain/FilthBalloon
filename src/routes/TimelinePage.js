import React from 'react';
import Header from "../components/header/Header";
import TimelineCard from "../components/timelineCard/TimelineCard.js";
import './TimelinePage.css';

const TimelinePage = () => {
  const data = [
    {
      title: '인천 모 고교',
      description: '오물 폭탄 낙하 지점',
      dateSubmitted: '2024년 10월 8일 00시 00분',
      dateFound: '2024년 10월 4일 00시 00분',
      location: '문권이네 집',
      imgUrl1: '/path/to/image1.jpg',
      imgUrl2: '/path/to/image2.jpg',
    },
    {
      title: '인천공항',
      description: '오물 폭탄 낙하 지점',
      dateSubmitted: '2024년 10월 3일 00시 00분',
      dateFound: '2024년 10월 3일 00시 00분',
      location: '해담이네 집',
      imgUrl1: '/path/to/image1.jpg',
      imgUrl2: '/path/to/image2.jpg',
    },
    {
      title: '인천공항',
      description: '오물 폭탄 낙하 지점',
      dateSubmitted: '2024년 10월 2일 00시 00분',
      dateFound: '2024년 10월 3일 00시 00분',
      location: '해담이네 집',
      imgUrl1: '/path/to/image1.jpg',
      imgUrl2: '/path/to/image2.jpg',
    },
    {
      title: '인천공항',
      description: '오물 폭탄 낙하 지점',
      dateSubmitted: '2024년 10월 5일 00시 00분',
      dateFound: '2024년 10월 3일 00시 00분',
      location: '해담이네 집',
      imgUrl1: '/path/to/image1.jpg',
      imgUrl2: '/path/to/image2.jpg',
    },
  ];

  // reportCount의 값을 data 배열의 길이로 설정
  const reportCount = data.length;

  // 날짜 문자열을 표준 형식으로 변환하는 함수
  const parseDate = (dateString) => {
    const [year, month, day, hour, minute] = dateString.match(/\d+/g).map(Number);
    return new Date(year, month - 1, day, hour, minute);
  };

  // lastUpdate의 값을 data 배열의 dateSubmitted 중 최신 값으로 설정
  const lastUpdate = data.reduce((latest, item) => {
    return parseDate(item.dateSubmitted) > parseDate(latest) ? item.dateSubmitted : latest;
  }, data[0].dateSubmitted);

  return (
    <>
      <Header />
      <div className="timeline-page">
        <h1 className="page-title">Trash Hunt : TIMELINE</h1>
        <div className="report-container">
          <div className="report-header">
            <span className="report-title">제보된 오물풍선 목록</span>
            <span className="report-count">{reportCount}개</span>
          </div>
          <p className="last-update">마지막 업데이트 : {lastUpdate}</p>
          {data.map((item, index) => (
            <TimelineCard key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TimelinePage;
