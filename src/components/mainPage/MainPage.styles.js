const styles = {
  // MainPage 스타일
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#d9d3c3",
    minHeight: "100vh",
    padding: "20px",
  },
  header: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  content: {
    display: "flex",
    width: "95%",
    justifyContent: "space-between",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    width: "300px",
  },

  // LoginComponent 스타일
  loginBox: {
    backgroundColor: "#d1bda9",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // 전체를 왼쪽 정렬
    gap: "15px",
    width: "250px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%", // formContainer가 loginBox의 너비에 맞게 설정
    gap: "10px",
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    gap: "10px",
  },
  loginButton: {
    backgroundColor: "#8b5e3c",
    color: "#ffffff",
    border: "none",
    padding: "10px 0",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    width: "100%",
    textAlign: "center",
  },

  // 입력 필드 스타일
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%", // wrapper의 너비를 100%로 설정하여 전체 정렬에 맞춤
    gap: "10px",
  },
  inputLabel: {
    fontSize: "0.9rem",
    color: "#333",
    fontWeight: "bold",
    width: "10%", // 레이블을 고정 너비로 설정하여 정렬이 일관되도록
    textAlign: "left", // 레이블 텍스트를 왼쪽 정렬
  },
  inputField: {
    width: "90%", // input 필드가 고정된 너비로 설정
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #cccccc",
    outline: "none",
    backgroundColor: "#ffffff",
  },

  // 공통 버튼 스타일
  chatButton: {
    backgroundColor: "#8b5e3c",
    color: "#ffffff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    textAlign: "center",
  },

  // ChatComponent 스타일
  chatBox: {
    backgroundColor: "#d1bda9",
    padding: "7px",
    borderRadius: "10px",
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  chatMessages: {
    flexGrow: 1,
    overflowY: "auto",
    backgroundColor: "#ffffff",
    margin: "6px",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    maxHeight: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  chatBubble: {
    padding: "8px 12px",
    borderRadius: "15px",
    fontSize: "0.8rem",
    color: "#333333",
    maxWidth: "60%",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    wordWrap: "break-word",
  },
  chatBubbleLeft: {
    backgroundColor: "#f1f1f1",
    alignSelf: "flex-start",
    borderTopLeftRadius: "0px",
    marginLeft: "10px",
  },
  chatBubbleRight: {
    backgroundColor: "#c4e1ff",
    alignSelf: "flex-end",
    borderTopRightRadius: "0px",
    marginRight: "10px",
  },

  // 실시간 채팅 입력 및 전송 버튼
  inputContainer: {
    display: "flex",
    gap: "10px",
    margin: "0 6px 0 6px",
  },
  inputField: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #cccccc",
    outline: "none",
  },

  // MapComponent 스타일
  mapSection: {
    flexGrow: 1,
    margin: "0 20px",
    height: "790px",
  },
  mapBox: {
    backgroundColor: "#d1bda9", // 배경색 확인
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center", // 텍스트 가운데 정렬
    minHeight: "130px", // 최소 높이 설정
    boxSizing: "border-box",
  },
  mapPlaceholder: {
    width: "100%",
    height: "600px",
    backgroundColor: "#cccccc",
    marginBottom: "10px",
    borderRadius: "10px",
  },

  // SidebarComponent 스타일
  rightSidebar: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  sidebarButton: {
    backgroundColor: "#8b5e3c",
    color: "#ffffff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    width: "150px",
    textAlign: "center",
  },
};

export default styles;
