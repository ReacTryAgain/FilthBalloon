const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
      margin: "0 auto",
      width: "100vw", // 화면에 꽉 차도록 설정
      height: "100vh", // 화면 높이에 꽉 차도록 설정
      backgroundColor: "#d9d3c3", // MainPage와 동일한 배경색
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // 수평 중앙 정렬
      justifyContent: "center", // 수직 중앙 정렬
    },
    balloonIcon: {
      width: "40px",
      height: "40px",
      marginRight: "15px",
    },
    headerTitle: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#ffffff",
    },
    content: {
      marginTop: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // 텍스트에어리어를 중앙 정렬
      justifyContent: "center", // 중앙 배치
      width: "100%", // 부모 컨테이너에 맞추기
    },
    title: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "20px",
      textAlign: "center", // 제목 가운데 정렬
    },
    scrollableText: {
      width: "70%", // 너비 조정
      height: "500px", // 높이 조정
      backgroundColor: "#8B613140", // 텍스트에어리어 색 변경
      backgroundImage: "url('/실험 1.png')", // 위험.png를 배경 이미지로 설정
      backgroundSize: "60%", // 배경 이미지 크기 설정
      backgroundRepeat: "no-repeat", // 반복하지 않도록 설정
      backgroundPosition: "47% center", // 배경 이미지 위치 설정
      borderRadius: "10px",
      border: "1px solid #ccc",
      padding: "20px",
      lineHeight: "1.8",
      fontSize: "16px", // 텍스트 크기 조정
      fontWeight: 900, // 텍스트 굵게 설정
      resize: "none",
      overflowY: "auto", // 세로 스크롤 활성화
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      textAlign: "justify", // 텍스트 정렬
      scrollbarWidth: "thin", // Firefox에서 스크롤바 얇게 설정
      scrollbarColor: "#8B5E3C #E5D5C0", // Firefox에서 스크롤바 색상 (#8B5E3C: 손잡이, #E5D5C0: 트랙)
    },
    
  };
  
  export default styles;
  