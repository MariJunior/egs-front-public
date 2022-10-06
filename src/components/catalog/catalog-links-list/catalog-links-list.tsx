import { FC } from 'react';
import styled from '@emotion/styled';

import { fontColors, getMediaquery, getFont } from '../../../helpers';
import { CatalogLinkProps } from '../../../../pages/catalog-page';

export interface TabletLinksProps {
  links: CatalogLinkProps[];
  mobile: boolean;
}
export const CatalogLinksList: FC<TabletLinksProps> = ({ links, mobile }) => {
  const handleHomePageLinktoHostname = (link: string) => {
    const url = new URL(link);
    return url.hostname;
  };

  const renderLinksList = () => {
    if (mobile) {
      return links.map((item, index) => (
        //Broken верстка with integrated data
        // <Item key={index}>
        //   {index !== 0 ? <ImageWrapper href={item.Link}>{appLinkProperties[item.__typename].icon}</ImageWrapper> : null}
        //   <Link href={item.href}>{handleHomePageLinktoHostname(item.Link)}</Link>
        // </Item>

        //What's need change
        <Item key={index}>
          {/*{index !== 0 ? (*/}
          {/*  <ImageWrapper href={item.href}>*/}
          {/*    <Image className="catalog-links_image" src={item.icon} alt={item.title} />*/}
          {/*  </ImageWrapper>*/}
          {/*) : null}*/}
          {/*<Link href={item.href}>{item.title}</Link>*/}
        </Item>
      ));
    } else {
      return links.map((item, index) => (
        //Broken верстка with integrated data
        //<ImageComponent> {appLinkProperties[item.__typename].icon}</ImageComponent>
        //<Link href={item.href}>{handleHomePageLinktoHostname(item.Link)}</Link>

        //What's need to change
        <Item key={index}>
          {/*<ImageComponent>*/}
          {/*  <Image className="catalog-links_image" src={item.icon} alt={item.title} />*/}
          {/*</ImageComponent>*/}

          {/*<Link href={item.href}>{item.title}</Link>*/}
        </Item>
      ));
    }
  };

  return <>{mobile ? <MobileList>{renderLinksList()}</MobileList> : <List>{renderLinksList()}</List>}</>;
};
const blueIconFilter = 'invert(48%) sepia(100%) saturate(2729%) hue-rotate(191deg) brightness(98%) contrast(107%)';
const List = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  ${getMediaquery('sm')} {
    display: none;
  }
  ${getMediaquery('md')} {
    display: flex;
  }
`;
const MobileList = styled.ul`
  padding: 0;
  margin: 0;
  ${getMediaquery('sm')} {
    display: flex;
  }
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 0 13px 7px 0;
  ${getMediaquery('sm')} {
    margin: 0 10px 0 0;
    max-width: 30px;
    :nth-of-type(1) {
      flex-basis: 100%;
      max-width: 100%;
    }
    :nth-last-of-type(1) {
      margin-right: 0;
    }
  }
  ${getMediaquery('md')} {
    max-width: 100%;
    :nth-of-type(1) {
      flex-basis: 0;
    }
    margin: 0 13px 7px 0;
  }
`;
const ImageComponent = styled.div`
  .catalog-links_image {
    filter: ${blueIconFilter};
  }

  ${getMediaquery('sm')} {
    width: 16px;
    height: 20px;
  }
  ${getMediaquery('md')} {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
`;

const ImageWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #1b8eff;
  border-radius: 5px;
  cursor: pointer;

  .catalog-links_image {
    filter: ${blueIconFilter};
  }
`;
const Link = styled.a`
  ${getFont('medium')}
  color: ${fontColors.dodgerBlue};
  line-height: 18px;
  text-decoration: none;

  ${getMediaquery('sm')} {
    :nth-child(1) {
      display: flex;
      width: 100%;
      flex: 1;
      background: #1b8eff;
      color: white;
      padding: 10px 10px 10px 10px;
      border-radius: 10px;
      justify-content: center;
    }
    display: none;
  }
  ${getMediaquery('md')} {
    display: block;
  }
`;
