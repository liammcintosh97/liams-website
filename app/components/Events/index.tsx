/**@module Events */
import Link from "next/link"
import { getEvents } from "../../util/Events"
import { EventsProps } from "./type"

/**
 * Renders all the Events
 * @memberof module:Events
 * @param {EventsProps} props - The properties of the Events components
 * @returns {Promise<JSX.Element>}
 */
export default async function Events({
  eventType
}: EventsProps ): Promise<JSX.Element> {
  const events = await getEvents({eventType})
  console.log(events, events)
  return (
    <div>
      {events.map((e)=>{
        return(
          <Link
            key={`event_link_${e.eventType}s_${e.slug}`}
            href={`/${e.eventType}s/${e.slug}`}
          >
            <h3>{e.title}</h3>
          </Link>
        )
      })}
    </div>
  )
}