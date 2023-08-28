import React from 'react'

type Props = {
  columns: any
}

const TableHeader = ({ columns }: Props) => {
  return (
    <thead>
      <tr className="text-[#727272] border-b border-[#E5E5E5]">
        {columns.map((column: string) => (
          <th className="font-light text-left pl-2">{column}</th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
