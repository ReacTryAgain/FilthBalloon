import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // React Router import 추가
import Header from "../components/header/Header";
import styles from "./ReportPage.styles.js"; // 스타일 가져오기

function ReportPage() {
  const navigate = useNavigate(); // 네비게이션 훅 사용
  const [addressDetail, setAddressDetail] = useState(""); // 상세주소 추가
  const [description, setDescription] = useState("");
  const [discoveredDate, setDiscoveredDate] = useState("");
  const [discoveredTime, setDiscoveredTime] = useState("");
  const [images, setImages] = useState([]);

  const [addressResults, setAddressResults] = useState([]); // 검색 결과 저장
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [addressInput, setAddressInput] = useState(""); // 주소 검색 입력

  useEffect(() => {
    document.body.style.backgroundColor = "#d9d3c3";
    return () => {
      document.body.style.backgroundColor = "";
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

  const searchAddress = () => {
    if (!addressInput.trim()) return;

    const geocoder = new window.kakao.maps.services.Geocoder();
    const places = new window.kakao.maps.services.Places();
    let combinedResults = []; // 두 검색 결과를 저장할 배열

    // 1. 주소 검색 (addressSearch)
    geocoder.addressSearch(addressInput, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        combinedResults = [...result]; // 주소 검색 결과 저장
      }

      // 2. 키워드 검색 (keywordSearch)
      places.keywordSearch(addressInput, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          combinedResults = [...combinedResults, ...data]; // 키워드 검색 결과 추가
        }

        // 중복 제거 및 결과 저장
        const uniqueResults = combinedResults.reduce((acc, current) => {
          const isDuplicate = acc.some(
            (item) =>
              item.address_name === current.address_name &&
              item.place_name === current.place_name
          );
          if (!isDuplicate) acc.push(current);
          return acc;
        }, []);

        setAddressResults(uniqueResults); // 최종 결과 저장
        setIsModalOpen(true); // 모달 열기
      });
    });
  };

  const handleSelectAddress = (selectedAddress) => {
    setAddressInput(selectedAddress.address_name); // 선택된 주소를 입력 필드에 반영
    setIsModalOpen(false); // 모달 닫기
  };

  const handleSubmit = async () => {
    if (!addressInput) {
      alert("주소를 입력하고 선택해주세요.");
      return;
    }

    const validation = await validateAddress(addressInput);

    if (!validation.valid) {
      alert("입력한 주소가 유효하지 않습니다. 다시 확인해주세요.");
      return;
    }

    if (!discoveredDate || !discoveredTime) {
      alert("발견 날짜와 시간을 모두 입력해주세요.");
      return;
    }

    const reportData = {
      addressInput, //
      addressDetail, // 상세주소 추가
      description,
      discoveredDate,
      discoveredTime,
      images,
      coordinates: validation.coordinates,
      createdAt: new Date().toISOString(),
    };

    const existingReports = JSON.parse(localStorage.getItem("reports")) || [];
    const updatedReports = [...existingReports, reportData];

    localStorage.setItem("reports", JSON.stringify(updatedReports));

    alert("제보가 성공적으로 저장되었습니다!");
    console.log("Saved Report Data:", reportData);

    // 메인 페이지로 이동
    navigate("/"); // "/main" 경로로 이동 (적절한 경로로 수정 필요)
  };

  const validateAddress = async (address) => {
    return new Promise((resolve) => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          resolve({
            valid: true,
            coordinates: {
              latitude: result[0].y,
              longitude: result[0].x,
            },
          });
        } else {
          resolve({ valid: false });
        }
      });
    });
  };

  return (
    <>
      <Header />
      <div style={styles.reportPage}>
        <h1 style={styles.pageTitle}>Trash Hunt : 오물풍선 제보하기</h1>

        <div style={styles.container}>
          {/* 주소 검색 */}
          <div style={styles.inlineGroup}>
            <label style={styles.inlineLabel}>주소 검색:</label>
            <input
              style={styles.input}
              type="text"
              value={addressInput}
              onChange={(e) => setAddressInput(e.target.value)}
              placeholder="도로명 주소 또는 지번 주소 입력"
            />
            <button style={styles.searchButton} onClick={searchAddress}>
              검색
            </button>
          </div>
          <div style={styles.inlineGroup}>
            <label style={styles.inlineLabel}>상세주소:</label>
            <input
              style={styles.input}
              type="text"
              value={addressDetail}
              onChange={(e) => setAddressDetail(e.target.value)}
              placeholder="예) 아파트, 건물 이름, 층/호수 등"
            />
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
              type="date"
              value={discoveredDate}
              onChange={(e) => setDiscoveredDate(e.target.value)}
            />
            <input
              style={styles.input}
              type="time"
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
                  <img
                    src={image}
                    alt={`미리보기 ${index}`}
                    style={styles.imagePreview}
                  />
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
                multiple
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
        {/* 주소 검색 결과 모달 */}
        {isModalOpen && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
              <button
                style={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
              >
                X
              </button>
              <h2>주소 검색 결과</h2>
              {addressResults.length > 0 ? (
                <ul style={styles.addressList}>
                  {addressResults.map((address, index) => (
                    <li
                      key={index}
                      style={styles.addressItem}
                      onClick={() => handleSelectAddress(address)}
                    >
                      {address.address_name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>검색된 주소가 없습니다.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ReportPage;
