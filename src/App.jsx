import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { addUser } from './store/slices/slice'

function App() {
  const dispatch = useDispatch()

  const handleVite  = ()=>{
    console.log("adding vite user")
    dispatch(addUser(`viteuser_id_${Math.random()}`))
  }

  const handleReact  = ()=>{
    console.log("adding react user")
    dispatch(addUser(`reactuser_id_${Math.random()}`))
  }

  return (
    <div className="App">
      <div>
        <p onClick={handleVite}>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </p>
        <p onClick={handleReact} >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </p>
      </div>
    </div>
  )
}

export default App
