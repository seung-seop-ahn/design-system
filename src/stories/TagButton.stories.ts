import type { Meta, StoryObj } from '@storybook/react';
import { TagButton } from '../components/TagButton.tsx';

const meta = {
  title: 'Buttons/TagButton',
  component: TagButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'children'
    },
    isChecked: {
      control: 'boolean',
      description: 'isChecked',
      defaultValue: false
    },
    onClick: {
      action: 'clicked',
      description: 'onClick'
    },
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    isChecked: false,
    onClick: () => {},
  },
};
