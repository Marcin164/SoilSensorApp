import type { Meta, StoryObj } from '@storybook/react'
import Header from '../app/_components/Headers/Header'

const meta: Meta<typeof Header> = {
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

export const Primary: Story = {
  render: () => <Header text="Header" />,
}

export const ClassName: Story = {
  render: () => <Header text="Header" className="text-[#FF00FF]" />,
}
