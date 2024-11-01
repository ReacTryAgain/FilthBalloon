import React from "react";
import LoginComponent from "../components/mainPage/LoginComponent";
import ChatComponent from "../components/mainPage/ChatComponent";
import MapComponent from "../components/mainPage/MapComponent";
import SidebarComponent from "../components/mainPage/SidebarComponent";
import Header from "../components/header/Header"; // 헤더 컴포넌트 추가
import styles from "../components/mainPage/MainPage.styles"; // 통합 스타일 가져오기

function MainPage() {
  return (
    <div>
      <Header /> {/* 헤더 추가 */}
      <div style={styles.container}>
        <header style={styles.header}>Trash Hunt</header>

        <div style={styles.content}>
          <div style={styles.sidebar}>
            <LoginComponent />
            <ChatComponent />
          </div>
          <MapComponent />
          <SidebarComponent />
        </div>

        <footer style={styles.footer}>
          <span>seunghyenpark123님, 소중한 제보 감사합니다.</span>
        </footer>
      </div>
    </div>
  );
}

export default MainPage;
