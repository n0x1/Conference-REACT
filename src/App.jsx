import { useState } from 'react'
import './App.css'
import Dropdown from './components/dropdown'
import Navbar from './components/navbar'
import Hero from './components/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <div className='flex flex-row'>
    <Dropdown title="HELO" content="hello" />
     <Dropdown title="Biology" content="Bio" />
     <Dropdown title="Physics" content="Physics" />
     <Dropdown title="Chemistry" content="Chemistry" />
    </div>
    
      <div id="card" className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App
