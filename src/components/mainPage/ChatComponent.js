import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../utils/UserContext";
import styles from "./MainPage.styles";

function ChatComponent() {
  const { user } = useContext(UserContext);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const username = user?.nickname || "익명"; // 닉네임 없을 때 "익명"으로 표시

  // 로컬스토리지에서 채팅 기록 로드
  useEffect(() => {
    try {
      const storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
      setChatMessages(storedMessages);
    } catch (error) {
      console.error("Failed to load messages from localStorage:", error);
    }
  }, []);

  // 로컬스토리지에 채팅 기록 저장
  useEffect(() => {
    if (chatMessages.length > 0) {
      try {
        localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
      } catch (error) {
        console.error("Error saving chat messages to localStorage:", error);
      }
    }
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newChat = {
        text: newMessage,
        username,
        time: new Date().toLocaleTimeString(),
      };
      setChatMessages((prevMessages) => [...prevMessages, newChat]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div style={styles.chatBox}>
      <div style={styles.chatHeader}>실시간 채팅</div>
      <div style={styles.chatMessages}>
        {chatMessages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.chatBubble,
              alignSelf: message.username === username ? "flex-end" : "flex-start",
              backgroundColor: message.username === username ? "#007bff" : "#e4e6eb",
              color: message.username === username ? "#fff" : "#000",
            }}
          >
            <div style={styles.chatMetadata}>
              <span style={styles.username}>{message.username}</span>
              <br />
              <span style={styles.time}>{message.time}</span>
            </div>
            <div style={styles.messageText}>{message.text}</div>
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          style={styles.inputField}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="메시지를 입력하세요"
        />
        <button style={styles.chatButton} onClick={handleSendMessage}>
          전송
        </button>
      </div>
    </div>
  );
}

export default ChatComponent;
