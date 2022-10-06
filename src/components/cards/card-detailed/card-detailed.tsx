import { useState } from 'react';
import styled from '@emotion/styled';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import { getFont, getMediaquery, ifProp } from '../../../helpers';

import { Flex } from '../../flex';
import { Icon } from '../../icon';
import { LinkSimple } from '../../link-simple';
import { MoreButton } from '../../more-button';
import { If } from '../../shared/if';

import { AppCardBasicProps } from '../types';

import { AppLinkProps, AppMetaInfoProps } from './types';
import { CardDetailedMetaInfoList } from './card-detailed-meta-info-list';

import { appLinkProperties } from './data';

export interface CardDetailedProps extends AppCardBasicProps {
  appSummary: string;
  appLinks: AppLinkProps[];
  appDetails: AppMetaInfoProps[];
}

export function CardDetailed({
  appIcon,
  appName,
  appRating,
  appSummary,
  appLinks,
  appDetails,
  ...props
}: CardDetailedProps) {
  const [isListOpened, setIsListOpened] = useState<boolean>(false);

  const toggleList = () => {
    setIsListOpened(!isListOpened);
  };

  const renderAppLinks = () => {
    return appLinks.map((item) => (
      <LinkSimple key={item.link} link={item.link}>
        {appLinkProperties[item.linkTypeName].icon}
        {item.linkText}
      </LinkSimple>
    ));
  };

  return (
    <Wrapper {...props}>
      <SummaryGrid>
        <AppIcon icon={appIcon} alt="Иконка приложения" />
        <Lead full={Boolean(appRating)}>
          <Title>{appName}</Title>
          <If condition={!!appRating}>
            <RatingWrapper>
              {appRating}
              <StyledRating
                name="rating-customized"
                defaultValue={appRating}
                precision={0.5}
                disabled={true}
                size="large"
                emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
                icon={<StarRoundedIcon fontSize="inherit" />}
              />
            </RatingWrapper>
          </If>
          <Summary>{appSummary}</Summary>
        </Lead>
        <AppLinks>{renderAppLinks()}</AppLinks>
      </SummaryGrid>

      <CardDetailedMetaInfoList opened={isListOpened} appDetails={appDetails} />

      <MoreButton contentOpened={isListOpened} onButtonClick={toggleList} />
    </Wrapper>
  );
}
const StyledRating = withStyles({
  root: {
    marginLeft: '20px',
  },
  iconFilled: {
    color: '#1B8EFF',
  },
  iconEmpty: {
    color: '#1B8EFF',
  },
  disabled: {
    opacity: '1 !important',
  },
})(Rating);

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: calc(var(--breakpoints-lg) - 40px);
`;

const SummaryGrid = styled.div`
  display: grid;
  row-gap: 20px;
  justify-items: center;
  margin-bottom: 80px;

  ${getMediaquery('md')} {
    grid-template-columns: 260px 1fr;
    grid-column-gap: 20px;
    justify-items: start;
  }

  ${getMediaquery('lg')} {
    grid-column-gap: 40px;
    grid-row-gap: 25px;
    justify-items: stretch;
  }
`;

const AppIcon = styled(Icon)`
  width: 280px;
  height: 280px;

  ${getMediaquery('sm')} {
    width: 335px;
    height: 335px;
  }

  ${getMediaquery('md')} {
    width: 260px;
    height: 260px;
  }

  ${getMediaquery('lg')} {
    grid-area: 1 / 1 / 3 / 2;
  }
`;

interface LeadProps {
  full?: boolean;
}

const Lead = styled(Flex)<LeadProps>`
  display: grid;
  justify-items: center;

  ${getMediaquery('md')} {
    align-self: start;
    justify-items: start;
  }

  ${getMediaquery('lg')} {
    align-self: end;
    grid-area: 1 / 2 / 2 / 3;
    grid-template-columns: ${ifProp('full', '440px 1fr', '1fr')};
  }
`;

const Title = styled.h2`
  ${getFont('titleMd')};
  margin-top: 0;
  margin-bottom: 10px;

  ${getMediaquery('md')} {
    max-width: 650px;
    font-size: 30px;
    line-height: 36px;
  }

  ${getMediaquery('lg')} {
    max-width: 855px;
    font-size: 40px;
    line-height: 48px;
  }
`;

const RatingWrapper = styled.div`
  visibility: hidden;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${getFont('titleMd')};

  ${getMediaquery('md')} {
    font-size: 30px;
    line-height: 36px;
  }

  ${getMediaquery('lg')} {
    justify-self: end;
    font-size: 40px;
    line-height: 48px;
  }
`;

const Summary = styled.p`
  margin: 0;
  ${getFont('medium')};
  text-align: center;
  opacity: 0.5;

  ${getMediaquery('md')} {
    font-size: 18px;
    line-height: 24px;
    text-align: left;
  }

  ${getMediaquery('lg')} {
    grid-area: 2 / 1 / 3 / 3;
    font-size: 20px;
    line-height: 26px;
  }
`;

const AppLinks = styled.div`
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  justify-items: center;
  width: 100%;
  padding: 0 20px;

  ${getMediaquery('sm')} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    justify-items: start;
  }

  ${getMediaquery('md')} {
    grid-area: 2 / 1 / 3 / 3;
    justify-self: stretch;
    grid-template-columns: repeat(3, 1fr);
  }

  ${getMediaquery('lg')} {
    grid-area: 2 / 2 / 3 / 3;
    justify-self: start;
    align-self: start;
    display: flex;
    align-items: center;
    grid-column-gap: 0;
    width: auto;
    padding: 0;

    a:not(:last-of-type) {
      margin-right: 25px;
    }
  }
`;
