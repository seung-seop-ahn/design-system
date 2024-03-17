import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from '../components/NavigationBar.tsx';

const meta = {
  title: 'Navigation/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{width: '360px'}}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isDark: {
      control: 'boolean',
      description: 'isDark',
      defaultValue: false
    },
    showBackButton: {
      control: 'boolean',
      description: 'showBackButton',
      defaultValue: false
    },
    showCloseButton: {
      control: 'boolean',
      description: 'showCloseButton',
      defaultValue: false
    },
    showTitle: {
      control: 'boolean',
      description: 'showTitle',
      defaultValue: false
    },
    title: {
      control: 'text',
      description: 'title',
      defaultValue: ''
    },
    onBackButtonClick: {
      action: 'clicked',
      description: 'backButtonClick',
    },
    onCloseButtonClick: {
      action: 'clicked',
      description: 'closeButtonClick',
    },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDark: false,
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: 'Title',
    onBackButtonClick: () => {},
    onCloseButtonClick: () => {},
  },
};
