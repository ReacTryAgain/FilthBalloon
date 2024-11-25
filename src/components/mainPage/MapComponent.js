import React, { useEffect, useState } from "react";
import styles from "./MainPage.styles";

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
          center: new window.kakao.maps.LatLng(37.582925, 127.010538),
          level: 8,
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

  const addMarkers = (reportsData, kakaoMap) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    // console.log("Geocoder 객체 생성 완료:", geocoder);

    reportsData.forEach((report, index) => {
      const {
        city,
        district,
        subDistrict,
        description,
        discoveredDate,
        discoveredTime,
        images,
      } = report;
      const address = `${city} ${district} ${subDistrict}`;

      geocoder.addressSearch(address, (result, status) => {
        // console.log(`Report ${index + 1} 주소 검색 결과:`, result);
        // console.log(`Report ${index + 1} 상태:`, status);

        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
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
              address: `${city}시 ${district}구 ${subDistrict}동`,
            });
          });

          if (index === 0) {
            kakaoMap.setCenter(coords);
          }
        } else {
          console.error(`주소 검색 실패 (Report ${index + 1}):`, status);
        }
      });
    });
  };

  return (
    <div style={styles.mapSection}>
      <div id="map" style={styles.mapPlaceholder}></div>
      <div style={styles.mapBox}>
        {selectedReport ? (
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {selectedReport.images && selectedReport.images.length > 0 && (
              <img
                src={selectedReport.images[0]}
                alt="발견된 이미지"
                style={styles.previewImage}
              />
            )}
            <div style={styles.mapDescriptionText}>
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
        ) : (
          <p style={{ color: "#555", textAlign: "center" }}>
            마커를 클릭하면 이곳에 설명이 표시됩니다.
          </p>
        )}
      </div>
    </div>
  );
}

export default MapComponent;
