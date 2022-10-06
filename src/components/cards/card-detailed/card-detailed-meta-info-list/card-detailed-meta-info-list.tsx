import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { switchProp } from 'helpers/lib/switch-prop';
import { getMediaquery } from 'helpers/css-mixins/mediaqueries';
import { breakpoints } from 'helpers/css-mixins/breakpoints';
import { AppMetaInfoProps } from '../types';

/**
 * ListOfItems
 */

interface ListOfItemsProps {
  items: AppMetaInfoProps[];
}

function ListOfItems({ items }: ListOfItemsProps) {
  return (
    <>
      {items.map(({ title, value, link }, index) => {
        const ValueComponent = link ? InfoListItemLink : InfoListItemValue;
        return (
          <InfoListItem key={index}>
            <InfoListItemName>{title}</InfoListItemName>
            <ValueComponent href={link}>{value}</ValueComponent>
          </InfoListItem>
        );
      })}
    </>
  );
}

/**
 * CardDetailedMetaInfoList
 */

export interface CardDetailedMetaInfoListProps {
  appDetails: AppMetaInfoProps[];
  opened: boolean;
}

export function CardDetailedMetaInfoList({ appDetails, opened }: CardDetailedMetaInfoListProps) {
  const [width, setWidth] = useState(0);

  const isMobile = width < breakpoints.tablet;
  const isTablet = width >= breakpoints.tablet && width < breakpoints.desktop;
  const isDesktop = width >= breakpoints.desktop;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderAppDetails = () => {
    if (isMobile) {
      return <ListOfItems items={appDetails.slice(0, 2)} />;
    } else if (isTablet) {
      return <ListOfItems items={appDetails.slice(0, 3)} />;
    } else if (isDesktop) {
      return <ListOfItems items={appDetails.slice(0, 4)} />;
    }
  };

  const renderAppDetailsExtra = () => {
    return <ListOfItems items={appDetails} />;
  };

  return <InfoList>{opened ? renderAppDetailsExtra() : renderAppDetails()}</InfoList>;
}

const InfoList = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  align-items: start;
  padding: 40px 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--colors-darkblue);
    opacity: 0.1;
  }

  ${getMediaquery('md')} {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
  }

  ${getMediaquery('lg')} {
    grid-template-columns: repeat(4, 1fr);
    padding: 40px 0;
  }
`;

interface InfoListItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  finalOrder?: 'last' | 'penultimate';
}

const InfoListItem = styled.div<InfoListItemProps>`
  display: flex;
  flex-direction: column;

  ${getMediaquery('md')} {
    ${switchProp('finalOrder', {
      last: css`
        order: 2;
      `,
      penultimate: css`
        order: 1;
      `,
    })}
  }
`;

const infoBase = css`
  font-family: var(--font-families-ubuntu);
  font-style: normal;
  font-weight: normal;
  color: var(--colors-darkblue);
`;

const InfoListItemName = styled.span`
  margin-bottom: 10px;
  ${infoBase};
  font-size: 12px;
  line-height: 14px;
  opacity: 0.5;

  ${getMediaquery('md')} {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 18px;
  }
`;

const infoValuesBase = css`
  ${infoBase};
  font-size: 14px;
  line-height: 16px;

  ${getMediaquery('md')} {
    font-size: 20px;
    line-height: 23px;
  }
`;

const InfoListItemValue = styled.span`
  ${infoValuesBase};
`;

const InfoListItemLink = styled.a`
  ${infoValuesBase};
  transition: color 0.3s linear, opacity 0.3s linear;

  &:hover {
    color: var(--colors-pink);
    opacity: 0.6;
  }

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
