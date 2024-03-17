import type { Meta, StoryObj } from '@storybook/react';
import { DefaultTextField } from '../components/DefaultTextField.tsx';

const meta = {
  title: 'TextFields/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    errorMessage: {
      control: 'text',
      description: 'errorMessage'
    },
    iconAlt: {
      control: 'text',
      description: 'iconAlt'
    },
    iconPath: {
      control: 'text',
      description: 'iconPath'
    },
    onIconClick: {
      action: 'clicked',
      description: 'onIconClick'
    },
    placeholder: {
      control: 'text',
      description: 'placeholder'
    },
    onChange: {
      action: 'changed',
      description: 'onChange'
    },
    id: {
      control: 'text',
      description: 'id',
      defaultValue: false
    },
    value: {
      control: 'text',
      description: 'value'
    },
    isError: {
      control: 'boolean',
      description: 'isError'
    }
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorMessage: 'error',
    iconAlt: 'icon',
    iconPath: '/vite.svg',
    onIconClick: () => {},
    placeholder: 'placeholder',
    onChange: () => {},
    id: 'email',
    value: 'value',
    isError: false
  },
};
