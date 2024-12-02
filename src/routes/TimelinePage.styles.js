const styles = {
  timelinePage: {
    paddingLeft: "90px",
    paddingRight: "90px",
    backgroundColor: "#d9d3c3", // 배경색
  },
  pageTitle: {
    fontWeight: "bold",
    marginBottom: "20px",
    marginTop: "0", // 여백을 0으로 설정
    paddingTop: "0", // padding으로 대체
    backgroundColor: "#d9d3c3", // 필요 시 여기에 배경색 추가
  },
  reportContainer: {
    backgroundColor: "#d7c3a7",
    borderRadius: "10px",
    padding: "20px 30px",
    marginTop: "30px",
    width: "80%", // 너비를 80%로 설정 (필요에 따라 조정 가능)
    maxWidth: "1000px", // 최대 너비 설정
    margin: "0 auto", // 중앙 정렬
  },
  reportHeader: {
    display: "flex",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: "bold",
  },
  reportTitle: {
    marginRight: "10px",
  },
  reportCount: {
    backgroundColor: "red",
    color: "white",
    borderRadius: "15px",
    padding: "2px 8px",
    fontSize: "14px",
  },
  lastUpdate: {
    fontSize: "14px",
    color: "#555",
    textAlign: "left",
  },
  noReports: {
    textAlign: "center",
    fontSize: "16px",
    color: "#555",
    marginTop: "20px",
  },
  clearButton: {
    backgroundColor: "#8b5e3c",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    textAlign: "center",
  },
};

export default styles;
