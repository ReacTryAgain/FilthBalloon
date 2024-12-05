import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // React Router import 추가
import Header from "../components/header/Header";
import TimelineCard from "../components/timelineCard/TimelineCard.js";
import styles from "./TimelinePage.styles.js";
import { UserContext } from "../utils/UserContext"; // UserContext import 추가

const TimelinePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
    const formattedReports = storedReports.map((report, index) => ({
      id: index,
      title: `${report.addressInput} ${report.addressDetail}`,
      description: report.description,
      dateSubmitted: new Date(report.createdAt).toLocaleString(),
      dateFound: `${report.discoveredDate} ${report.discoveredTime}`,
      images: report.images,
    }));
    setData(formattedReports);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "#d9d3c3";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleDelete = () => {
    alert("제보 삭제는 불가능합니다."); // 경고 메시지
  };

  const handleClearAll = () => {
    alert("모든 데이터를 삭제할 수 없습니다."); // 경고 메시지
  };

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
                onDelete={handleDelete} // 삭제 비활성화
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelinePage;
