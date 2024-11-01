import React from "react";
import styles from "./MainPage.styles"; // 통합된 스타일 파일 불러오기

function MapComponent() {
  return (
    <div style={styles.mapSection}>
      <div style={styles.mapPlaceholder}>Map Placeholder</div>
      <div style={styles.mapBox}>위치 설명란</div>
    </div>
  );
}

export default MapComponent;
