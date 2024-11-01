const styles = {
  timelineCardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 0',
  },
  divider: {
    border: 'none',
    height: '2px',
    backgroundColor: '#000000',
    margin: '0 0 10px 0',
  },
  alertSection: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '5px',
  },
  alertBadge: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFD700', // 노란색 배경
    color: '#000',
    padding: '3px 6px',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  redIcon: {
    width: '10px', // 빨간색 아이콘 크기
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
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
    textAlign: 'left',
  },
  timelineInfoText: {
    margin: '3px 0',
    fontSize: '12px',
    textAlign: 'left',
  },
  timelineImages: {
    display: 'flex',
    gap: '10px',
    marginLeft: 'auto',
  },
  image: {
    width: '100px',
    height: 'auto',
    borderRadius: '5px',
  },
};

export default styles;
