import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // React Router import 추가
import Header from "../components/header/Header";
import TimelineCard from "../components/timelineCard/TimelineCard.js";
import styles from "./TimelinePage.styles.js";
import { UserContext } from "../utils/UserContext"; // UserContext import 추가

const TimelinePage = () => {
  const navigate = useNavigate(); // 네비게이션 훅 사용
  const [data, setData] = useState([]); // 로컬 스토리지에서 불러온 데이터를 저장
  const { user } = useContext(UserContext); // 로그인 상태 가져오기
  console.log(user.nickname);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
    const formattedReports = storedReports.map((report, index) => ({
      id: index, // 각 항목에 고유id 추가
      title: `${report.addressInput} ${report.addressDetail}`,
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

  // 선택된 제보만 삭제
  const handleDelete = (id) => {
    if (!user.nickname) {
      alert("로그인이 필요합니다."); // 로그인되지 않은 경우 경고
      return;
    }

    // 로컬 스토리지에서 해당 데이터 삭제
    const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
    const updatedReports = storedReports.filter((_, index) => index !== id);
    localStorage.setItem("reports", JSON.stringify(updatedReports));

    // 상태 업데이트
    setData((prevData) => prevData.filter((_, index) => index !== id));
    alert("제보 내용이 삭제되었습니다.");
  };

  const handleClearAll = () => {
    if (!user.nickname) {
      alert("로그인이 필요합니다."); // 로그인되지 않은 경우 경고
      return;
    }

    // reports 키만 삭제
    localStorage.removeItem("reports");
    setData([]); // 상태 초기화
    alert("제보 내역 모두 삭제");
    navigate("/");
  };

  // 데이터가 없을 경우 처리
  if (data.length === 0) {
    return (
      <>
        <Header />
        <div style={styles.timelinePage}>
          <h1 style={styles.pageTitle}>Trash Hunt : TIMELINE</h1>
          <p style={styles.noReports}>아직 제보된 데이터가 없습니다.</p>
        </div>
      </>
    );
  }

  // 마지막 업데이트
  const lastUpdate = data[0]?.dateSubmitted || "N/A";

  return (
    <>
      <Header />
      <div style={styles.timelinePage}>
        <div style={styles.pageHeader}>
          <h1 style={styles.pageTitle}>Trash Hunt : TIMELINE</h1>
          <button style={styles.clearButton} onClick={handleClearAll}>
            전체 데이터 삭제
          </button>
        </div>
        <div style={styles.reportContainer}>
          <div style={styles.reportHeader}>
            <span style={styles.reportTitle}>제보된 오물풍선 목록</span>
            <span style={styles.reportCount}>{data.length}개</span>
          </div>
          <p style={styles.lastUpdate}>마지막 업데이트 : {lastUpdate}</p>

          <div style={styles.scrollContainer}>
            {data.map((item, index) => (
              <TimelineCard
                key={index}
                title={item.title}
                description={item.description}
                dateSubmitted={item.dateSubmitted}
                dateFound={item.dateFound}
                images={item.images}
                onDelete={() => handleDelete(item.id)} // 삭제 핸들러 전달
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelinePage;
