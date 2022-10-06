import { css } from '@emotion/core';

const shadows = {
  medium: css`
    box-shadow: 0px 0px 30px var(--colors-shadow);
  `,
  mediumDrop: css`
    filter: drop-shadow(0px 2.57857px 19.3393px rgba(0, 102, 255, 0.3));
  `,
};

export const getShadow = (shadow: keyof typeof shadows) => {
  return shadows[shadow];
};
