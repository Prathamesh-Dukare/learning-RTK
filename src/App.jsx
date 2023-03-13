import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from './store/slices/slice'
import { useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.users)
  console.log(data);

  const handleVite = () => {
    console.log("adding vite user")
    let id = Math.random()
    dispatch(addUser({
      name: `viteuser_id_${id}`,
      id: id
    }))
  }
  const handleReact = () => {
    console.log("adding react user")
    let id = Math.random()
    dispatch(addUser({
      name: `reactuser_id_${id}`,
      id: id
    }))
  }

  const handleDelete = (id) => {
    console.log("deleting user", id)
    dispatch(removeUser(id))
  }

  return (
    <div className="App">
      <div style={
        { display: "flex" }
      }>
        <p onClick={handleVite}>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </p>
        <p onClick={handleReact} >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </p>
      </div>

      <div className="users">
        <h2>all users</h2>
        {
          data.map((user,id) => <div key={id}>
            <p>{user.name}</p>
            <button onClick={() => { handleDelete(id) }}>Delete</button></div>)
        }
      </div>
    </div >
  )
}

export default App
