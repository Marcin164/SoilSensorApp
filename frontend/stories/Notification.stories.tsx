import type { Meta, StoryObj } from '@storybook/react'
import Notification from '../app/_components/Others/Notification'

const meta: Meta<typeof Notification> = {
  component: Notification,
}

export default meta
type Story = StoryObj<typeof Notification>

export const Primary: Story = {
  render: () => <Notification />,
}
