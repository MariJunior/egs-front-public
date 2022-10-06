import styled from '@emotion/styled';

import { getMediaquery } from '../../helpers';

import { SwitchLanguage } from '../../components/fields/switch-language';
import { SocialMediaList } from '../../components/social-media-list';
import { SubscribeForm } from '../../components/subscribe-form';
import { PartnersList } from '../../components/partners-list';

import { CommonLinkProps, CommonIconLinkProps } from '../../types';

export interface FooterProps {
  copyright: string;
  generalPartnersList: CommonIconLinkProps[];
  otherPartnersList: CommonIconLinkProps[];
  pagesList: CommonLinkProps[];
  socialMediaList: CommonIconLinkProps[];
}

export function Footer({ pagesList, socialMediaList, generalPartnersList, otherPartnersList, copyright }: FooterProps) {
  const renderNavigationItemsGeneral = () => {
    return pagesList.map((page) => (
      <NavigationItem key={page.name}>
        <NavigationLink href={page.link}>{page.name}</NavigationLink>
      </NavigationItem>
    ));
  };

  return (
    <PageFooter>
      <Wrapper>
        <TopPannel>
          <Navigation>
            <NavigationList>
              {renderNavigationItemsGeneral()}
              <NavigationItem>
                <SwitchLanguage name="footer-language-switch" />
              </NavigationItem>
            </NavigationList>
          </Navigation>
          <SocialMediaList platforms={socialMediaList} />
          <SubscribeForm />
        </TopPannel>
        <PartnersList partners={generalPartnersList} smallPartners={otherPartnersList} />
        <Copyright>{copyright}</Copyright>
      </Wrapper>
    </PageFooter>
  );
}

const PageFooter = styled.footer`
  display: none;
  padding-top: 70px;
  padding-bottom: 40px;
  background-image: linear-gradient(180deg, rgba(0, 148, 255, 0.1) 0%, rgba(28, 145, 255, 0) 100%);
  background-size: 100% 278px;
  background-repeat: no-repeat;

  ${getMediaquery('lg')} {
    display: block;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: calc(var(--breakpoints-lg) - 40px);
`;

const TopPannel = styled.div`
  display: grid;
  grid-template-columns: 1fr 210px 1fr;
  grid-column-gap: 110px;
  margin-bottom: 65px;
`;

const Navigation = styled.nav`
  max-width: 370px;
`;

const NavigationList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 30px);
  grid-column-gap: 50px;
  grid-row-gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavigationItem = styled.li`
  font-family: var(--font-families-ubuntu);
  font-size: 16px;
  line-height: 20px;
  color: var(--colors-blue);
`;

const NavigationLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Copyright = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  font-family: var(--font-families-gilroy);
  font-size: 14px;
  line-height: 21px;
  color: var(--colors-darkblue);
  opacity: 0.5;
`;
