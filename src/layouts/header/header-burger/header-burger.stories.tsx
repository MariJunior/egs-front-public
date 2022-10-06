import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { HeaderBurger, HeaderBurgerProps } from './header-burger';

export default {
  component: HeaderBurger,
  title: 'Layouts/Header/HeaderBurger',
  decorators: [withKnobs],
} as Meta;

const HeaderBurgerStory: Story<HeaderBurgerProps> = (props: HeaderBurgerProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return <HeaderBurger {...props} opened={isOpened} onBurgerClick={() => setIsOpened(!isOpened)} />;
};

export const Default = HeaderBurgerStory.bind({});
