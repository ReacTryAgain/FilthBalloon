import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/auth";
import styles from "./MainPage.styles"; // 통합된 스타일 파일 불러오기

function LoginComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const result = loginUser(email, password);
    if (result.success) {
      alert("로그인에 성공했습니다.");
      navigate("/"); 
    } else {
      alert(result.message);
    }
  };

  return (
    <div style={styles.loginBox}>
      <div style={styles.formContainer}>
        <div style={styles.inputWrapper}>
          <label style={styles.inputLabel}>ID</label>
          <input
            type="text"
            style={styles.inputField}
            placeholder="아이디를 입력하세요"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div style={styles.inputWrapper}>
          <label style={styles.inputLabel}>PW</label>
          <input
            type="password"
            style={styles.inputField}
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.loginButton} onClick={handleLogin}>
          SIGN IN
        </button>
        <button
          style={styles.loginButton}
          onClick={() => navigate("/signup")}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default LoginComponent;
