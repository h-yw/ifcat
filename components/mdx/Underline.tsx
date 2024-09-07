import React from 'react'

export default function Underline({ children, c = 'red' }) {
  return <span style={{ textDecoration: 'underline', textDecorationColor: c }}>{children}</span>
}
