const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    margin: "0 auto",
    width: "100vw", // 화면에 꽉 차도록 설정
    minHeight: "100vh", // 최소 높이 설정
    backgroundColor: "#d9d3c3", // 배경 색상
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // 컨텐츠를 상단으로 정렬
    padding: "0", // 여백 제거
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
    marginTop: "0", // 제목 바로 위로 간격 제거
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
    marginTop: "10px", // 텍스트 박스 간격 최소화
  },
  paragraph: {
    marginBottom: "10px",
    color: "#333",
    textAlign: "justify",
  },
};

export default styles;
