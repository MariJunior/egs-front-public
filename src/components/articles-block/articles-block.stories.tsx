import { Meta, Story } from '@storybook/react';

import { ArticlesBlock, ArticlesBlockPropsInterface } from './articles-block';

import card from '../../assets/articles-images/card.png';
import family from '../../assets/articles-images/family.png';
import newYear from '../../assets/articles-images/new_year.png';
import family_2 from '../../assets/articles-images/family_2.png';
import government from '../../assets/articles-images/government.png';

export default {
  component: ArticlesBlock,
  title: 'Components/ArticlesBlock',
  args: {
    cards: [
      {
        title: 'Что изменилось в начислении пособий для безработных в 2020 году',
        subtitle: `Электронная трудовая книжка, справка о статусе
  предпенсионера и размере пенсии`,
        image: family,
        date: '5 декабря 2021',
        tag: 'discussed',
      },
      {
        title: 'Что изменилось в начислении пособий для безработных в 2020 году',
        subtitle: `Электронная трудовая книжка, справка о статусе
  предпенсионера и размере пенсии`,
        image: newYear,
        date: '4 декабря 2021',
        tag: 'discussed',
      },
      {
        title: 'Что изменилось в начислении пособий для безработных в 2020 году',
        subtitle: `Электронная трудовая книжка, справка о статусе
  предпенсионера и размере пенсии`,
        image: card,
        date: '2 декабря 2021',
        tag: 'discussed',
      },
      {
        title: 'Первая популярная карточка',
        subtitle: `Электронная трудовая книжка, справка о статусе
  предпенсионера и размере пенсии`,
        image: family_2,
        tag: 'popular',
        date: '3 декабря 2021',
      },
      {
        title: 'Вторая популярная популярная карточка',
        subtitle: `Электронная трудовая книжка, справка о статусе
  предпенсионера и размере пенсии`,
        image: government,
        tag: 'popular',
        date: '2 декабря 2021',
      },
      {
        title: 'Третья популярная популярная карточка',
        subtitle: `Электронная трудовая книжка, справка о статусе
  предпенсионера и размере пенсии`,
        image: card,
        tag: 'popular',
        date: '1 декабря 2021',
      },
      {
        title: 'Что изменилось в начислении пособий для безработных в 2020 году',
        subtitle: `Электронная трудовая книжка, справка о статусе
  предпенсионера и размере пенсии`,
        image: card,
        tag: 'significant',
        date: '1 декабря 2021',
      },
    ],
  },
} as Meta;

const ArticlesBlockStory: Story<ArticlesBlockPropsInterface> = (args: ArticlesBlockPropsInterface) => (
  <ArticlesBlock {...args} />
);

export const Default = ArticlesBlockStory.bind({});
