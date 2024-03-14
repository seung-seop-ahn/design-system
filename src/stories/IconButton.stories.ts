import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../components/IconButton.tsx';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: {
      control: 'text',
      description: 'alt',
      defaultValue: 'icon',
    },
    iconPath: {
      control: 'text',
      description: 'iconPath',
      defaultValue: '',
    },
    onClick: { action: 'clicked', description: 'onClick'},
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

import icon from '../assets/react.svg';

export const Default: Story = {
  args: {
    alt: 'icon',
    // public
    // iconPath: '/vite.svg',
    // assets
    iconPath: icon,
    // storage
    // iconPath: '{{url}}'
    onClick: () => {},
  },
};

