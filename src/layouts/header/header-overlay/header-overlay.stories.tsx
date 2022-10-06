import { Meta, Story } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { HeaderOverlay, HeaderOverlayProps } from './header-overlay';

export default {
  component: HeaderOverlay,
  title: 'Layouts/Header/HeaderOverlay',
  decorators: [withKnobs],
} as Meta;

const TestOverlayChildren = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '50px',
      }}
    >
      <h2>Overlay content will be here!</h2>
      <p>Some additive content</p>
    </div>
  );
};

const HeaderOverlayStory: Story<HeaderOverlayProps> = (props: HeaderOverlayProps) => (
  <HeaderOverlay {...props} opened={boolean('opened', false)}>
    <TestOverlayChildren />
  </HeaderOverlay>
);

export const Default = HeaderOverlayStory.bind({});
