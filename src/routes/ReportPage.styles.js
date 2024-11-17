const styles = {
    reportPage: {
      paddingLeft: "90px",
      paddingRight: "90px",
      backgroundColor: "#d9d3c3", // 배경색
    },
    pageTitle: {
      fontWeight: "bold",
      marginBottom: "40px",
      marginTop: "0",
      paddingTop: "20px",
      backgroundColor: "#d9d3c3",
    },
    container: {
      backgroundColor: "#d7c3a7",
      borderRadius: "10px",
      padding: "20px 30px",
      marginTop: "20px",
    },
    inlineGroup: {
      display: "flex",
      alignItems: "flex-start", // 상단 정렬
      marginBottom: "20px",
      gap: "10px",
    },
    inlineLabel: {
      fontWeight: "bold",
      textAlign: "left",
      width: "120px", // 고정된 너비로 정렬
    },
    inputGroup: {
      marginBottom: "20px",
    },
    divider: {
      border: "none",
      height: "2px",
      backgroundColor: "#000000",
      margin: "0 0 10px 0",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
      textAlign: "left",
    },
    input: {
      flex: "1",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    textarea: {
      flex: "1",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      height: "100px", // 텍스트 영역의 높이를 조정
    },
    imageUploadContainer: {
      display: "flex",
      flexWrap: "wrap", // 줄 바꿈 가능하도록 설정
      gap: "20px", // 이미지 사이 간격
      alignItems: "flex-start", // 이미지 상단 정렬
    },
    imagePreviewContainer: {
      position: "relative",
      width: "200px",
      height: "200px",
      border: "1px solid #ccc", // 이미지 테두리 추가
      borderRadius: "4px",
    },
    imagePreview: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "4px",
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
    },
    uploadButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "200px",
      height: "200px",
      backgroundColor: "#fff",
      border: "2px dashed #ccc",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "24px",
    },
    submitButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#8b5e3c",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };
  
  export default styles;
  