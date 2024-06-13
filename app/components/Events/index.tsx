/**@module Events */
import Link from "next/link"
import { getEvents } from "../../util/Events"
import { EventsProps } from "./type"
import styles from './style.module.scss'
import { oswald, playfair_display } from "../../fonts"

/**
 * Renders all the Events
 * @memberof module:Events
 * @param {EventsProps} props - The properties of the Events components
 * @returns {Promise<JSX.Element>}
 */
export default async function Events({
  eventType,
  parentPath
}: EventsProps ): Promise<JSX.Element> {
  const events = await getEvents({eventType})

  return (
    <div className={styles.events}>
      {events.map((e)=>{
        return(
          <Link
            className={styles.event}
            key={`event_link_${e.eventType}s_${e.slug}`}
            href={`${parentPath}/${e.slug}`}
          >
            <h2>{e.title}</h2>
            <div className='sub-header'>
              <p>{e.where}</p>
              <p>{parseDateRange(e.start, e.end)}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export function parseDateRange(start?: string, end?: string){
  if (start === undefined && end === undefined) return ''
  if (start === end) return start
  if (end === '') `${start} - present`
  
  return `${start} - ${end}`
}