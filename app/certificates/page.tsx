/** @module CertificatesPage */
import Events from '../components/Events'
import { openGraphImage, openGraphBasicFields} from '../shared-metadata'
import React from "react"

const title = 'Certificates'
const description = "Liam Alton's Certificates"

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
 * The Certificates page component
 * @returns {Promise<JSX.Element>}
 */
export default async function Page(): Promise<JSX.Element>{
  return (
    <Events
      eventType='certificate'
    />
  )
}