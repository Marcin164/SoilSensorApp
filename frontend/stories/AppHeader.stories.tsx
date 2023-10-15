import type { Meta, StoryObj } from '@storybook/react'
import AppHeader from '../app/_components/Headers/AppHeader'

const meta: Meta<typeof AppHeader> = {
  component: AppHeader,
}

export default meta
type Story = StoryObj<typeof AppHeader>

export const Primary: Story = {
  render: () => <AppHeader />,
}
