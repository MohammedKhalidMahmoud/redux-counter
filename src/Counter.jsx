import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './lib/CounterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  console.log(count);
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <div>{count}</div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}