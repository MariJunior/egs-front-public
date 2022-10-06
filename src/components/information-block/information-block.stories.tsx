import { Meta, Story } from '@storybook/react';

import { InformationBlock, InformationBlockProps } from './information-block';

import shield from '../../assets/information-images/shield.png';
import robot from '../../assets/information-images/robot.png';

export default {
  component: InformationBlock,
  title: 'Components/information-block',
  args: {
    informationCards: [
      {
        title: 'Администрации Санкт-Петербурга',
        subtitle: 'Поддержка и развитие регионов',
        cardImage: shield,
        href: '#',
      },
      {
        title: 'Администрации Санкт-Петербурга',
        subtitle: 'Поддержка и развитие регионов',
        cardImage: robot,
        href: '#',
      },
    ],
  },
} as Meta;

const InformationBlockStory: Story<InformationBlockProps> = (args) => <InformationBlock {...args} />;

export const Default = InformationBlockStory.bind({});
