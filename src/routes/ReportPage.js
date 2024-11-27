import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import styles from "./ReportPage.styles.js"; // 스타일 가져오기

function ReportPage() {
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [description, setDescription] = useState("");
  const [discoveredDate, setDiscoveredDate] = useState(""); // 날짜
  const [discoveredTime, setDiscoveredTime] = useState(""); // 시간
  const [images, setImages] = useState([]); // 여러 이미지를 저장할 배열

  useEffect(() => {
    // body 배경색 설정
    document.body.style.backgroundColor = "#d9d3c3"; // 배경색 설정
    return () => {
      document.body.style.backgroundColor = ""; // 컴포넌트 언마운트 시 초기화
    };
  }, []);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files); // 업로드된 파일들 배열로 변환
    const newImages = files.map((file) => URL.createObjectURL(file)); // 파일 URL 생성
    setImages((prevImages) => [...prevImages, ...newImages]); // 기존 이미지에 추가

    e.target.value = ""; // 동일한 파일을 다시 선택할 수 있도록 초기화
  };

  const handleImageRemove = (index) => {
    // 특정 이미지를 삭제
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // 유효성 검사: 날짜와 시간이 입력되었는지 확인
    if (!discoveredDate || !discoveredTime) {
      alert("발견 날짜와 시간을 모두 입력해주세요."); // 사용자에게 경고
      return; // 함수 종료
    }
    const discoveredDateTime = new Date(`${discoveredDate}T${discoveredTime}`).toISOString();
    // 작성한 내용과 작성 시각을 로컬 스토리지에 저장
    const currentTime = new Date().toISOString(); // 현재 시각 기록
    const reportData = {
      city,
      district,
      subDistrict,
      description,
      discoveredDate,
      discoveredTime,
      images,
      createdAt: currentTime, // 작성 시각 추가
    };

    // 기존 데이터 가져오기
    const existingReports = JSON.parse(localStorage.getItem("reports")) || [];
    const updatedReports = [...existingReports, reportData];
    
    // 로컬 스토리지에 저장
    localStorage.setItem("reports", JSON.stringify(updatedReports));

    alert("제보가 성공적으로 저장되었습니다!");
    console.log("Saved Report Data:", reportData);

    // 입력값 초기화
    setCity("");
    setDistrict("");
    setSubDistrict("");
    setDescription("");
    setDiscoveredDate("");
    setDiscoveredTime("");
    setImages([]);
  };

  return (
    <>
      <Header />
      <div style={styles.reportPage}>
        <h1 style={styles.pageTitle}>Trash Hunt : 오물풍선 제보하기</h1>
        <div style={styles.container}>
          {/* 낙하위치 */}
          <div style={styles.inlineGroup}>
            <label style={styles.inlineLabel}>낙하위치:</label>
            <input
              style={styles.input}
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            시
            <input
              style={styles.input}
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            구
            <input
              style={styles.input}
              type="text"
              value={subDistrict}
              onChange={(e) => setSubDistrict(e.target.value)}
            />
            동
          </div>
          <hr style={styles.divider} />

          {/* 상세설명 */}
          <div style={styles.inlineGroup}>
            <label style={styles.inlineLabel}>상세설명:</label>
            <textarea
              style={styles.textarea}
              placeholder="// 세부위치, 내용물 등을 적어주세요"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <hr style={styles.divider} />

          {/* 발견 시각 */}
          <div style={styles.inlineGroup}>
            <label style={styles.inlineLabel}>발견 시각:</label>
            <input
              style={styles.input}
              type="date" // 날짜 입력
              value={discoveredDate}
              onChange={(e) => setDiscoveredDate(e.target.value)}
            />
            <input
              style={styles.input}
              type="time" // 시간 입력
              value={discoveredTime}
              onChange={(e) => setDiscoveredTime(e.target.value)}
            />
          </div>
          <hr style={styles.divider} />

          {/* 이미지 업로드 */}
          <div style={styles.inlineGroup}>
            <label style={styles.inlineLabel}>이미지 업로드:</label>
            <div style={styles.imageUploadContainer}>
              {images.map((image, index) => (
                <div key={index} style={styles.imagePreviewContainer}>
                  <img src={image} alt={`미리보기 ${index}`} style={styles.imagePreview} />
                  <button
                    style={styles.removeButton}
                    onClick={() => handleImageRemove(index)}
                  >
                    X
                  </button>
                </div>
              ))}
              <label htmlFor="imageUpload" style={styles.uploadButton}>
                +
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                multiple // 다중 업로드 가능
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
          </div>

          {/* 등록 버튼 */}
          <button style={styles.submitButton} onClick={handleSubmit}>
            등록
          </button>
        </div>
      </div>
    </>
  );
}

export default ReportPage;
