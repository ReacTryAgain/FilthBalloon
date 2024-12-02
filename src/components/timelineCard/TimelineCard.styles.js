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
    alignItems: "flex-start",
    gap: "20px",
  },
  leftSection: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
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
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginLeft: "auto",
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
