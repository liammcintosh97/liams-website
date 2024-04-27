/** The meta data properties of the Project Page */
export interface ProjectPageMetaDataProps {
  /** The parameters of the meta data */
  params:{
    /** The url slug of the Project */
    slug: string
  }
}

/** The ProjectPage meta data */
export interface ProjectPageMetaData {
  /** The ProjectPage title */
  title: string
  /** The ProjectPage description */
  description: string
  /** The ProjectPage openGraph config */
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

/** The properties of the ProjectPage */
export interface ProjectPageProps {
  /** The parameters of the ProjectPage */
  params:{
    /** The url slug of the Project */
    slug: string
  }
}