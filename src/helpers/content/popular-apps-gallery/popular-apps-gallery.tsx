import styled from '@emotion/styled';

import { getFont } from '../../styles/mixins/fonts';
import { getMediaquery } from '../../styles/mixins/mediaqueries';

import { AppCardMiniBasicProps } from '../../components/cards/types';
import { CardMini } from '../../components/cards/card-mini';
import { CardsFilters } from '../../components/cards-filters';
import { filtersOptions, filtersDefaults } from '../../components/cards-filters/data';

export interface PopularAppsGalleryProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  apps: AppCardMiniBasicProps[];
  filtersId: string;
}

export function PopularAppsGallery({ filtersId, apps, ...props }: PopularAppsGalleryProps) {
  const renderAppsList = () => {
    return apps.map((app) => (
      <AppsListItem key={app.appName} appIcon={app.appIcon} appRating={app.appRating} appName={app.appName} />
    ));
  };

  return (
    <Wrapper {...props}>
      <Head>
        <Title>
          Самые популярные <TitleFull>сервисы</TitleFull>
        </Title>
        <AppsFilters options={filtersOptions} defaults={filtersDefaults} />
      </Head>
      <AppsList>{renderAppsList()}</AppsList>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: calc(var(--breakpoints-lg) - 40px);
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 20px;
`;

const Title = styled.h2`
  margin: 0 10px 0 0;
  ${getFont('title')};

  ${getMediaquery('md')} {
    margin-right: 40px;
  }
`;

const TitleFull = styled.span`
  display: none;

  ${getMediaquery('lg')} {
    display: inline;
  }
`;

const AppsFilters = styled(CardsFilters)`
  margin-left: auto;

  ${getMediaquery('md')} {
    margin-left: 0;
  }
`;

const AppsList = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  cursor: ew-resize;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const AppsListItem = styled(CardMini)`
  margin: 20px 0 20px 20px;

  &:last-child {
    margin-right: 20px;
  }

  ${getMediaquery('lg')} {
    margin: 20px;
  }
`;
