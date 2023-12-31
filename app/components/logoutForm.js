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

    const url = `/api/auth/logout`
    const res = await fetch(url,options)
    const data = await res.json()
    console.log(`POST ${url} - response`,data)

    if(data.success) authHandler.logout()
    else console.error(data.error)
  }

  
  return (
    <form onSubmit={onSubmitLogout}>
      <button>Logout</button>
    </form>
  )
}