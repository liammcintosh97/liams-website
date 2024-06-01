export interface Event {
  slug: string,
  description: string,
  start: string,
  end: string,
  title: string,
  eventType: EventType,
  where: string
}

export interface EventsQuery {
  [key: string] : string | EventType
  eventType: EventType
}

export type EventType = 'certificate' | 'employment' | 'acknowledgement'