import type { Meta, StoryObj } from '@storybook/react';
import { CategoryButton } from '../components/CategoryButton.tsx';

const meta = {
  title: 'Buttons/CategoryButton',
  component: CategoryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconAlt: {
      control: 'text',
      description: 'alt',
      defaultValue: 'icon',
    },
    iconPath: {
      control: 'text',
      description: 'iconPath',
      defaultValue: '',
    },
    text: {
      control: 'text',
      description: 'text',
    },
    onClick: {
      action: 'clicked',
      description: 'onClick'
    },
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

import icon from '../assets/react.svg';

export const Default: Story = {
  args: {
    iconAlt: 'icon',
    iconPath: icon,
    text: 'Category',
    onClick: () => {},
  },
};

