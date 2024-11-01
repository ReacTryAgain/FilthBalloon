import React from 'react';
import styles from './TimelineCard.styles.js'; // 스타일을 임포트합니다.

const TimelineCard = ({ title, description, dateSubmitted, dateFound, location, imgUrl1, imgUrl2 }) => {
  return (
    <div style={styles.timelineCardContent}>
      <hr style={styles.divider} />
      <div style={styles.alertSection}>
        <div style={styles.alertBadge}>
          <img src="/red-icon.png" alt="red icon" style={styles.redIcon} /> {/* 빨간색 아이콘 */}
          경보
        </div>
      </div>
      <div style={styles.timelineCardLeft}>
        <img src="/오물풍선.png" alt="icon" style={styles.timelineIcon} /> {/* 오물풍선 아이콘 */}
        <div style={styles.timelineInfo}>
          <div style={styles.timelineInfoHeader}>
            <h2 style={{ margin: 0 }}>{title}</h2>
            <span style={styles.description}>{description}</span>
          </div>
          <p style={styles.timelineInfoText}>제보 시각: {dateSubmitted}</p>
          <p style={styles.timelineInfoText}>발견 시각: {dateFound}</p>
          <p style={styles.timelineInfoText}>위치: {location}</p>
        </div>
      </div>
      <div style={styles.timelineImages}>
        <img src={imgUrl1} alt="사진 1" style={styles.image} />
        <img src={imgUrl2} alt="사진 2" style={styles.image} />
      </div>
    </div>
  );
};

export default TimelineCard;
