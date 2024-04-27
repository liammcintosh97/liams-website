/** @module RootPage */
import "./globals.scss"
import './page.module.scss'
import { openGraphImage, openGraphBasicFields} from './shared-metadata'
import React from "react"

const title = 'Home'
const description = "The home page of Liam's website"

export const metadata = {
  title: title,
  description: description,
  openGraph:{
    ...openGraphImage,
    ...openGraphBasicFields,
    title: title,
    description: description
  }
}

/**
 * The RootPage component
 * @returns {Promise<JSX.Element>}
 */
export default async function Page(): Promise<JSX.Element>{
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}