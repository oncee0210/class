import { useState } from 'react'

export default function CounterStatePage () {
  const [count, setCount] = useState(0);

  function plusCount () {
    setCount(count + 1);
  }

  function minusCount () {
    setCount(count - 1);
  }

  return (
    <>
    <span>{count}</span>
    <button onClick={plusCount}>증가</button>
    <button onClick={minusCount}>감소</button>
    </>
  )
}