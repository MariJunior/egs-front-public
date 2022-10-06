import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { CardDetailed } from 'components/cards/card-detailed';
import { AppLinkProps, AppMetaInfoProps } from 'components/cards/card-detailed/types';
import { alsoPartners, generalPartners } from 'components/partners-list/data';
import { socials } from 'components/social-media-list/data';
import { thirdPartyLinksAuth } from 'helpers/content/authorization/data';
import { Footer } from 'layouts/footer';
import { footerCopyright, footerPagesList } from 'layouts/footer/data';
import { Header } from 'layouts/header';
import { headerPagesList } from 'layouts/header/data';
import { MainLayout } from 'layouts/main-layout';
import Logo from 'storybook/icons/logo.svg';
import { getMediaquery } from 'helpers/css-mixins/mediaqueries';
import { client } from '../apolloClient';
import { GetApplicationDocument, GetApplicationQuery } from '../../src/generated/graphql';
import { appPageToProps } from '../../src/apigql/converters';
import { GetServerSideProps } from 'next';

export interface AppPageProps {
  name?: string;
  icon?: string;
  summary?: string;
  links: AppLinkProps[];
  props?: AppMetaInfoProps[];
}

export default function AppPage(appData: AppPageProps) {
  return (
    <MainLayout
      header={
        <Header
          icon={Logo.src}
          currentPage="Каталог сервисов"
          pages={headerPagesList}
          authRecoveryLink="#"
          authGosuslugi="#"
          authThirdPartyLinks={thirdPartyLinksAuth}
        />
      }
      footer={
        <Footer
          pagesList={footerPagesList}
          socialMediaList={socials}
          generalPartnersList={generalPartners}
          otherPartnersList={alsoPartners}
          copyright={footerCopyright}
        />
      }
    >
      <StyledBreadcrumbs separator={<NavigateNextIcon />} aria-label="Хлебные крошки для страницы приложения">
        <ParentBreadcrumb href="#">Приложения</ParentBreadcrumb>
        <EndpointCrumb>{appData.name}</EndpointCrumb>
      </StyledBreadcrumbs>
      <StyledCardDetailed
        appIcon={appData.icon || ''}
        appName={appData.name || ''}
        appSummary={appData.summary || ''}
        appRating={2}
        appLinks={appData.links}
        appDetails={appData.props || []}
      />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps<AppPageProps, { id: string }> = async (context) => {
  const appData = await client.query<GetApplicationQuery>({
    query: GetApplicationDocument,
    variables: {
      id: context?.params?.id || 0,
    },
  });

  return {
    props: appPageToProps(appData),
  };
};

const StyledBreadcrumbs = styled(Breadcrumbs)`
  .MuiBreadcrumbs-ol {
    margin: 0 auto 35px auto;
    max-width: calc(var(--breakpoints-lg) - 40px);
  }

  .MuiBreadcrumbs-separator {
    margin-right: 10px;
    margin-left: 10px;
    color: var(--colors-darkblue);

    ${getMediaquery('md')} {
      margin-right: 30px;
      margin-left: 30px;
    }
  }
`;

const breadcrumbsBase = css`
  font-family: var(--font-families-ubuntu);
  font-size: 16px;
  line-height: 19px;
  color: var(--colors-blue);
`;

const ParentBreadcrumb = styled(Link)`
  ${breadcrumbsBase};

  &:hover {
    opacity: 0.6;
  }

  &:visited {
    color: var(--colors-blue);
  }
`;

const EndpointCrumb = styled(Typography)`
  ${breadcrumbsBase};
`;

const StyledCardDetailed = styled(CardDetailed)`
  margin-bottom: 40px;

  ${getMediaquery('sm')} {
    margin-bottom: 60px;
  }
`;
