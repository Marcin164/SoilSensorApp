import React, { forwardRef } from 'react'

type Props = {
  type?: 'number' | 'phone'
  label?: string
  className?: string
  onChange?: () => any
  name?: string
  info?: string
}

const NumberInput = forwardRef(({ type = 'number', label, className, onChange, name, info }: Props, ref: any) => {
  return (
    <div className={`my-2 ${className}`}>
      <label className="ml-2 block text-almostBlack font-medium">{label}</label>
      <div className="flex">
        <input
          ref={ref}
          name={name}
          onChange={onChange}
          type={type}
          className={`${info ? 'rounded-l-md' : 'rounded-md'} border-[1px] border-lightgray h-[40px] w-full px-2 text-darkGray`}
        />
        {info && (
          <div className="bg-lightGray text-darkGray rounded-r-md px-2 flex items-center">
            <span>{info}</span>
          </div>
        )}
      </div>
    </div>
  )
})

export default NumberInput
