import React from 'react'

type Props = {}

const ProblemsCard = (props: Props) => {
  return (
    <div className="inline-block rounded-xl border border-[#B6B6B6] w-[175px] h-[100px] px-4 py-2">
      <div className="font-semibold text-[#1C1C1C]">Device 1</div>
      <div className="font-light text-[#1C1C1C]">Avocado</div>
      <div></div>
    </div>
  )
}

export default ProblemsCard
