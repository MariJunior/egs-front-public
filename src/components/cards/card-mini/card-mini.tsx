import styled from '@emotion/styled';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import { If } from '../../shared/if';
import { Flex } from '../../flex';
import { Icon } from '../../icon';

import { AppCardMiniBasicProps } from '../types';

export interface CardMiniProps
  extends AppCardMiniBasicProps,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function CardMini({ appIcon, appName, appRating, ...props }: CardMiniProps) {
  return (
    <Wrapper direction="column" {...props}>
      <AppIcon icon={appIcon} alt="Иконка приложения" />
      <Title>{appName}</Title>
      <If condition={!!appRating}>
        <RatingWrapper>
          {appRating}
          <StyledRating
            name="rating-customized"
            defaultValue={appRating}
            precision={0.5}
            disabled={true}
            size="small"
            emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
            icon={<StarRoundedIcon fontSize="inherit" />}
          />
        </RatingWrapper>
      </If>
    </Wrapper>
  );
}

const Wrapper = styled(Flex)`
  padding: 10px 13px;
  width: 170px;
  min-height: 225px;
  border-radius: 13px;
  background-color: var(--colors-white);
  box-shadow: 0px 0px 30px #d8e8ff;
`;

const AppIcon = styled(Icon)`
  margin-bottom: 5px;
  width: 144px;
  height: 142px;
`;

const Title = styled.strong`
  font-family: var(--font-families-gilroy);
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  color: var(--colors-darkblue);
`;

const RatingWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  margin-top: auto;
  font-family: var(--font-families-gilroy);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: var(--colors-darkblue);
`;

const StyledRating = withStyles({
  root: {
    marginLeft: '5px',
  },
  sizeSmall: {
    fontSize: '13px',
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
