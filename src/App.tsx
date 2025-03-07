import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const sumCount = () => {
    setCount((count) => count + 1 )
  }

  const subCount = () => {
    setCount((count) => count - 1)
  }

  const zeroCount = () => {
    setCount(0)
  }

  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={sumCount}>Somar</button>
      <button onClick={subCount}>Subtrair</button>
      <button onClick={zeroCount}>Zerar</button>
    </div>
  )
}

export default App
