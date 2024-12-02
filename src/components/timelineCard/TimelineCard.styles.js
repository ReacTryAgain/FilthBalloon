const styles = {
  timelineCardContent: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 0",
    gap: "20px",
  },
  divider: {
    border: "none",
    height: "2px",
    backgroundColor: "#000000",
    margin: "0 0 10px 0",
  },
  timelineCardMain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // 세로축 정렬을 중앙으로
    gap: "20px",
    position: "relative",
  },
  deleteButton: {
    position: "absolute", // 위치를 부모 기준으로 설정
    left: "10px", // 왼쪽 여백
    top: "50%", // 부모 컨테이너 높이의 중간
    transform: "translateY(-50%)", // 정확한 세로 중앙 정렬
    color: "white",
    border: "none",
    borderRadius: "50%", // 동그란 버튼
    width: "35px",
    height: "35px",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  leftSection: {
    flex: 1.5,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginLeft: "70px", // 휴지통 아이콘의 공간 확보
    // border: "1px solid",
  },

  alertSection: {
    display: "flex",
    justifyContent: "flex-start",
  },
  alertBadge: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFD700",
    color: "#000",
    padding: "3px 6px",
    borderRadius: "5px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  redIcon: {
    width: "10px",
    height: "10px",
    marginRight: "5px",
  },
  timelineCardLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  timelineIcon: {
    width: "40px",
    marginRight: "10px",
  },
  timelineInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  timelineInfoHeader: {
    margin: "0 0 5px 0",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  timelineInfoText: {
    margin: "3px 0",
    fontSize: "12px",
    color: "#777",
  },
  rightSection: {
    flex: 1.8,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
    marginLeft: "auto",
    // border: "1px solid",
  },
  timelineImages: {
    display: "flex",
    gap: "10px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "5px",
    objectFit: "cover",
  },
  noImagePlaceholder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100px",
    border: "1px dashed #ccc",
    borderRadius: "5px",
    fontSize: "12px",
    color: "#999",
    textAlign: "center",
  },
};

export default styles;
