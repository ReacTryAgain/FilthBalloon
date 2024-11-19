const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
      margin: "0 auto",
      width: "100vw", // 화면에 꽉 차도록 설정
      height: "100vh", // 화면 높이에 꽉 차도록 설정
      backgroundColor: "#d9d3c3", // 배경 색상
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
    },
    balloonIcon: {
      width: "60px",
      height: "60px",
      marginRight: "10px",
    },
    headerTitle: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#444",
    },
    content: {
      width: "80%", // 컨텐츠의 너비 설정
      textAlign: "center",
    },
    title: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "20px",
    },
    descriptionBox: {
        backgroundColor: "#8B613140", // 반투명 배경색
        backgroundImage: "url('/오물풍선.png')", // 오물풍선.png 배경 이미지 설정
        backgroundSize: "contain", // 이미지가 컨테이너에 맞게 크기 조정
        backgroundRepeat: "no-repeat", // 이미지 반복하지 않도록 설정
        backgroundPosition: "center center", // 이미지가 컨테이너 중앙에 위치하도록 설정
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        lineHeight: "1.8",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        overflowY: "auto", // 세로 스크롤 활성화
        maxHeight: "60vh", // 최대 높이 설정
        fontWeight: 900, // 텍스트 굵게 설정
      },
      
    paragraph: {
      marginBottom: "10px",
      color: "#333",
      textAlign: "justify",
    },
  };
  
  export default styles;
  