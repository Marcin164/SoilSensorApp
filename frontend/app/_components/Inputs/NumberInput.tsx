import React, { forwardRef } from 'react'

type Props = {
  type?: string
  label?: string
  className?: string
  onChange?: () => any
  name?: string
  info?: string
}

const NumberInput = forwardRef(({ type = 'text', label, className, onChange, name, info }: Props, ref: any) => {
  return (
    <div className={`my-2 ${className}`}>
      <label className="ml-2 block text-[#1C1C1C] font-medium">{label}</label>
      <div className="flex">
        <input
          ref={ref}
          name={name}
          onChange={onChange}
          type={type}
          className={`${info ? 'rounded-l-md' : 'rounded-md'} border-[1px] border-[#E5E5E5] h-[40px] w-full px-2 text-[#4A4A4A]`}
        />
        {info && (
          <div className="bg-[#E5E5E5] text-[#4A4A4A] rounded-r-md px-2 flex items-center">
            <span>{info}</span>
          </div>
        )}
      </div>
    </div>
  )
})

export default NumberInput
