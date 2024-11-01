import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.styles"; // 헤더 스타일 파일 가져오기

function Header() {
  return (
    <header style={styles.headerBar}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div style={styles.headerTitle}>
          <span role="img" aria-label="logo" style={styles.headerEmoji}>
            🗺️
          </span>
          Trash Hunt
        </div>
      </Link>
    </header>
  );
}

export default Header;
