/** @module EmploymentPage */
import Events from '../components/Events'
import { openGraphImage, openGraphBasicFields} from '../shared-metadata'
import React from "react"

const title = 'Employment'
const description = "Liam Alton's Employment"

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
 * The Employment page component
 * @returns {Promise<JSX.Element>}
 */
export default async function Page(): Promise<JSX.Element>{
  return (
    <Events
      eventType='employment'
      parentPath='employment'
    />
  )
}