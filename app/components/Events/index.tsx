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
  parentPath,
  title
}: EventsProps ): Promise<JSX.Element> {
  const events = await getEvents({eventType})

  return (
    <div className={styles.events}>
      <h1>{title}</h1>
      <ul>
        {events.map((e)=>{
          return(
            <li key={`event_link_${e.eventType}s_${e.slug}`}>
              <Link
                className={styles.event}
                href={`${parentPath}/${e.slug}`}
              >
                <div className={styles.eventLine}>
                  <p className={styles.eventTitle}>{e.title}</p>
                  <p className={styles.eventBreak}>|</p>
                  <p className={styles.eventLocation}>{e.where}</p>
                </div>    
                <p className={styles.eventDate}>{parseDateRange(e.start, e.end)}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function parseDateRange(start?: string, end?: string){
  if (start === undefined && end === undefined) return ''
  if (start === end) return start
  if (end === '') return `${start} - Present`
  
  return `${start} - ${end}`
}