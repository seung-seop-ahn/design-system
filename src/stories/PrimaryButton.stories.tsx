import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton } from '../components/PrimaryButton.tsx';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story: any) => (
        <div style={{width: '360px'}}>
          <Story />
        </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['dark', 'light', 'social', 'text'],
      description: 'theme'
    },
    isDisabled: {
      control: 'boolean',
      description: 'isDisabled',
      defaultValue: true
    },
    children: {
      control: 'text',
      description: 'children'
    },
    onClick: {
      action: 'clicked',
      description: 'onClick'
    },
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    theme: 'dark',
    isDisabled: false,
    children: 'Button',
    onClick: () => {},
  },
};

export const Light: Story = {
  args: {
    theme: 'light',
    isDisabled: false,
    children: 'Button',
    onClick: () => {},
  },
};

export const Social: Story = {
  args: {
    theme: 'social',
    isDisabled: false,
    children: 'Button',
    onClick: () => {},
  },
};

export const Text: Story = {
  args: {
    theme: 'text',
    isDisabled: false,
    children: 'Button',
    onClick: () => {},
  },
};

export const Disabled: Story = {
  args: {
    theme: 'text',
    isDisabled: true,
    children: 'Button',
    onClick: () => {},
  },
};