/**@module AcknowledgementPage */
import React from 'react'
import { EventMetaData, EventMetaDataProps, EventPageProps } from '../../components/Event/type'
import Event, { generateEventMetadata } from '../../components/Event'

/**
 * Generates the meta data for the AcknowledgementPage
 * @memberof module:AcknowledgementPage
 * @param {EventMetaDataProps} props - The meta data propertie 
 * @returns {Promise<EventMetaData>}
 */
export async function generateMetadata({ 
  params 
}: EventMetaDataProps): Promise<EventMetaData> {
  
  return generateEventMetadata({params})
}

/**
 * The AcknowledgementPage
 * @param {EventPageProps} props - The properties of the AcknowledgementPage
 * @returns {Promise<JSX.Element>}
 */
export default async function Page({
  params
}: EventPageProps): Promise<JSX.Element>{
   return (
    <div className='page'>
      <Event
        slug={params.slug}
      />
    </div>
   )
}