import type { Meta, StoryObj } from '@storybook/react'
import Table from '../app/_components/Table/Table'

const meta: Meta<typeof Table> = {
  component: Table,
}

export default meta
type Story = StoryObj<typeof Table>

export const Primary: Story = {
  render: () => <Table data={[]} />,
}
