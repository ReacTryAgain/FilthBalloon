import React from "react";
import { Link } from "react-router-dom"; // Link를 import하여 라우팅 설정
import styles from "./MainPage.styles"; // 통합 스타일 가져오기

function SidebarComponent() {
  return (
    <div style={styles.rightSidebar}>
      <Link to="/report" style={{ textDecoration: "none" }}>
        <button style={styles.sidebarButton}>제보해주세요</button>
      </Link>
      <Link to="/info" style={{ textDecoration: "none" }}>
        <button style={styles.sidebarButton}>설명페이지</button>
      </Link>
      <Link to="/timeline" style={{ textDecoration: "none" }}>
        <button style={styles.sidebarButton}>타임라인</button>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <button style={styles.sidebarButton}>About us</button>
      </Link>
      <Link to="/game" style={{ textDecoration: "none" }}>
        <button style={styles.sidebarButton}>오물피하기 게임</button>
      </Link>
    </div>
  );
}

export default SidebarComponent;
