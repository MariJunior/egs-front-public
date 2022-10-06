import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { getMediaquery, prop } from 'helpers';
import { NewsCardProps } from '../types';

export interface NewsCardMainProps
  extends NewsCardProps,
    Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {}

export function NewsCardMain({ imageSrc, title, subtitle, date, ...props }: NewsCardMainProps) {
  return (
    <Card background={imageSrc} {...props}>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardDate>{date}</CardDate>
    </Card>
  );
}

const Card = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 140px 20px 20px;
  width: 280px;
  border-radius: 20px;
  background-image: linear-gradient(
      180.13deg,
      rgba(89, 156, 246, 0) 0.11%,
      rgba(89, 156, 246, 0.0697674) 19.49%,
      #1b8eff 71.03%
    ),
    url('${prop('background')}');
  background-position: top left, center -70px;
  background-size: auto, cover;
  background-repeat: no-repeat;
  ${getMediaquery('sm')} {
    width: 335px;
  }
  ${getMediaquery('md')} {
    padding: 95px 330px 30px 30px;
    width: 730px;
    background-image: radial-gradient(
        21.84% 77.54% at 36.95% 68.53%,
        rgba(84, 245, 255, 0.5) 0%,
        rgba(120, 252, 244, 0) 100%
      ),
      linear-gradient(
        180deg,
        rgba(89, 246, 208, 0) 0%,
        rgba(89, 156, 246, 0.0139535) 15.67%,
        rgba(27, 255, 228, 0.2) 57.33%
      ),
      linear-gradient(270deg, rgba(89, 156, 246, 0) 35.76%, #1b8eff 61.49%), url('${prop('background')}');
    background-position: top left, top left, top left, calc(100% + 180px) calc(50% - 40px);
    background-size: auto, auto, auto, cover;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(80px);
  }
  ${getMediaquery('lg')} {
    padding: 145px 455px 30px 30px;
    width: 855px;
  }
`;

const CardTitle = styled.strong`
  margin-bottom: 10px;
  font-family: var(--font-families-gilroy);
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: var(--colors-white);
  ${getMediaquery('md')} {
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 36px;
  }
`;

const additionalText = css`
  font-family: var(--font-families-ubuntu);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: var(--colors-white);
`;

const CardSubtitle = styled.span`
  margin-bottom: 10px;
  ${additionalText};
  opacity: 0.7;
  ${getMediaquery('md')} {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 21px;
  }
  ${getMediaquery('lg')} {
    margin-bottom: 40px;
  }
`;

const CardDate = styled.time`
  ${additionalText};
  opacity: 0.5;
  ${getMediaquery('md')} {
    font-size: 14px;
    line-height: 16px;
    opacity: 1;
  }
`;
