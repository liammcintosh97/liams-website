"use client"

import { useContext } from "react"
import { AuthHandlerContext } from "./authHandler"

export default function LogoutForm(){
  const authHandler = useContext(AuthHandlerContext)

  const onSubmitLogout = async event => {
    event.preventDefault()
    console.log('Submitting Logout...')
    console.log(authHandler.user)

    const options = {
      method: "POST",
      body: JSON.stringify({
        username: authHandler.user.username
      })
    }

    const res = await fetch(`/api/auth/logout`,options)
    const data = await res.json()

    if(data.success) authHandler.logout()
    else console.error(data.error)
  }

  
  return (
    <form onSubmit={onSubmitLogout}>
      <button>Logout</button>
    </form>
  )
}