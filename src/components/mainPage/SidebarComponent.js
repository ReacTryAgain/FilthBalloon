import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/UserContext"; // UserContext 가져오기
import styles from "./MainPage.styles"; // 통합 스타일 가져오기

function SidebarComponent() {
  const { isLoggedIn } = useContext(UserContext); // 로그인 상태 가져오기
  const navigate = useNavigate();

  const handleRestrictedNavigation = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      alert("로그인이 필요합니다."); // 경고 메시지 표시
    }
  };

  return (
    <div style={styles.rightSidebar}>
      {/* 로그인 필요 없는 페이지 */}
      <Link to="/about" style={{ textDecoration: "none" }}>
        <button style={styles.sidebarButton}>About us</button>
      </Link>
      <Link to="/info" style={{ textDecoration: "none" }}>
        <button style={styles.sidebarButton}>오물풍선이란?</button>
      </Link>
      <Link to="/timeline" style={{ textDecoration: "none" }}>
        <button style={styles.sidebarButton}>타임라인</button>
      </Link>

      {/* 로그인 필요한 페이지 */}
      <button
        style={styles.sidebarButton}
        onClick={() => handleRestrictedNavigation("/report")}
      >
        제보해주세요
      </button>
      <button
        style={styles.sidebarButton}
        onClick={() => handleRestrictedNavigation("/game")}
      >
        오물피하기 게임
      </button>
    </div>
  );
}

export default SidebarComponent;
