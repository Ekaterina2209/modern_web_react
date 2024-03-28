import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MyButton from './labs/lab2/MyButton'

function App() {
  const [count, setCount] = useState(0)

  function handle() {
    alert("Hello world")
  }

  return (
    <>
      <h1>Катя Hello world!</h1>
      <MyButton onClick={handle}>Это моя кнопка!</MyButton>
    </>
  )
}

export default App
