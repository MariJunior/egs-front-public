import { useState, useEffect, useCallback, FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { ifProp } from '../../helpers/lib/if-prop';
import { getMediaquery } from '../../helpers';

import logoImage from '../../../public/assets/icons/logo.svg';
import { Search } from '../../components/fields/search';
import { SwitchLanguage } from '../../components/fields/switch-language';
import { Authorization } from '../../helpers/content/authorization';

import { CommonIconLinkProps } from '../../types';
import { PageDataProps } from './types';
import { HeaderOverlay } from './header-overlay';
import { HeaderBurger } from './header-burger';
import { LinkButtonRounded } from 'components';
export interface HeaderProps {
  authGosuslugi?: string;
  authRecoveryLink?: string;
  authThirdPartyLinks?: CommonIconLinkProps[];
  currentPage: string;
  icon: string;
  pages: PageDataProps[];
}

export const Header: FC<HeaderProps> = ({ icon, pages, authRecoveryLink, authGosuslugi, authThirdPartyLinks }) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [isCurrentPage, setIsCurrentPage] = useState<string>('');
  const router = useRouter();

  const onBurgerBtnClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const onWrapperClick = (evt: React.MouseEvent<HTMLElement>) => {
    const target = evt.target;
    if ((target as HTMLDivElement).id === 'header-wrapper') {
      setIsMenuOpened(false);
    }
  };

  const handleEscKeyUp = useCallback(
    (evt: KeyboardEvent) => {
      const isEsc = evt.key === 'Escape';

      if (!isEsc) return;

      evt.stopPropagation();
      evt.preventDefault();
      setIsMenuOpened(false);
    },
    [setIsMenuOpened],
  );

  useEffect(() => {
    window.addEventListener('keyup', handleEscKeyUp, false);

    return () => {
      window.removeEventListener('keyup', handleEscKeyUp, false);
    };
  }, [handleEscKeyUp]);

  const isLinkActive = (pathname: string) => {
    if (router.pathname == pathname) {
      return true;
    } else return;
  };
  const currentPage = () => {
    switch (router.pathname) {
      case '/':
        setIsCurrentPage('Главная');
        break;
      case '/catalog-page':
        setIsCurrentPage('Приложения');
        break;
      case '/news':
        setIsCurrentPage('Новости');
        break;
      default:
        setIsCurrentPage('');
        break;
    }
  };
  useEffect(() => {
    currentPage();
  }, [isCurrentPage]);
  const renderPagesList = () => {
    return pages.map((page) => (
      <PagesListItem key={page.name}>
        <PagesListLink href={page.link} active={isLinkActive(page.link!)}>
          {page.name}
        </PagesListLink>
      </PagesListItem>
    ));
  };
  const catalogPageLink = '/catalog-page';
  return (
    <PageHeader>
      <Logo href="/">
        <Image src={logoImage} alt="Logo" />
      </Logo>

      <CatalogLink link={catalogPageLink} platform="text" length="regular" colors="white" text="Каталог сервисов" />

      <HeaderOverlay id="header-wrapper" opened={isMenuOpened} onClick={onWrapperClick}>
        <WrapperContent opened={isMenuOpened}>
          <CatalogLinkMobile
            link={catalogPageLink}
            platform="text"
            length="regular"
            colors="white"
            text="Каталог сервисов"
          >
            {isCurrentPage}
          </CatalogLinkMobile>

          <MainNav>
            <HeaderSearch />

            <PagesList>{renderPagesList()}</PagesList>

            <HeadLangSwitcher name="header-language-switch" secondary />
            <AuthBtnWrap>
              <AuthBlock
                formId="auth-form"
                recoveryLink={authRecoveryLink}
                gosuslugiAuth={authGosuslugi}
                thirdPartyLinks={authThirdPartyLinks}
              />
            </AuthBtnWrap>
          </MainNav>
        </WrapperContent>
        <BurgerBtn opened={isMenuOpened} onBurgerClick={onBurgerBtnClick} />
      </HeaderOverlay>
    </PageHeader>
  );
};

