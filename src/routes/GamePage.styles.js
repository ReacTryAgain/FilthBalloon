const styles = {
    pageContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#d9d3c3",
      minHeight: "100vh",
      padding: "20px",
    },
    title: {
        fontWeight: "bold",
        marginBottom: "20px",
        marginTop: "0", // 여백을 0으로 설정
        paddingTop: "20px", // padding으로 대체
        backgroundColor: "#d9d3c3", // 필요 시 여기에 배경색 추가
        textAlign: "center", // 제목 가운데 정렬
        fontSize: "2rem", // 제목 크기 조정
    },
    gameArea: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    gameCanvas: {
      display: "block",
      border: "2px solid #8b5e3c",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      marginRight: "20px",
    },
    infoContainer: {
      width: "250px",
      padding: "15px",
      backgroundColor: "#6b4f3f",
      borderRadius: "12px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    infoTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#d1bfa6",
      marginBottom: "10px",
    },
    infoBox: {
      backgroundColor: "#d1bfa6",
      padding: "10px",
      borderRadius: "8px",
      fontSize: "0.9rem",
      lineHeight: "1.5",
      color: "#333",
    },
    highestScore: {
      fontSize: "1.0rem",
      fontWeight: "bold",
      color: "#d1bfa6",
      marginBottom: "10px",
    },
    startButton: {
      padding: "10px 20px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      backgroundColor: "#d1bfa6",
      color: "#6b4f3f",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "20px",
    },
  };
  
  export default styles;
  