export const mediaqueries = {
  sm: '@media (min-width: 375px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1300px)',
};

export const getMediaquery = (mq: keyof typeof mediaqueries) => {
  return mediaqueries[mq];
};
