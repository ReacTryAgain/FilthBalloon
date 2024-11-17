import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import ReportPage from "./routes/ReportPage"; // 새로 추가할 페이지 컴포넌트
import InfoPage from "./routes/InfoPage";
import TimelinePage from "./routes/TimelinePage";
import AboutPage from "./routes/AboutPage";
import GamePage from "./routes/GamePage";
import SignUpPage from "./routes/SignUp";
import { UserProvider } from "./utils/UserContext";

import "./App.css";

function App() {
  return (
    <UserProvider>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
    </UserProvider>
  );
}

export default App;
