import { FC, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { PopularServicesProps } from './types';
import { PopularService } from './components/popular-service';

import { Header } from '../articles-block-header';

import { getMediaquery } from 'helpers';

export const PopularServices: FC<PopularServicesProps> = ({ services }) => {
  const [currentTab, setCurrentTab] = useState<PopularServicesProps['services']>([]);

  useEffect(() => {
    setCurrentTab(services);
  }, []);

  return (
    <Wrapper>
      <Header setCurrentTab={setCurrentTab} cards={services} title="Самые актуальные" />
      <Services>
        {currentTab.slice(0, 4).map(({ title, image, rating, id }) => (
          <PopularService id={id} key={id} title={title} image={image} rating={rating} />
        ))}
      </Services>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${getMediaquery('sm')} {
    max-width: 375px;
    align-items: center;
  }

  ${getMediaquery('md')} {
    max-width: 768px;
    align-items: flex-start;
    align-self: flex-start;
  }
  ${getMediaquery('lg')} {
    max-width: 853px;
    justify-content: center;
  }
`;
const Services = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 184px);
  grid-column-gap: 40px;
  margin-top: 34px;
  padding-bottom: 80px;

  ${getMediaquery('sm')} {
    width: 375px;
    overflow: scroll;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }

  ${getMediaquery('md')} {
    width: 768px;
    overflow: scroll;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
  ${getMediaquery('lg')} {
    overflow: visible;
    width: 853px;
  }
`;
