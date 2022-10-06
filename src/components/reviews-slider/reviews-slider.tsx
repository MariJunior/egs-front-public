import type { UIEvent } from 'react';
import { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { ReviewCard } from '../review-card';
import { ReviewCardBasicProps } from '../review-card/types';
import ArrowLeft from '../../helpers/icons/arrow-left.svg';
import ArrowRight from '../../helpers/icons/arrow-right.svg';

import { ifNotProp, getMediaquery } from '../../helpers';

export interface ReviewsSliderProps {
  reviews: ReviewCardBasicProps[];
  sliderId: string;
}

export function ReviewsSlider({ sliderId, reviews }: ReviewsSliderProps) {
  const [isFadedLeft, setFadedLeft] = useState(true);
  const [isFadedRight, setFadedRight] = useState(false);
  const [isShort, setShort] = useState(false);

  useEffect(() => {
    const imageContainer = document.querySelector(`#${sliderId}`);

    if (imageContainer && imageContainer.scrollWidth === imageContainer.clientWidth) {
      setFadedLeft(true);
      setFadedRight(true);
      setShort(true);
    }
  }, [sliderId]);

  const onSliderBtnClick = (direction: 1 | -1) => {
    const imageContainer = document.querySelector(`#${sliderId}`);

    if (!imageContainer) return;

    const far = imageContainer.clientWidth * direction;
    const pos = far && imageContainer.scrollLeft + far;

    imageContainer.scroll({
      left: pos,
      behavior: 'smooth',
    });
  };

  const onSliderScroll = (evt: UIEvent<HTMLElement>) => {
    const target = evt.currentTarget;

    if (target.scrollLeft === 0) {
      setFadedLeft(true);
      setFadedRight(false);
    } else if (target.scrollWidth - target.clientWidth === target.scrollLeft) {
      setFadedLeft(false);
      setFadedRight(true);
    } else {
      setFadedLeft(false);
      setFadedRight(false);
    }
  };

  const renderReviews = () => {
    return reviews.map((review: ReviewCardBasicProps) => (
      <SliderItem
        key={review.headline + review.author}
        headline={review.headline}
        rating={review.rating}
        review={review.review}
        author={review.author}
        date={review.date}
      />
    ));
  };

  return (
    <Wrapper short={isShort}>
      <SliderLeftArrow
        type="button"
        onClick={() => onSliderBtnClick(-1)}
        disabled={isFadedLeft}
        aria-label="Назад"
        hidden={isShort}
      />

      <SliderBar id={sliderId} onScroll={onSliderScroll}>
        {renderReviews()}
      </SliderBar>

      <SliderRightArrow
        type="button"
        onClick={() => onSliderBtnClick(1)}
        disabled={isFadedRight}
        aria-label="Далее"
        hidden={isShort}
      />
    </Wrapper>
  );
}

interface WrapperProps {
  short?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  ${getMediaquery('lg')} {
    ${ifNotProp(
      'short',
      css`
        position: relative;

        &::before,
        &::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 1;
        }

        &::before {
          width: 300px;
          left: 0;
          background-image: linear-gradient(90deg, #ffffff 22.4%, rgba(255, 255, 255, 0) 100%);
        }

        &::after {
          width: 265px;
          right: 0;
          background-image: linear-gradient(270deg, #ffffff 22.4%, rgba(255, 255, 255, 0) 100%);
        }
      `,
    )};
  }
`;

const arrow = css`
  display: none;

  ${getMediaquery('lg')} {
    display: block;
    position: absolute;
    top: 50%;
    width: 70px;
    height: 70px;
    padding: 0;
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    border: 0;
    transform: translateY(-50%);
    outline: none;
    z-index: 2;
  }
`;

const SliderLeftArrow = styled.button`
  ${ifNotProp(
    'hidden',
    css`
      ${arrow};
      left: 40px;
      background-image: url(${ArrowLeft});
    `,
  )};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};

  ${ifNotProp(
    'disabled',
    css`
      &:hover {
        opacity: 0.6;
      }

      &:focus {
        filter: drop-shadow(0px 0px 2px var(--colors-shadow));
      }
    `,
  )};
`;

const SliderRightArrow = styled.button`
  ${ifNotProp(
    'hidden',
    css`
      ${arrow};
      right: 40px;
      background-image: url(${ArrowRight});
    `,
  )};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};

  ${ifNotProp(
    'disabled',
    css`
      &:hover {
        opacity: 0.6;
      }

      &:focus {
        filter: drop-shadow(0px 0px 2px var(--colors-shadow));
      }
    `,
  )};
`;

const SliderBar = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  cursor: ew-resize;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const SliderItem = styled(ReviewCard)`
  flex-shrink: 0;
  margin: 30px 0 30px 20px;

  ${getMediaquery('md')} {
    margin: 30px 20px;
  }
`;
