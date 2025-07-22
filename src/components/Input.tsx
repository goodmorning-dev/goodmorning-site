'use client'

import React, { useState } from 'react'
import { MdOutlineFileUpload } from 'react-icons/md'

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
    | 'upload'
  options?: { label: string; value: string }[]
  required?: boolean
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<any>) => void
}

export default function Input({
  name,
  label,
  type = 'text',
  options = [],
  required = false,
  placeholder = '',
  value: controlledValue,
  onChange,
}: InputProps) {
  const [focused, setFocused] = useState(false)
  const [internalValue, setInternalValue] = useState('')
  const value = controlledValue !== undefined ? controlledValue : internalValue

  const handleChange = (e: React.ChangeEvent<any>) => {
    onChange?.(e)
    setInternalValue(e.target.value)
  }

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
    onChange: handleChange,
    value,
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

  if (type === 'upload') {
    return (
      <div className="relative w-full">
        <label
          htmlFor={name}
          className={`${inputClass} flex cursor-pointer items-center justify-between pr-12`}
        >
          <span className="truncate">{value || '‎'}</span>
          <MdOutlineFileUpload className="absolute right-5 h-7 w-7 text-white/80 peer-focus:text-primary" />
        </label>

        <input
          id={name}
          name={name}
          type="file"
          required={required}
          accept=".pdf, .doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
          onChange={(e) => {
            const file = e.target.files?.[0]
            const fileName = file?.name || ''
            setInternalValue(fileName)
            onChange?.({
              ...e,
              target: { ...e.target, value: fileName },
            })
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        <span className={labelClass}>
          {label} {required && '*'}
        </span>
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
