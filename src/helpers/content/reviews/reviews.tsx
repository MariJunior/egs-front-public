import styled from '@emotion/styled';

import { getFont } from '../../styles/mixins/fonts';
import { getMediaquery } from '../../styles/mixins/mediaqueries';

import { LinkButtonRounded } from '../../components/link-button/link-button-rounded';

export interface ReviewsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviewsCount: number;
  reviewsSlider: React.ReactNode;
}

export function Reviews({ reviewsCount, reviewsSlider, ...props }: ReviewsProps) {
  return (
    <Wrapper {...props}>
      <Head>
        <Title>Оценки и отзывы</Title>
        <ReviewsCounter>{reviewsCount} отзывов</ReviewsCounter>
        <ReviewLink
          link="/"
          platform="text"
          length="regular"
          colors="light"
          text="Оставить свой отзыв"
          weight="normal"
          fontSize="14px"
          lineHeight="17px"
        />
      </Head>

      <Slider>{reviewsSlider}</Slider>

      <MoreLink link="/" platform="text" length="regular" colors="white" text="Показать все отзывы" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-row-gap: 10px;
`;

const Head = styled.div`
  display: grid;
  grid-template-columns: 205px 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;

  ${getMediaquery('md')} {
    grid-template-columns: 250px 1fr 185px;
    grid-column-gap: 40px;
    align-items: center;
    margin-bottom: 40px;
    max-width: calc(var(--breakpoints-lg) - 40px);
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  margin: 0;
  ${getFont('titleMd')};

  ${getMediaquery('md')} {
    font-size: 30px;
    line-height: 36px;
  }
`;

const ReviewsCounter = styled.b`
  justify-self: end;
  font-family: var(--font-families-ubuntu);
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: var(--colors-darkblue);
  opacity: 0.5;

  ${getMediaquery('md')} {
    justify-self: start;
    font-size: 30px;
    line-height: 39px;
  }
`;

const ReviewLink = styled(LinkButtonRounded)`
  grid-area: 2 / 1 / 3 / 3;

  ${getMediaquery('md')} {
    grid-area: 1 / 3 / 2 / 4;
  }
`;

const Slider = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

const MoreLink = styled(LinkButtonRounded)`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.16px;

  ${getMediaquery('md')} {
    max-width: 225px;
  }
`;
