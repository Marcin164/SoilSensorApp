import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

type Props = {
  data: any[]
}

const Table = ({ data }: Props) => {
  if (data.length === 0 || !data) return null

  const columns = data.map((datum) => Object.keys(datum))[0]

  return (
    <table className="w-full">
      <TableHeader columns={columns} />
      <TableBody data={data} />
    </table>
  )
}

export default Table
