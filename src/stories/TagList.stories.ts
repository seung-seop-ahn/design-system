import type { Meta, StoryObj } from '@storybook/react';
import { TagList } from '../components/TagList.tsx';

const meta = {
  title: 'List/TagList',
  component: TagList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tagList: {
      control: 'array',
      description: 'tagList',
      defaultValue: ['tag1', 'tag2', 'tag3']
    },
    onTagClick: {
      action: 'clicked',
      description: 'onClick'
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ['tag1', 'tag2', 'tag3'],
    onTagClick: () => {},
  },
};
