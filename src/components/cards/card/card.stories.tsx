import { Meta, Story } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import styled from '@emotion/styled';

import { Card, CardProps } from './card';

export default {
  component: Card,
  title: 'Components/Cards/Card',
  decorators: [withKnobs],
} as Meta;

const Placeholder = styled.div`
  width: 260px;
  height: 156px;
  border: 1px solid lightgrey;
`;

const CardStory: Story<CardProps> = (props: CardProps) => (
  <Card
    {...props}
    appName={text('title', 'Санкт-Петербург госуслуги')}
    appRating={number('appRating', 4.5, {
      range: true,
      min: 0,
      max: 5,
      step: 0.1,
    })}
    subtitle={
      <div>
        {text(
          'subtitle',
          'Описание, которая объединяет в себе возможности банковской, скидочной и бонусной карт, транспортного проездного, описани описание ... ',
        )}
      </div>
    }
  >
    <Placeholder />
  </Card>
);

export const Default = CardStory.bind({});
