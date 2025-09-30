'use client'

import React, { ChangeEvent } from 'react'

interface InputProps {
  type?: string
  value: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  placeholder = '',
  onChange,
}) => {
  const isDateOrTime = type === 'date' || type === 'time'

  return (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className="w-full h-[1.75rem] px-2 py-[2px] border border-gray-300 rounded-md bg-white text-[clamp(0.5rem, 1vw, 0.75rem)] leading-[1rem] text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none"
  />
  )
}

export default Input