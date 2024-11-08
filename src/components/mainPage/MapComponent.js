import React, { useEffect, useState } from "react";
import styles from "./MainPage.styles";

function MapComponent() {
  const locations = [
    { lat: 37.582925, lng: 127.010538, description: "위치 1" },
    { lat: 37.582, lng: 127.011, description: "위치 2" },
    { lat: 37.583, lng: 127.012, description: "위치 3" },
  ];
  // 설명란에 표시할 내용을 저장할 상태
  const [description, setDescription] = useState();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=284fa1317d3a788d1bb87b93733d94fa&autoload=false";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.582925, 127.010538),
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 위치 배열을 순회하면서 마커 생성
        locations.forEach((location, index) => {
          const markerPosition = new window.kakao.maps.LatLng(
            location.lat,
            location.lng
          );
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);

          // 각 마커 클릭 이벤트 추가
          window.kakao.maps.event.addListener(marker, "click", () => {
            setDescription(`위치 ${index + 1}: ${location.description}`);
          });
        });
      });
    };
  }, [locations]); // locations가 변경될 때마다 useEffect 재실행

  return (
    <div style={styles.mapSection}>
      <div id="map" style={styles.mapPlaceholder}></div>
      <div style={styles.mapBox}>위치 설명란</div>
      <div style={styles.mapDescription}>{description}</div> {/* 설명하는 칸 */}
    </div>
  );
}

export default MapComponent;
