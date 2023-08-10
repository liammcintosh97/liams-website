"use client"

import { useState } from "react"

export default function AdminActions(){
  const [slug,setSlug] = useState()
  const [title,setTitle] = useState()


  async function onRevalidateClick(){
    const options = {
      method: "POST"
    }
    console.log("Revalidating Home...")
    const res = await fetch(`/api/revalidate`,options)
    const data = await res.json()
  }

  async function onSubmitTitleUpdate(event){
    event.preventDefault()
    console.log(`Submitting Title Update for ${slug}...`)

    const options = {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({
        title
      })
    }

    const res = await fetch(`/api/events/${slug}`,options)
    const data = await res.json()
  }
  
  return (
    <div>
      <button onClick={onRevalidateClick}>Revalidate Home</button>
      <form onSubmit={onSubmitTitleUpdate}>
        <label htmlFor="slug">Slug to Update</label>
        <input 
          id={slug}       
          value={slug} 
          onChange={event => setSlug(event.target.value)} 
          type="text"
        />
        <label htmlFor="title">Title Value</label>
        <input 
          id={"title"}
          value={title} 
          onChange={event => setTitle(event.target.value)}
          type="text"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}