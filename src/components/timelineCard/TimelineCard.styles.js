const styles = {
  timelineCardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 0',
    gap: '20px', // 카드 간격 추가
  },
  divider: {
    border: 'none',
    height: '2px',
    backgroundColor: '#000000',
    margin: '0 0 10px 0',
  },
  timelineCardMain: {
    display: 'flex',
    flexDirection: 'row', // 좌우 배치
    justifyContent: 'space-between', // 좌우 공간 배분
    alignItems: 'flex-start', // 세로축 정렬
    gap: '20px', // 좌우 섹션 간 간격
  },
  leftSection: {
    flex: 2, // 왼쪽 영역이 더 많은 공간 차지
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  alertSection: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  alertBadge: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    color: '#000',
    padding: '3px 6px',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  redIcon: {
    width: '10px',
    height: '10px',
    marginRight: '5px',
  },
  timelineCardLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timelineIcon: {
    width: '40px',
    marginRight: '10px',
  },
  timelineInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  timelineInfoHeader: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  description: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  timelineInfoText: {
    margin: '3px 0',
    fontSize: '12px',
  },
  rightSection: {
    flex: 1, // 오른쪽 영역은 적은 공간 차지
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end', // 오른쪽 정렬
    gap: '10px', // 이미지 간격
    marginLeft: 'auto', // 오른쪽으로 정렬
  },
  timelineImages: {
    display: 'flex',
    gap: '10px',
  },
  image: {
    width: '150px',
    height: 'auto',
    borderRadius: '5px',
  },
};

export default styles;
