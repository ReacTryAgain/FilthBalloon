import React from "react";
import styles from "./TimelineCard.styles.js";

const TimelineCard = ({ title, description, dateSubmitted, dateFound, images }) => {
  return (
    <div style={styles.timelineCardContent}>
      <hr style={styles.divider} />
      <div style={styles.timelineCardMain}>
        {/* Left Section */}
        <div style={styles.leftSection}>
          <div style={styles.alertSection}>
            <div style={styles.alertBadge}>
              <img src="/red-icon.png" alt="red icon" style={styles.redIcon} />
              경보
            </div>
          </div>
          <div style={styles.timelineCardLeft}>
            <img src="/오물풍선.png" alt="icon" style={styles.timelineIcon} />
            <div style={styles.timelineInfo}>
              <div style={styles.timelineInfoHeader}>
                <h2 style={{ margin: 0 }}>{title}</h2>
                <span style={styles.description}>{description}</span>
              </div>
              <p style={styles.timelineInfoText}>제보 시각: {dateSubmitted}</p>
              <p style={styles.timelineInfoText}>발견 시각: {dateFound}</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div style={styles.rightSection}>
          <div style={styles.timelineImages}>
            {images.map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt={`사진 ${index + 1}`} style={styles.image} />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default TimelineCard;
