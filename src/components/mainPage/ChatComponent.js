import React, { useState } from "react";
import styles from "./MainPage.styles"; // 통합된 스타일 파일 불러오기

function ChatComponent() {
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { text: newMessage, isMine: true }]);
      setNewMessage("");
    }
  };

  return (
    <div style={styles.chatBox}>
      <div>실시간 채팅</div>
      <div style={styles.chatMessages}>
        {chatMessages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.chatBubble,
              ...(message.isMine
                ? styles.chatBubbleRight
                : styles.chatBubbleLeft),
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          style={styles.inputField}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
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
