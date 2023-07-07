import React, { InputHTMLAttributes, forwardRef } from 'react'
import { ErrorMessage } from '@hookform/error-message'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  type?: string
  onChange?: any
  onBlur?: any
  errors?: Object
  className?: string
}

const Input = forwardRef(
  ({ label, name, type = 'text', onChange, onBlur, errors, className }: Props, ref: any) => {
    return (
      <div data-cy="input-wrapper" className={`${className} px-2 mt-[20px] bg-transparent`}>
        {label && (
          <label data-cy="input-label" className="text-[14px] text-secondary" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          data-cy="input"
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          type={type}
          className="block font-medium w-full border-b border-b-[#B6B6B6] text-[14px] text-[#2B2B2B] bg-transparent"
        />
        <span data-cy="input-error">
          <ErrorMessage name={name} errors={errors} />
        </span>
      </div>
    )
  }
)

export default Input
