import { FC, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { ArticleSidebarProps } from './types';
import { NewsCard } from './components/news-card';

import { getFont } from '../../helpers';
import { getMediaquery } from '../../helpers';
import vkontakte from '../../../public/assets/vk.svg';

export const ArticleSidebar: FC<ArticleSidebarProps> = ({ news }) => {
  const [sidebarNews, setSidebarNews] = useState<typeof news>([]);

  useEffect(() => {
    setSidebarNews(news);
  }, []);

  const sortedNewsByDate = sidebarNews.sort((a, b) => {
    const firstDate = a.date.slice(0, 2);
    const secondDate = b.date.slice(0, 2);
    if (firstDate < secondDate) {
      return 1;
    }
    return -1;
  });

  const formattedNewsArray = sortedNewsByDate.map((item) => {
    if (item.date.startsWith('0')) {
      return { ...item, date: item.date.replace('0', '') };
    }
    return item;
  });
  const NewsCardRender = () => {
    return formattedNewsArray.map(({ title, date, link }, index) => (
      <NewsCard key={index} title={title} date={date} link={link} />
    ));
  };
  return (
    <>
      <MobileSidebar>
        <SidebarTitle>Интересно и полезно</SidebarTitle>
        <Row>
          {NewsCardRender()}
          <SocialContainer>
            <SocialIconImage src={vkontakte.src} alt="vkontakte" />
            <Invite>Присоединяйтесь к обсуждению социальных ролей</Invite>
          </SocialContainer>
        </Row>
      </MobileSidebar>

      <PCSidebar>
        <SidebarTitle>Интересно и полезно</SidebarTitle>
        {NewsCardRender()}
        <SocialContainer>
          <SocialIconImage src={vkontakte.src} alt="vkontakte" />
          <Invite>Присоединяйтесь к обсуждению социальных ролей</Invite>
        </SocialContainer>
      </PCSidebar>
    </>
  );
};
const Row = styled.div`
  ${getMediaquery('sm')} {
    gap: 10px;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(5, 275px);
    width: 375px;
    overflow-x: scroll;
  }
  ${getMediaquery('md')} {
    width: 768px;
    padding-bottom: 10px;
  }
  ${getMediaquery('lg')} {
    display: none;
  }
`;
const PCSidebar = styled.div`
  ${getMediaquery('sm')} {
    display: none;
  }

  ${getMediaquery('lg')} {
    max-width: 367px;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: flex-start;
  }
`;
const MobileSidebar = styled.div`
  ${getMediaquery('sm')} {
    margin-top: 20px;
    flex-direction: column;
  }

  ${getMediaquery('lg')} {
    display: none;
  }
`;
const SidebarTitle = styled.h2`
  ${getFont('titleMd')};

  color: var(--colors-black);
  font-size: 24px;

  ${getMediaquery('sm')} {
    margin-bottom: 15px;
  }
  ${getMediaquery('lg')} {
    margin-bottom: 30px;
  }
`;

const SocialContainer = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  background: var(--colors-lightgrey);
  cursor: pointer;

  ${getMediaquery('sm')} {
    max-width: 252px;
    padding: 16px;
    margin-top: 0;
    grid-row: 1;
  }
  ${getMediaquery('lg')} {
    max-width: 296px;
    padding: 21px 26px;
    margin-top: 70px;
  }
`;
const SocialIconImage = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 20px;
`;
const Invite = styled.h3`
  ${getFont('title')};
  font-size: 16px;
  line-height: 120%;
  color: var(--colors-black);
`;
