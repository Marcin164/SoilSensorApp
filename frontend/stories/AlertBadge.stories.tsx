import type { Meta, StoryObj } from '@storybook/react'
import AlertBadge from '../app/_components/Badges/AlertBadge'

const meta: Meta<typeof AlertBadge> = {
  component: AlertBadge,
}

export default meta
type Story = StoryObj<typeof AlertBadge>

export const Info: Story = {
  render: () => <AlertBadge text="Badge" type="info" />,
}

export const Warning: Story = {
  render: () => <AlertBadge text="Badge" type="warning" />,
}

export const Danger: Story = {
  render: () => <AlertBadge text="Badge" type="danger" />,
}

export const Success: Story = {
  render: () => <AlertBadge text="Badge" type="success" />,
}
