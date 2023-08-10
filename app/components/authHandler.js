"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from "react"
import { usePathname } from 'next/navigation'
import { createContext } from 'react';

export const AuthHandlerContext = createContext(null)

export function AuthHandler({children}){
  const [user,setUser] = useState(null)
  const pathname = usePathname()
  const router = useRouter()

  function isLoggedIn(){
    const accessToken = window.sessionStorage.getItem("ACESS_TOKEN");
    const idToken = window.sessionStorage.getItem("ID_TOKEN");

    if(!accessToken || !idToken) return false

    return {accessToken,idToken}
  }

  function login(data){
    window.sessionStorage.setItem("ACESS_TOKEN",data.credentials.accessToken)
    window.sessionStorage.setItem("ID_TOKEN",data.credentials.idToken)
    setUser(data)

    router.push('/admin')
  }

  function logout(){
    window.sessionStorage.removeItem("ACESS_TOKEN")
    window.sessionStorage.removeItem("ID_TOKEN")
    setUser(null)
  }

  useEffect(()=>{
    if(!isLoggedIn() && pathname != "/admin/login") router.push('/admin/login');
  },[user])
  
  return(
    <div className='auth-handler'>
      <AuthHandlerContext.Provider value={{login,logout,user}}>
        {children}
      </AuthHandlerContext.Provider>
    </div>
  )
}