import React from "react";
import Header from "../components/header/Header";
import styles from "./AboutPage.styles";

function AboutPage() {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>Trash Hunt Service 소개</h2>
          <div style={styles.descriptionBox}>
            <p style={styles.paragraph}>
              본 오물풍선 웹 서비스 "Trash Hunt"는 북한이 무단으로 살포한 오물풍선의 위치 정보를 제공하여 사용자가 쉽게 상황을 파악할 수 있도록 돕는 종합적인 플랫폼입니다.
            </p>
            <p style={styles.paragraph}>
              이 웹 서비스는 지도 기반 시각화와 히트맵 기능을 통해 오물풍선이 발견된 지역과 빈도를 직관적으로 확인할 수 있도록 설계되었습니다. 사용자는 지도를 통해 오물풍선의 발견 위치를 필요한 정보로 세부 정리(사진, 내용물, 제보자 정보 등)를 열람할 수 있으며, 히트맵 기능을 통해 오물풍선이 자주 떨어지는 추세를 색상으로 구분하여 시각적으로 확인할 수 있습니다. 이를 통해 사용자는 북한의 오물풍선 살포 패턴을 한눈에 파악할 수 있습니다.
            </p>
            <p style={styles.paragraph}>
              또한, 제보 기능을 통해 사용자가 직접 오물풍선 발견과 제보한 내용을 실시간으로 제공받을 수 있어, 최신 정보를 바탕으로 더욱 정확한 데이터를 제공합니다. 제보된 데이터는 서버에 저장, 업데이트되어 전체 사용자들과 공유됩니다.
            </p>
            <p style={styles.paragraph}>
              이외에도 타임라인 페이지에서는 오물풍선이 언제, 어디에서 발견되었는지를 시간 순으로 기록하여, 사용자들이 과거 데이터를 손쉽게 검색하고 분석할 수 있도록 돕습니다. 특히 교육 콘텐츠를 통해 오물풍선의 위험성, 환경적 피해, 건강에 미치는 악영향 등에 대한 정보를 제공함으로써 사용자들이 오물풍선의 심각성을 인식하고, 이를 경각심 있게 받아들일 수 있도록 유도합니다.
            </p>
            <p style={styles.paragraph}>
              이 웹 서비스는 사용자의 참여를 독려하고, 실시간 데이터를 바탕으로 북한의 오물풍선의 위험성을 경각심 있게 전달하며, 오물풍선 살포에 대한 경고와 대응책을 마련하는 데 기여하는 중요한 역할을 수행할 것입니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