const PageHeader = styled.header`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 10px 15px;

  ${getMediaquery('lg')} {
    padding: 20px 30px;
  }
`;

const Logo = styled.a`
  width: 144px;
  height: 49px;
  display: flex;
  align-items: center;
  max-width: 170px;
  margin-right: 20px;
  ${getMediaquery('lg')} {
    margin-right: 142px;
  }
`;

const CatalogLink = styled(LinkButtonRounded)`
  display: inline-block;
  margin-right: auto;
  padding: 15px 23px;
  font-family: var(--font-families-gilroy);
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: var(--colors-blue);
  border-radius: 100px;
  background-color: var(--colors-white);
  transition: all 0.25s ease;
  ${getMediaquery('lg')} {
    flex-shrink: 0;
    margin-right: 62px;
    border: 2px solid var(--colors-blue);
    background-color: transparent;
  }
`;

interface WrapperContentProps {
  opened?: boolean;
}

const WrapperContent = styled.div<WrapperContentProps>`
  display: ${ifProp('opened', 'flex', 'none')};
  flex-direction: column;
  height: 100%;

  ${getMediaquery('lg')} {
    display: flex;
    flex-direction: row;
    height: auto;
  }
`;

const BurgerBtn = styled(HeaderBurger)`
  position: ${ifProp('opened', 'absolute', 'static')};
  top: 25px;
  right: 25px;

  ${getMediaquery('lg')} {
    display: none;
  }
`;

const CatalogLinkMobile = styled(CatalogLink)`
  margin-bottom: 35px;
  background-color: var(--colors-blue);
  color: var(--colors-white);

  ${getMediaquery('lg')} {
    display: none;
  }
`;

const MainNav = styled.nav`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  ${getMediaquery('sm')} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 40px 1fr 45px;
  }

  ${getMediaquery('lg')} {
    display: flex;
    align-items: center;
    grid-column-gap: 0;
    grid-row-gap: 0;
  }
`;

const HeaderSearch = styled(Search)`
  ${getMediaquery('sm')} {
    grid-area: 1 / 1 / 2 / 3;
  }

  ${getMediaquery('lg')} {
    flex-grow: 1;
    max-width: 540px;
  }
`;

const PagesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  ${getMediaquery('sm')} {
    grid-area: 2 / 1 / 3 / 3;
  }

  ${getMediaquery('lg')} {
    order: -1;
    display: flex;
    align-items: center;
    margin-right: 130px;
  }
`;

const PagesListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 40px;
  }
`;

interface PagesListLinkProps {
  active?: boolean;
}

const PagesListLink = styled.a<PagesListLinkProps>`
  display: inline-block;
  padding: 13px 25px;
  font-family: var(--font-families-gilroy);
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  border-radius: 20px;

  ${ifProp(
    'active',
    css`
      color: var(--colors-white);
      background-color: var(--colors-blue);
    `,
    css`
      color: var(--colors-blue);
      background-color: transparent;
    `,
  )}

  ${getMediaquery('lg')} {
    padding: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    border-radius: 0;
    background-color: transparent;

    ${ifProp(
      'active',
      css`
        color: var(--colors-darkblue);
      `,
      css`
        color: var(--colors-blue);
      `,
    )}
  }
`;

const HeadLangSwitcher = styled(SwitchLanguage)`
  align-self: center;

  ${getMediaquery('lg')} {
    display: none;
  }
`;

const AuthBtnWrap = styled.div`
  ${getMediaquery('lg')} {
    margin-left: auto;
  }
`;

const AuthBlock = styled(Authorization)`
  left: -65px;

  ${getMediaquery('md')} {
    top: 50%;
    left: 50%;
    transform: translate(calc(-50% - 65px / 2), -50%);
  }
`;
