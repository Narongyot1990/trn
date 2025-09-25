'use client'

import React, { ChangeEvent } from 'react'

interface DropdownProps {
  options: string[]
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => (
  <select
    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    value={value}
    onChange={onChange}
  >
    <option value="" hidden>
      --select--
    </option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
)

export default Dropdown