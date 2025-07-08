'use client'

import React, { useState } from 'react'

interface InputProps {
  name: string
  label: string
  type?:
    | 'text'
    | 'number'
    | 'email'
    | 'tel'
    | 'textarea'
    | 'select'
    | 'multiselect'
  options?: { label: string; value: string }[]
  required?: boolean
  placeholder?: string
}

export default function Input({
  name,
  label,
  type = 'text',
  options = [],
  required = false,
  placeholder = '',
}: InputProps) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')

  const isActive = focused || value !== ''

  const inputClass =
    'peer w-full rounded-md text-[20px] border border-lightGray bg-lightGray px-5 py-4 text-white placeholder-transparent focus:border-primary focus:outline-none flex items-center'

  const labelClass = `absolute left-5 transition-all duration-200 ease-in-out pointer-events-none
    ${isActive ? '-top-7 !left-0 text-sm text-primary' : 'top-5 text-base text-white/40 text-[20px]'}`

  const commonProps = {
    id: name,
    name,
    required,
    placeholder: ' ',
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e: React.ChangeEvent<any>) => setValue(e.target.value),
  }

  if (type === 'textarea') {
    return (
      <div className="relative w-full">
        <textarea
          {...commonProps}
          className={`${inputClass} h-40 resize-none`}
        />
        <label htmlFor={name} className={labelClass}>
          {label} {required && '*'}
        </label>
      </div>
    )
  }

  if (type === 'select' || type === 'multiselect') {
    return (
      <div className="relative w-full">
        <select
          {...commonProps}
          multiple={type === 'multiselect'}
          defaultValue={type === 'multiselect' ? [] : ''}
          className={`${inputClass} appearance-none`}
        >
          {type !== 'multiselect' && (
            <option value="" disabled hidden>
              {placeholder || ''}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label htmlFor={name} className={labelClass}>
          {label} {required && '*'}
        </label>
      </div>
    )
  }

  return (
    <div className="relative w-full">
      <input {...commonProps} type={type} className={inputClass} />
      <label htmlFor={name} className={labelClass}>
        {label} {required && '*'}
      </label>
    </div>
  )
}
