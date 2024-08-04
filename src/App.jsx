import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dropdown from './components/dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dropdown title="HELO" content="hello" />
     <Dropdown title="Biology" content="Bio" />
     <Dropdown title="Physics" content="Physics" />
     <Dropdown title="Chemistry" content="Chemistry" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App
