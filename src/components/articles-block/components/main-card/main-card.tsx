import { FC } from 'react';
import styled from '@emotion/styled';

import { getFont } from '../../../../helpers';
import { getMediaquery } from '../../../../helpers';

export interface MainArticlesCardProps {
  date: string;
  image: StaticImageData;
  subtitle: string;
  title: string;
}

export const MainArticlesCard: FC<MainArticlesCardProps> = ({ title, subtitle, date, image }) => {
  return (
    <Article style={{ backgroundImage: `url(${image.src})` }}>
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Date dateTime={date}>{date}</Date>
      </Content>
    </Article>
  );
};

const Article = styled.div<{ background?: string }>`
  display: flex;
  background-position: center;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
  border-radius: 20px;

  &::after {
    content: '';
    width: 100%;
    background: linear-gradient(
      180.13deg,
      rgba(89, 156, 246, 0) 0.11%,
      rgba(89, 156, 246, 0.0697674) 19.49%,
      #1b8eff 71.03%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    z-index: 5;
  }
  ${getMediaquery('sm')} {
    width: 335px;
    height: 260px;
    padding: 0 20px 20px 20px;
    align-items: flex-end;
    margin: 0 0 30px 0;
  }

  ${getMediaquery('md')} {
    width: 728px;
    height: 340px;
    padding: 94px 30px 30px 30px;
    align-items: center;
    margin: 0 0 30px 0;
  }

  ${getMediaquery('lg')} {
    width: 615px;
    height: 438px;
    padding: 0 30px 30px 30px;
    align-items: flex-end;
    margin: 0 0 50px 0;
  }
`;

const Content = styled.div`
  z-index: 6;
  ${getMediaquery('sm')} {
    width: 295px;
  }

  ${getMediaquery('md')} {
    width: 366px;
  }

  ${getMediaquery('lg')} {
    width: 555px;
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;

  ${getMediaquery('sm')} {
    width: 295px;
    font-family: ${getFont('medium')}
    font-weight: bold;
    font-size: 16px;
    color: #fff;
  }

  ${getMediaquery('md')} {
    width: 366px;
    font-family: ${getFont('titleLg')}
    color: #fff;
  }

  ${getMediaquery('lg')} {
    width: 555px;
    color: #fff;
  }
`;

const Subtitle = styled.p`
  color: #FFFFFF;
  opacity: 0.7;
  ${getMediaquery('sm')} {
  width: 295px;
  font-family: ${getFont('medium')}
  color: #FFF;
  opacity: 0.7;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 10px;
}

  ${getMediaquery('md')} {
  width: 366px;
  margin-bottom: 20px;
  opacity: 0.7;
}

  ${getMediaquery('lg')} {
  width: 555px;
  margin-bottom: 20px;
  opacity: 0.7;
}
`;

const Date = styled.time`
  opacity: 0.5;

  ${getMediaquery('sm')} {
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
  }

  ${getMediaquery('md')} {
    font-family: ${getFont('medium')};
    color: #ffffff;
  }

  ${getMediaquery('lg')} {
    width: 555px;
  }
`;
