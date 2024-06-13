/** @module ProjectsPage */
import Events from '../components/Events'
import { openGraphImage, openGraphBasicFields} from '../shared-metadata'
import React from "react"

const title = 'Project'
const description = "Liam Alton's Projects"

export const metadata = {
  title: title,
  description: description,
  openGraph:{
    ...openGraphImage,
    ...openGraphBasicFields,
    title: title,
    description: description
  }
}

/**
 * The ProjectsPage component
 * @memberof module:ProjectsPage
 * @returns {Promise<JSX.Element>}
 */
export default async function Page(): Promise<JSX.Element>{
  return (
    <div className='page'>
      <Events
        eventType='project'
        parentPath='projects'
      />
    </div>
  )
}