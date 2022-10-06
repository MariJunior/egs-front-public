import { css } from '@emotion/core';

import { getMediaquery } from './mediaqueries';

const overlays = {
  standart: css`
    ${getMediaquery('md')} {
      background-color: rgba(0, 148, 255, 0.2);
      background-image: radial-gradient(50% 50% at 50% 50%, #ff9cd7 0%, rgba(249, 111, 252, 0) 100%),
        radial-gradient(50% 50% at 50% 50%, rgba(68, 165, 255, 0.5) 35.94%, rgba(158, 191, 255, 0) 100%),
        radial-gradient(50% 50% at 50% 50%, #44a5ff 35.94%, rgba(158, 191, 255, 0) 100%),
        radial-gradient(50% 50% at 50% 50%, rgba(255, 156, 215, 0.8) 0%, rgba(249, 111, 252, 0) 100%),
        radial-gradient(50% 50% at 50% 50%, #00f0ff 36.98%, rgba(120, 252, 244, 0) 100%);
      background-size: 925px 855px, 820px 755px, 820px 755px, 680px 650px, 726px 725px;
      background-position: calc(50% - 150px) 50%, calc(50% + 150px) calc(50% + 150px), calc(50% - 100px) 0,
        calc(50% + 200px) calc(50% - 80px), calc(50% - 200px) calc(50% + 100px);
      background-repeat: no-repeat;
      backdrop-filter: blur(200px);
    }
  `,
  extended: css`
    ${getMediaquery('md')} {
      background-color: rgba(0, 148, 255, 0.2);
      background-image: radial-gradient(50% 50% at 50% 50%, #ff9cd7 0%, rgba(249, 111, 252, 0) 100%),
        radial-gradient(50% 50% at 50% 50%, rgba(68, 165, 255, 0.8) 35.94%, rgba(158, 191, 255, 0) 100%),
        radial-gradient(50% 50% at 50% 50%, #44a5ff 35.94%, rgba(158, 191, 255, 0) 100%),
        radial-gradient(50% 50% at 50% 50%, #ff9cd7 0%, rgba(249, 111, 252, 0) 100%),
        radial-gradient(50% 50% at 50% 50%, #00f0ff 36.98%, rgba(120, 252, 244, 0) 100%);
      background-size: 925px 855px, 820px 755px, 820px 755px, 680px 650px, 725px 725px;
      background-position: calc(50% - 150px) 50%, calc(50% + 150px) calc(50% + 150px), calc(50% - 100px) 0,
        calc(50% + 200px) calc(50% - 80px), calc(50% - 200px) calc(50% + 100px);
      background-repeat: no-repeat;
      backdrop-filter: blur(200px);
    }

    ${getMediaquery('lg')} {
      background-size: 1405px 1295px, 1245px 1145px, 1245px 1145px, 1030px 985px, 1100px 1100px;
      background-position: calc(50% - 150px) calc(50% + 150px), calc(50% + 500px) calc(50% + 400px),
        calc(50% + 50px) calc(50% - 200px), calc(50% + 500px) calc(50% - 200px), calc(50% - 400px) calc(50% + 150px);
    }
  `,
};

export const getOverlay = (overlay: keyof typeof overlays) => {
  return overlays[overlay];
};
