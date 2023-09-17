import React from 'react'

type Props = {
  data: any[]
}

const TableBody = ({ data }: Props) => {
  return (
    <tbody>
      {data.map((datum) => (
        <tr className="mt-2">
          {Object.values(datum).map((value: any) => (
            <td className="pl-2">{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
