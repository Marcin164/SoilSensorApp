import React from 'react'
import NoData from './NoData'

type Props = {
  className?: string
  columns: Array<any>
  data: Array<any>
}

const Table = ({ className, columns, data }: Props) => {
  if (!data || data.length === 0) {
    return <NoData />
  }

  const selectors = columns.map((column) => column.selector)

  const sortedData = data.sort((a, b) => {
    const aKey = Object.keys(a)[0]
    const bKey = Object.keys(b)[0]
    return selectors.indexOf(aKey) - selectors.indexOf(bKey)
  })

  return (
    <table className={`${className}`}>
      <thead>
        <tr className="text-left">
          {columns.map((column, index) => (
            <th key={index} className="font-medium pb-2">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((datum, rowId) => (
          <tr key={rowId} className="font-light">
            {Object.values(datum).map((val, cellId) => (
              <td key={cellId} className="pb-2">
                {val as string}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
