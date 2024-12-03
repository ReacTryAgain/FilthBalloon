import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../utils/auth";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");

  const onEmailHandler = (event) => setEmail(event.currentTarget.value);
  const onPasswordHandler = (event) => setPassword(event.currentTarget.value);
  const onPasswordCheckHandler = (event) =>
    setPasswordCheck(event.currentTarget.value);
  const onNicknameHandler = (event) => setNickname(event.currentTarget.value);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!email || !password || !passwordCheck || !nickname) {
      return alert("회원정보 중 빈칸이 존재하므로 가입하실 수 없습니다.");
    }
    if (password !== passwordCheck)
      return alert("비밀번호와 비밀번호 확인 칸이 같지 않습니다.");

    const result = signUpUser(email, password, nickname);
    if (result.success) {
      alert("회원가입에 성공했습니다.");
      navigator("/");
    } else {
      alert(result.message);
    }
  };

  const navigator = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e8e4d9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.5rem",
        }}
      >
        <img
          alt="Trash Hunt Logo"
          src="\오물풍선.png"
          style={{ width: "5rem", height: "5rem" }}
        />
        <h1 style={{ fontSize: "1.875rem", fontWeight: "bold" }}>
          Trash Hunt: Sign Up
        </h1>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "rgba(216, 207, 193, 0.5)",
          borderRadius: "0.5rem",
          padding: "1.5rem",
        }}
      >
        <form
          onSubmit={onSubmitHandler}
          style={{
            backgroundColor: "white",
            borderRadius: "0.5rem",
            padding: "1.5rem",
          }}
        >
          <div style={{ display: "grid", gap: "1rem" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <label
                htmlFor="email"
                style={{ fontSize: "1.125rem", fontWeight: "500" }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                value={email}
                onChange={onEmailHandler}
                style={{
                  height: "3rem",
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "0.25rem",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <label
                htmlFor="password"
                style={{ fontSize: "1.125rem", fontWeight: "500" }}
              >
                PassWord
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={onPasswordHandler}
                style={{
                  height: "3rem",
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "0.25rem",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <label
                htmlFor="passwordCheck"
                style={{ fontSize: "1.125rem", fontWeight: "500" }}
              >
                PassWord Check
              </label>
              <input
                id="passwordCheck"
                name="passwordCheck"
                type="password"
                value={passwordCheck}
                onChange={onPasswordCheckHandler}
                style={{
                  height: "3rem",
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "0.25rem",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <label
                htmlFor="nickname"
                style={{ fontSize: "1.125rem", fontWeight: "500" }}
              >
                NickName
              </label>
              <input
                id="nickname"
                name="nickname"
                value={nickname}
                onChange={onNicknameHandler}
                style={{
                  height: "3rem",
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "0.25rem",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1.5rem",
              }}
            >
              <button
                type="submit"
                style={{
                  width: "8rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#4a5568",
                  color: "white",
                  border: "none",
                  borderRadius: "0.25rem",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
