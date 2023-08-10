"use client"

import { useContext, useState } from "react"
import { AuthHandlerContext } from "./authHandler"

export default function LoginForm(){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const authHandler = useContext(AuthHandlerContext)

  const onSubmitLogin = async event => {
    event.preventDefault()
    console.log('Submitting Login...')

    const options = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({
        username,password
      })
    }

    const res = await fetch(`/api/auth/login`,options)
    const data = await res.json()
    authHandler.login(data)
  }

  
  return (
    <form onSubmit={onSubmitLogin}>
      <input 
        value={username} 
        onChange={event => setUsername(event.target.value)} 
        type="text"
      />
      <input 
        value={password} 
        onChange={event => setPassword(event.target.value)}
        type="password"
      />
      <button>Login</button>
    </form>
  )
}