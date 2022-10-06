import { FC } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

import { InformationCardProps } from '../../information-block';

import { getMediaquery } from 'helpers';

import LinkIconImage from '../../../../../public/assets/link_icon.svg';

export const InformationCard: FC<InformationCardProps> = ({
  Image: InformationCardImage,
  Title,
  Description,
  Link,
}) => {
  return (
    <Card href={Link} target="_blank">
      <Content>
        <div>
          <Image
            src={InformationCardImage.url}
            width={InformationCardImage.width}
            height={InformationCardImage.height}
            alt={Title}
          />
        </div>
        <TextWrapper>
          <CardTitle>{Title}</CardTitle>
          {Description && <CardSubtitle>{Description}</CardSubtitle>}
          <CardArrowLink />
        </TextWrapper>
      </Content>
    </Card>
  );
};

const Card = styled.a`
  display: flex;
  text-decoration: none;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 29px;
  width: 360px;
  min-height: 208px;
  background: var(--colors-white);
  border-radius: 20px;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
  :hover {
    transition: 1s ease;
    box-shadow: 0px 0px 30px var(--colors-grey);
  }
  ${getMediaquery('sm')} {
    width: 335px;
    margin-right: 0;
    margin-bottom: 30px;
    padding: 0 0 0 33px;
  }

  ${getMediaquery('md')} {
    width: 349px;
    padding: 0 9px 0 29px;
    margin-bottom: 0;
  }

  ${getMediaquery('lg')} {
    padding: 0 14px 0 29px;
    margin-right: 0;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-evenly;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const CardTitle = styled.h2`
  max-width: 180px;
  margin-top: 0;
  margin-bottom: 8px;
  line-height: 100%;
  font-style: normal;
  font-weight: bold;
  color: var(--colors-darkblue);

  ${getMediaquery('sm')} {
    font-size: 16px;
  }

  ${getMediaquery('md')} {
    font-size: 18px;
  }

  ${getMediaquery('lg')} {
  }
`;

const CardSubtitle = styled.p`
  max-width: 156px;
  font-size: 14px;
  margin: 0;
  line-height: 120%;
  color: var(--colors-darkblue);
`;

const CardArrowLink = styled.a`
  position: absolute;
  right: 24px;
  bottom: 24px;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  background-image: url(${LinkIconImage.src});
  width: 25px;
  height: 25px;
`;
