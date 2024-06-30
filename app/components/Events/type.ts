import { EventType } from "../../util/Events/type";

/** The properties of the Events component */
export interface EventsProps {
  /** The Events title*/
  title: string
  /** The type of Event */
  eventType: EventType
  /** The full parent path to the Event*/
  parentPath: string
}

/** The request body sent to the get Events api route */
export type EventsRequestBody = {
  /** The type of Events to return */
  eventType: EventType
}