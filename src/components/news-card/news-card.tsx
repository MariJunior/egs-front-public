import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Image from 'next/image';
import { getMediaquery } from '../../helpers';

import { NewsCardProps } from './types';

export function NewsCard({ imageSrc, title, subtitle, date }: NewsCardProps) {
  return (
    <Card>
      <Image className="card-article__news" src={imageSrc} alt={title} />

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
    margin-bottom: 20px;
    &:last-child: {
      margin-bottom: 0;
    }
  }

  ${getMediaquery('md')} {
    width: 355px;
    margin-right: 20px;
    margin-bottom: 0;
    &:last-child {
      margin-right: 0;
    }
  }

  ${getMediaquery('lg')} {
    width: 405px;
  }
  > div > img {
    margin-bottom: 5px;
    width: 100%;
    height: 180px;
    border-radius: 20px;
    margin-bottom: 0;
    ${getMediaquery('md')} {
      margin-bottom: 20px;
      height: 240px;
    }

    ${getMediaquery('lg')} {
      height: 260px;
    }
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
