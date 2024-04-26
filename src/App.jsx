import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageTemplate from './PageTemplate'
import MyButton from './labs/lab2/MyButton'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  function handle() {
    alert("Hello world")
  }

  return (
    <PageTemplate>
    </PageTemplate>
  )
}

export default App