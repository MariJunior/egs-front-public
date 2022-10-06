import { css } from '@emotion/core';

const fonts = {
  titleLg: css`
    font-family: var(--font-families-gilroy);
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    color: var(--colors-darkblue);
  `,
  titleMd: css`
    font-family: var(--font-families-gilroy);
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: var(--colors-darkblue);
  `,
  title: css`
    font-family: var(--font-families-gilroy);
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: var(--colors-darkblue);
  `,
  medium: css`
    font-family: var(--font-families-ubuntu);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: var(--colors-darkblue);
  `,
  small: css`
    font-family: var(--font-families-gilroy);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.16px;
  `,
};

export const getFont = (font: keyof typeof fonts) => {
  return fonts[font];
};
