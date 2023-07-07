import React from 'react'
import Table from '../Table/Table'
import WidgetHeader from '../Headers/WidgetHeader'

type Props = {
  title?: string
  columns: Array<any>
  data: Array<any>
}

const DataTableWidget = ({ title, columns, data }: Props) => {
  return (
    <div className="bg-[#FFFFFF] shadow-xl rounded mx-2 pt-2 mb-3">
      <WidgetHeader title={title} />
      <Table columns={columns} data={data} className="w-[260px] mt-2 mx-[20px]" />
    </div>
  )
}

export default DataTableWidget
