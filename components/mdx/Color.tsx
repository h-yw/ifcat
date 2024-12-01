import React from 'react'

export default function Color({ children, c = '#ec4899' }) {
  return (
    <span className={`mx-[2px] rounded-sm bg-opacity-25 px-1 text-white`} style={{ background: c }}>
      {children}
    </span>
  )
}
