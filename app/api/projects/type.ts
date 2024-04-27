/** The project Object */
export interface Project {
  /** The url slub of the Project */
  slug: string
  /** The descriptions of the Project */
  description: string
  /** The end Period of the Project */
  end: Period
  /** The start Period of the Project */
  start: Period
  /** The technologies used within this Project */
  technologies: string[]
  /** The title of the Project */
  title: string
  /** The type of Project */
  type: string
  /** Where the Project occcured */
  where: string
}

/** A Period of time */
export interface Period {
  /** The yealry quarter */
  quarter: number,
  /** The year */
  year: number
}