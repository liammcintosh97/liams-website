/**@module Event */
import React from 'react'
import { getEvent } from '../../util/Events'
import { EventMetaData, EventMetaDataProps, EventProps } from './type'
import { openGraphBasicFields, openGraphImage } from '../../shared-metadata'

/**
 * Generates the meta data for the Event
 * @memberof module:Event
 * @param {EventMetaDataProps} props - The meta data properties
 * @returns {Promise<EventMetaData>}
 */
export async function generateEventMetadata({ 
  params 
}: EventMetaDataProps): Promise<EventMetaData> {
  const project = await getEvent(params.slug)

  return {
    title: project.title,
    description: project.description,
    openGraph:{
      ...openGraphImage,
      ...openGraphBasicFields,
      title: project.title,
      description: project.description
    }
  }
}

/**
 * Renders the Event
 * @memberof module:Event
 * @param {EventProps} props - The properties of the Event component
 * @returns {Promise<JSX.Element>}
 */
export default async function Event({
  slug
}: EventProps): Promise<JSX.Element>{
  const event = await getEvent(slug)

   return (
    <div>
      <h1>{event.title}</h1>
      <div>
        <label>Where</label>
        <p>{event.where}</p>
      </div>
      <div>
        <label>Start</label>
        <p>{event.start}</p>
      </div>
      <div>
        <label>End</label>
        <p>{event.end}</p>
      </div>
      <div>
        <label>Description</label>
        <p>{event.description}</p>
      </div>
    </div>
   )
}