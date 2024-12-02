function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>
          &#x2715; {/* X 표시 (유니코드) */}
        </button>
        <div style={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}

const styles = {
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
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "700px",
    width: "90%",
    position: "relative",
    display: "flex", // 레이아웃을 플렉스 컨테이너로 만듦
    flexDirection: "row", // 좌우 정렬
    gap: "20px", // 이미지와 설명 사이 간격
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#333",
  },
  modalBody: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "flex-start", // 이미지와 텍스트 상단 정렬
  },
};

export default Modal;
