const headerStyles = {
  headerBar: {
    width: "100%",
    padding: "15px 20px",
    backgroundColor: "#6b4f3f",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start", // 왼쪽 정렬
    fontSize: "1.5rem",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  headerTitle: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#fff",
    textDecoration: "none",
    marginLeft: "20px", // 왼쪽 여백 추가
  },
  headerEmoji: {
    fontSize: "1.8rem",
    marginRight: "8px",
  },
};

export default headerStyles;
