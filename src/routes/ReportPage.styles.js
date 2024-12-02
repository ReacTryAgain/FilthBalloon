const styles = {
  reportPage: {
    paddingLeft: "90px",
    paddingRight: "90px",
    backgroundColor: "#d9d3c3", // 배경색
    maxWidth: "1000px", // 전체 페이지의 너비 제한
    margin: "0 auto", // 가운데 정렬
  },
  pageTitle: {
    fontWeight: "bold",
    marginBottom: "40px",
    marginTop: "0",
    paddingTop: "20px",
    backgroundColor: "#d9d3c3",
    textAlign: "center", // 제목 가운데 정렬
    fontSize: "2rem", // 제목 크기 조정
  },
  container: {
    backgroundColor: "#d7c3a7",
    borderRadius: "10px",
    padding: "20px",
    marginTop: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 추가
  },
  inlineGroup: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
    gap: "10px",
    flexWrap: "wrap", // 작은 화면에서 줄바꿈 허용
  },
  inlineLabel: {
    fontWeight: "bold",
    textAlign: "left",
    width: "120px", // 고정된 너비로 정렬
    flexShrink: 0, // 크기 고정
  },
  input: {
    flex: "1",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    backgroundColor: "#ffffff",
    width: "calc(100% - 140px)", // input 크기 제한
    maxWidth: "720px", // 최대 크기 설정
  },
  textarea: {
    flex: "1",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    backgroundColor: "#ffffff",
    height: "100px", // 텍스트 영역의 높이
    maxWidth: "800px", // 최대 크기 제한
    width: "100%",
  },
  searchButton: {
    padding: "10px 20px",
    backgroundColor: "#8b5e3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // 그림자 효과 추가
    textAlign: "center",
  },
  searchButtonHover: {
    backgroundColor: "#71492a", // hover 효과 색상
  },
  divider: {
    border: "none",
    height: "2px",
    backgroundColor: "#000000",
    margin: "0 0 10px 0",
  },
  imageUploadContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "flex-start",
  },
  imagePreviewContainer: {
    position: "relative",
    width: "150px", // 더 작은 크기로 조정
    height: "150px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
  },
  removeButton: {
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    cursor: "pointer",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  uploadButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "150px",
    backgroundColor: "#fff",
    border: "2px dashed #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "24px",
    transition: "background-color 0.3s",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    marginTop: "20px",
    backgroundColor: "#8b5e3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // 버튼 그림자 추가
    transition: "background-color 0.3s",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  addressList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    maxHeight: "300px", // 스크롤 제한
    overflowY: "auto", // 스크롤 활성화
    border: "1px solid #ddd", // 테두리 추가
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  addressItem: {
    padding: "15px",
    borderBottom: "1px solid #eaeaea",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "background-color 0.3s, transform 0.2s", // hover 시 효과
  },
  addressItemHover: {
    backgroundColor: "#ececec", // hover 시 배경색
    transform: "scale(1.02)", // hover 시 확대
  },
  addressItemText: {
    flex: "1",
    fontSize: "14px",
    color: "#333",
  },
  addressItemIcon: {
    fontSize: "20px",
    color: "#8b5e3c",
  },
};

export default styles;
