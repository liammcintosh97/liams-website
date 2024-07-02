/**@module Event */
import React from 'react'
import { getEvent } from '../../util/Events'
import { EventMetaData, EventMetaDataProps, EventProps } from './type'
import { openGraphBasicFields, openGraphImage } from '../../shared-metadata'
import parse from 'html-react-parser';
import { parseDateRange } from '../Events';
import styles from './style.module.scss'

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

  function isHTML(string: string){
    return /<\/?[a-z][\s\S]*>/i.test(string)
  }

  return (
  <div className={styles.event}>
    <h1>{event.title}</h1>
    <div className={styles.subHeader}>
      <p>{event.where}</p>
      <p>{parseDateRange(event.start,event.end)}</p>
    </div>
    {isHTML(event.description) ? parse(event.description) : <p>{event.description}</p>}
  </div>
  )
}
