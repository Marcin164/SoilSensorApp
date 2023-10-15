import React from 'react'

type Props = {
  columns: any
}

const TableHeader = ({ columns }: Props) => {
  return (
    <thead>
      <tr className="text-mediumGray border-b border-lightGray">
        {columns.map((column: string) => (
          <th className="font-light text-left pl-2">{column}</th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
