import React from "react";
import styles from "./MainPage.styles"; // 통합된 스타일 파일 불러오기

function LoginComponent() {
  return (
    <div style={styles.loginBox}>
      <div style={styles.formContainer}>
        <div style={styles.inputWrapper}>
          <label style={styles.inputLabel}>ID</label>
          <input
            type="text"
            style={styles.inputField}
            placeholder="아이디를 입력하세요"
          />
        </div>
        <div style={styles.inputWrapper}>
          <label style={styles.inputLabel}>PW</label>
          <input
            type="password"
            style={styles.inputField}
            placeholder="비밀번호를 입력하세요"
          />
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.loginButton}>SIGN IN</button>
        <button style={styles.loginButton}>SIGN UP</button>
      </div>
    </div>
  );
}

export default LoginComponent;
