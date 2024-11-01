import React from 'react';
import './TimelineCard.css';

const TimelineCard = ({ title, description, dateSubmitted, dateFound, location, imgUrl1, imgUrl2 }) => {
  return (
    <div className="timeline-card-content">
      <hr className="divider" />
      <div className="alert-section">
        <div className="alert-badge">
          <img src="/red-icon.png" alt="red icon" className="red-icon" /> {/* 빨간색 아이콘 */}
          경보
        </div>
      </div>
      <div className="timeline-card-left">
        <img src="/오물풍선.png" alt="icon" className="timeline-icon" /> {/* 오물풍선 아이콘 */}
        <div className="timeline-info">
          <div className="timeline-info-header">
            <h2>{title}</h2>
            <span className="description">{description}</span>
          </div>
          <p>제보 시각: {dateSubmitted}</p>
          <p>발견 시각: {dateFound}</p>
          <p>위치: {location}</p>
        </div>
      </div>
      <div className="timeline-images">
        <img src={imgUrl1} alt="사진 1" className="image" />
        <img src={imgUrl2} alt="사진 2" className="image" />
      </div>
    </div>
  );
};

export default TimelineCard;
