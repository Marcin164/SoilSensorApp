import React from 'react'

type Props = {}

const ProblemsCard = (props: Props) => {
  return (
    <div className="inline-block rounded-xl border border-mediumGray w-[175px] h-[100px] px-4 py-2">
      <div className="font-semibold text-almostBlack">Device 1</div>
      <div className="font-light text-almostBlack">Avocado</div>
      <div></div>
    </div>
  )
}

export default ProblemsCard
