import { FC } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

import { ApplicationCardProps } from '../../applications-slider';

import { getMediaquery } from '../../../../helpers';

import newIcon from '../../../../../public/assets/application-slider/new_icon.svg';
import thumbUp from '../../../../../public/assets/application-slider/thumb_up.svg';

export const ApplicationSliderCard: FC<ApplicationCardProps> = ({ Logo, Name, ShortDescription, Category }) => {
  const markSetter = () => {
    const categoryIsEditorsChoiceOrPopular = Category === 'editors_choise' || 'popular';

    if (Category === null) return;

    if (Category) {
      return <Image src={categoryIsEditorsChoiceOrPopular ? thumbUp : newIcon} alt={'Иконка'} />;
    }
  };

  return (
    <Card>
      <Header>
        {Category ? <Mark>{markSetter()}</Mark> : null}
        <Icon>{Logo && <Image src={Logo?.url} width={Logo?.width} height={Logo?.height} alt={Name} />}</Icon>

        <Title>{Name}</Title>
      </Header>
      <Subtitle>{ShortDescription}</Subtitle>
    </Card>
  );
};

const Card = styled.div`
  width: 350px;
  position: relative;
  user-select: none;
  height: 180px;
  box-shadow: 0 0 30px rgba(0, 102, 255, 0.15);
  box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px 0 26px 13px;
  border-radius: 20px;
  margin-bottom: 50px;

  ${getMediaquery('sm')} {
    width: 335px;
    margin-left: 0;
    margin-bottom: 0;
    margin-top: 30px;

    :nth-of-type(1) {
      margin-top: 0;
    }
    :nth-of-type(2) {
      height: 180px;
    }
    :nth-of-type(even) {
      margin-right: 0;
    }
    :nth-last-of-type(1) {
      margin-bottom: 45px;
    }
  }

  ${getMediaquery('md')} {
    margin-left: 0;
    margin-bottom: 30px;
    margin-right: 30px;
    margin-top: 0;
    :nth-of-type(2) {
      height: 180px;
    }
    :nth-last-of-type(1),
    :nth-last-of-type(2) {
      margin-bottom: 45px;
    }
  }
  ${getMediaquery('lg')} {
    width: 350px;

    margin-right: 0;
    height: 180px;
    :nth-last-of-type(1),
    :nth-last-of-type(2) {
      margin-bottom: 0px;
    }
    :nth-of-type(2) {
      height: 180px;
      transform: translate(-50%, 0);
      margin-left: 0;
      margin-bottom: 0;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 11px;
`;

const Mark = styled.div`
  width: 23px;
  height: 42px;
  position: absolute;
  right: 22px;
  top: 0;
`;

const Title = styled.h4`
  max-width: 210px;
  margin: 0;
  color: var(--colors-darkblue);
  font-weight: bold;
  text-align: left;
  font-size: 20px;
  line-height: 120%;
`;

const Subtitle = styled.p`
  max-width: 300px;
  color: var(--colors-darkblue);
  padding-left: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  opacity: 0.4;
  margin: 0;
`;

const Icon = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 19px;
`;
