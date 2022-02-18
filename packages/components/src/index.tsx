import React from 'react'
import { FC, useState } from 'react'

export const Counter: FC = () => {
  const [count, setCount] = useState(12)
  return (
    <div style={{ background: 'red' }}>
      count {count} <button onClick={() => setCount((prev) => prev + 1)}>inc</button>
    </div>
  )
}
