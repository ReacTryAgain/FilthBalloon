import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import TimelineCard from "../components/timelineCard/TimelineCard.js";
import styles from "./TimelinePage.styles.js";

const TimelinePage = () => {
  const [data, setData] = useState([]); // 로컬 스토리지에서 불러온 데이터를 저장

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
    const formattedReports = storedReports.map((report) => ({
      title: `${report.city} ${report.district} ${report.subDistrict}`,
      description: report.description,
      dateSubmitted: new Date(report.createdAt).toLocaleString(),
      dateFound: `${report.discoveredDate} ${report.discoveredTime}`,
      images: report.images, // 이미지 배열 저장
    }));
    setData(formattedReports);
  }, []);

  useEffect(() => {
    // body 배경색 설정
    document.body.style.backgroundColor = "#d9d3c3"; // 배경색 설정
    return () => {
      document.body.style.backgroundColor = ""; // 컴포넌트 언마운트 시 초기화
    };
  }, []);

  // 데이터가 없을 경우 처리
  if (data.length === 0) {
    return (
      <>
        <Header />
        <div style={styles.timelinePage}>
          <h1 style={styles.pageTitle}>Trash Hunt : 목록 보기</h1>
          <p style={styles.noReports}>아직 제보된 데이터가 없습니다.</p>
        </div>
      </>
    );
  }

  // 마지막 업데이트
  const lastUpdate = data[0]?.dateSubmitted || "N/A";

  const handleClearAll = () => {
    // 전체 데이터 삭제
    localStorage.clear();
    alert("로컬 스토리지의 모든 데이터가 삭제되었습니다!");
  };

  return (
    <>
      <Header />
      <div style={styles.timelinePage}>
        <h1 style={styles.pageTitle}>Trash Hunt : 목록 보기</h1>
        <div style={styles.reportContainer}>
          <div style={styles.reportHeader}>
            <span style={styles.reportTitle}>제보된 오물풍선 목록</span>
            <span style={styles.reportCount}>{data.length}개</span>
          </div>
          <p style={styles.lastUpdate}>마지막 업데이트 : {lastUpdate}</p>
          {data.map((item, index) => (
            <TimelineCard
              key={index}
              title={item.title}
              description={item.description}
              dateSubmitted={item.dateSubmitted}
              dateFound={item.dateFound}
              images={item.images}
            />
          ))}
        </div>
      </div>
      <button onClick={handleClearAll}>전체 데이터 삭제</button>
    </>
  );
};

export default TimelinePage;
