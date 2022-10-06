import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { getMediaquery } from 'helpers';

import { NewsCardProps } from '../types';

export interface NewsCardBasicProps
  extends NewsCardProps,
    Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {}

export function NewsCardBasic({ imageSrc, title, subtitle, date, ...props }: NewsCardBasicProps) {
  return (
    <Card {...props}>
      <CardCover src={imageSrc} />
      <CardCaption>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardDate>{date}</CardDate>
      </CardCaption>
    </Card>
  );
}

const Card = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 280px;
  ${getMediaquery('sm')} {
    width: 335px;
  }
  ${getMediaquery('md')} {
    width: 350px;
  }
  ${getMediaquery('lg')} {
    width: 412.5px;
  }
`;

const CardCover = styled.img`
  margin-bottom: 5px;
  width: 100%;
  height: 180px;
  border-radius: 20px;
  object-fit: cover;
  object-position: 50% 50%;
  ${getMediaquery('md')} {
    margin-bottom: 20px;
    height: 240px;
  }
  ${getMediaquery('lg')} {
    height: 260px;
  }
`;

const CardCaption = styled.figcaption`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-left: 7px;
`;

const CardTitle = styled.strong`
  margin-bottom: 5px;
  font-family: var(--font-families-gilroy);
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: var(--colors-darkblue);
  ${getMediaquery('md')} {
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 24px;
  }
`;

const additionalText = css`
  font-family: var(--font-families-ubuntu);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: var(--colors-darkblue);
`;

const CardSubtitle = styled.span`
  margin-top: auto;
  margin-bottom: 10px;
  ${additionalText};
  line-height: 16px;
  opacity: 0.5;
  ${getMediaquery('md')} {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 21px;
  }
`;

const CardDate = styled.time`
  ${additionalText};
  line-height: 14px;
  opacity: 0.7;
  ${getMediaquery('md')} {
    font-size: 14px;
    line-height: 16px;
  }
`;
