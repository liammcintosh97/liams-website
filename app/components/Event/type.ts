/** The properties of the Event component */
export interface EventProps {
  /** The slug of the Event to retirve */
 slug: string
}

/** The properties of the Event Page */
export interface EventPageProps {
  /** The parameters of the Event Page */
  params:{
    /** The url slug of the Event */
    slug: string
  }
}

/** The meta data properties of the Event*/
export interface EventMetaDataProps {
  /** The parameters of the meta data */
  params:{
    /** The url slug of the Event */
    slug: string
  }
}

/** The Event meta data */
export interface EventMetaData {
  /** The Event title */
  title: string
  /** The Event description */
  description: string
  /** The Event openGraph config */
  openGraph: {
    title: string
    description: string
    url: string
    siteName: string
    locale: string
    authors: {
        name: string
        url: string
    }[];
    images: {
        url: string
        alt: string
    }[]
  }
}
