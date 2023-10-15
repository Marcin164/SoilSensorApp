import type { Meta, StoryObj } from '@storybook/react'
import AccountBadge from '../app/_components/Badges/AccountBadge'

const meta: Meta<typeof AccountBadge> = {
  component: AccountBadge,
}

export default meta
type Story = StoryObj<typeof AccountBadge>

export const Primary: Story = {
  render: () => <AccountBadge name="name" surname="surname" />,
}
