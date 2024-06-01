/** @module AcknowledgementsPage */
import Events from '../components/Events'
import { openGraphImage, openGraphBasicFields} from '../shared-metadata'
import React from "react"

const title = 'Acknowledgements'
const description = "Liam Alton's Acknowledgements"

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
 * The Acknowledgements Page component
 * @returns {Promise<JSX.Element>}
 */
export default async function Page(): Promise<JSX.Element>{
  return (
    <Events
      eventType='acknowledgement'
      parentPath='acknowledgements'
    />
  )
}