const formatTimeData = (time: number) => {
  const FORMATTED_MINUTE = Math.floor(time / 60);
  const FORMATTED_SECOND = time % 60;
  return { FORMATTED_MINUTE, FORMATTED_SECOND };
};

export default formatTimeData;
