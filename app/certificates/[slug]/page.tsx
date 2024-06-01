/**@module CertificatesPage */
import React from 'react'
import { EventMetaData, EventMetaDataProps, EventPageProps } from '../../components/Event/type'
import Event, { generateEventMetadata } from '../../components/Event'

/**
 * Generates the meta data for the CertificatesPage
 * @memberof module:CertificatesPage
 * @param {EventMetaDataProps} props - The meta data propertie 
 * @returns {Promise<EventMetaData>}
 */
export async function generateMetadata({ 
  params 
}: EventMetaDataProps): Promise<EventMetaData> {
  
  return generateEventMetadata({params})
}

/**
 * The ProjectPage
 * @param {ProjectPageProps} props - The properties of the ProjectPage
 * @returns {Promise<JSX.Element>}
 */
export default async function Page({
  params
}: EventPageProps): Promise<JSX.Element>{
  console.log('slug', params.slug)
   return (
    <Event
      slug={params.slug}
    />
   )
}