import type { Meta, StoryObj } from '@storybook/react'
import PageHeader from '../app/_components/Headers/PageHeader'

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
}

export default meta
type Story = StoryObj<typeof PageHeader>

export const Primary: Story = {
  render: () => <PageHeader toggle={() => {}} name="name" surname="surname" />,
}

export const Loading: Story = {
  render: () => <PageHeader toggle={() => {}} />,
}
