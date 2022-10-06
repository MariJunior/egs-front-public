import styled from '@emotion/styled';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import { getShadow } from '../../../helpers';
import { getFont } from '../../../helpers';

import { If } from '../../shared/if';
import { Flex } from '../../flex';
import { Button } from '../../button';

import { AppCardBasicProps } from '../types';

export interface CardProps extends AppCardBasicProps {
  instructionLink: string;
  onShowMoreClick: () => void;
  subtitle: React.ReactNode;
}

export function Card({
  appIcon,
  appName,
  appRating,
  subtitle,
  children,
  onShowMoreClick,
}: React.PropsWithChildren<CardProps>) {
  return (
    <Wrapper>
      <Icon src={appIcon} />
      <Info direction="column">
        <Title>{appName}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Info>
      <div>{children}</div>
      <Flex direction="column" align="flex-end">
        <If condition={!!appRating}>
          <StyledRating
            name="rating-customized"
            defaultValue={appRating}
            precision={0.5}
            disabled={true}
            size="small"
            emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
            icon={<StarRoundedIcon fontSize="inherit" />}
          />
        </If>
        <InstructionLink>Инструкция по установке</InstructionLink>
        <Button secondary onClick={onShowMoreClick}>
          Подробнее
        </Button>
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${getShadow('medium')};
  border-radius: 20px;
  padding: 12px;
  display: grid;
  grid-template-columns: 174px 345px 263px 1fr;
`;

const Icon = styled.img`
  width: 158px;
  height: 156px;
`;

const Info = styled(Flex)`
  max-width: 301px;
`;

const Title = styled.div`
  ${getFont('title')};
  margin-bottom: 10px;
  max-width: 210px;
`;

const Subtitle = styled.div`
  ${getFont('medium')};
  opacity: 0.5;
`;

const InstructionLink = styled.div`
  ${getFont('small')};
  margin-bottom: 20px;
  text-decoration: underline;
  color: var(--colors-darkblue);
  opacity: 0.5;
  cursor: pointer;
`;

const StyledRating = withStyles({
  root: {
    marginBottom: 'auto',
  },
  sizeSmall: {
    fontSize: '20px',
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
