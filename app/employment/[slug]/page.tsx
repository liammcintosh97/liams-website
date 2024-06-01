/**@module EmploymentPage */
import React from 'react'
import { EventMetaData, EventMetaDataProps, EventPageProps } from '../../components/Event/type'
import Event, { generateEventMetadata } from '../../components/Event'

/**
 * Generates the meta data for the EmploymentPage
 * @memberof module:EmploymentPage
 * @param {EventMetaDataProps} props - The meta data propertie 
 * @returns {Promise<EventMetaData>}
 */
export async function generateMetadata({ 
  params 
}: EventMetaDataProps): Promise<EventMetaData> {
  
  return generateEventMetadata({params})
}

/**
 * The EmploymentPage
 * @param {EventPageProps} props - The properties of the EmploymentPage
 * @returns {Promise<JSX.Element>}
 */
export default async function Page({
  params
}: EventPageProps): Promise<JSX.Element>{
   return (
    <Event
      slug={params.slug}
    />
   )
}