import type { Meta, StoryObj } from '@storybook/react'
import Badge from '../app/_components/Badges/Badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
}

export default meta
type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  render: () => <Badge text="Badge" />,
}
