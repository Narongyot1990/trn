'use client'

import React from 'react'

interface TableProps {
  headers: string[]
  rows: (string | number)[][]
}

const Table: React.FC<TableProps> = ({ headers, rows }) => (
  <div className="w-full max-w-full overflow-x-auto">
    <table className="table-fixed w-full border-collapse rounded-md bg-white shadow-sm">
      <thead>
        <tr className="bg-gray-100 text-left text-xs sm:text-sm md:text-base font-semibold text-gray-600">
          {headers.map((header, index) => (
            <th key={index} className="px-2 py-2 break-words">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="text-xs sm:text-sm md:text-base text-gray-700 hover:bg-gray-50">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-2 py-2 truncate">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Table