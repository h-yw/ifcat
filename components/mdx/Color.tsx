import React from 'react'

export default function Color({ children, c = '#f00' }) {
  return <span style={{ color: c }}>{children}</span>
}
