import React, { useEffect, useState } from "react";
import styles from "./MainPage.styles";
import Modal from "./Modal";

function MapComponent() {
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=284fa1317d3a788d1bb87b93733d94fa&autoload=false&libraries=services";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // console.log("Kakao Maps API 스크립트 로드 완료:", window.kakao);

      window.kakao.maps.load(() => {
        console.log("Kakao Maps API 로드 완료");

        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.566535, 126.9779692),
          level: 7,
        };
        const kakaoMap = new window.kakao.maps.Map(container, options);

        const reportsData = JSON.parse(localStorage.getItem("reports"));
        // console.log("Reports 데이터:", reportsData);

        if (reportsData && Array.isArray(reportsData)) {
          addMarkers(reportsData, kakaoMap); // 마커 추가
        } else {
          console.error(
            "로컬스토리지에 'reports' 데이터가 없거나 올바르지 않습니다."
          );
        }
      });
    };

    script.onerror = () => {
      console.error("Kakao Maps API 로드 실패");
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addMarkers = (reportsData, kakaoMap) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    // console.log("Geocoder 객체 생성 완료:", geocoder);

    reportsData.forEach((report, index) => {
      const {
        description,
        discoveredDate,
        discoveredTime,
        images,
        coordinates, // 위도, 경도 정보
        addressInput, // 도로명 주소
        addressDetail, // 상세주소
      } = report;

      if (coordinates && coordinates.latitude && coordinates.longitude) {
        const coords = new window.kakao.maps.LatLng(
          coordinates.latitude,
          coordinates.longitude
        );
        const marker = new window.kakao.maps.Marker({
          position: coords,
        });
        marker.setMap(kakaoMap);

        window.kakao.maps.event.addListener(marker, "click", () => {
          setSelectedReport({
            description,
            discoveredDate,
            discoveredTime,
            images,
            address: `${addressInput} ${addressDetail}`,
          });
          openModal();
        });

        if (index === 0) {
          kakaoMap.setCenter(coords);
        }
      } else {
        console.error(
          `Report ${index + 1}에 유효한 coordinates 정보가 없습니다.`
        );
      }
    });
  };

  return (
    <div style={styles.mapSection}>
      <div style={{ position: "relative", height: "100%" }}>
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedReport && (
            <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <div style={styles.imageContainer}>
                {selectedReport.images && (
                  <img
                    src={selectedReport.images[0]}
                    alt="이미지 없음"
                    style={{
                      maxWidth: "200px", // 너비 제한
                      maxHeight: "300px", // 높이 제한 추가
                      width: "auto", // 너비 자동 조정
                      height: "auto", // 높이 자동 조정
                      objectFit: "cover", // 이미지를 컨테이너에 맞게 크롭
                      borderRadius: "8px", // 모서리 둥글게
                    }}
                  />
                )}
              </div>
              <div style={styles.textContainer}>
                <p>
                  <strong>발견 장소:</strong> {selectedReport.address}
                </p>
                <p>
                  <strong>상세 설명:</strong> {selectedReport.description}
                </p>
                <p>
                  <strong>발견 날짜:</strong> {selectedReport.discoveredDate}
                </p>
                <p>
                  <strong>발견 시각:</strong> {selectedReport.discoveredTime}
                </p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default MapComponent;
