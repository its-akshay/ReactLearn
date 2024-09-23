import { useState } from 'react'
import './App.css'

function App() {
  const userName = "aliens"
  const [count, setCount] = useState(0)
  const addVal = function () {
    setCount(count + 1)
  }
  const remVal = function () {
    setCount(count - 1)
  }
  return (
    <>
      <h1 className="name">Who are we? {userName}</h1>

      <button onClick={addVal}>+</button>
      <button onClick={remVal}>-</button>

      <h3>{count}</h3>

    </>
  )
}

export default App
