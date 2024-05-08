/** @module AboutMePage */
import { openGraphImage, openGraphBasicFields} from '../shared-metadata'
import React from "react"

const title = 'About Me'
const description = "About Liam Alton"

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
 * The about-me page component
 * @returns {Promise<JSX.Element>}
 */
export default async function Page(): Promise<JSX.Element>{
  return (
    <div>
      <h1>About Me</h1>
    </div>
  )
}