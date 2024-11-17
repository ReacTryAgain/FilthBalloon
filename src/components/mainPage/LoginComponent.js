'use client'
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useViewTransitionState } from "react-router-dom";
import { loginUser } from "../../utils/auth";
import { UserContext } from "../../utils/UserContext";
import styles from "./MainPage.styles";

export default function LoginComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const { login, logout } = useContext(UserContext);
  useEffect(() => {
    const storedUsername = localStorage.getItem('nickname');
    console.log('Stored nickname:', storedUsername);
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = () => {
    const result = loginUser(email, password);
    if (result.success) {
        localStorage.setItem('nickname', result.nickname); // nickname을 localStorage에 저장
        setIsLoggedIn(true);
        setUsername(result.nickname);
        alert("로그인에 성공했습니다.");
        login(result.nickname, result.email);
    } else {
        alert(result.message);
    }
};

  const handleSignOut = () => {
    localStorage.removeItem('nickname'); 
    setIsLoggedIn(false);
    logout();
    setUsername("");
    setEmail("");
    setPassword("");
    alert("로그아웃에 성공했습니다.");
  };

  if (isLoggedIn) {
    return (
      <div style={styles.loginBox}>
        <div style={styles.formContainer}>
          <div style={styles.inputWrapper}>
            {username ? `${username}님, 안녕하세요.` : '로그인이 필요합니다.'}
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <button style={styles.loginButton} onClick={handleSignOut}>
            SIGN OUT
          </button>
        </div>
      </div>
    );
  }

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