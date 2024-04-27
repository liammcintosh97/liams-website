/**@module ProjectPage */
import React from 'react'
import { openGraphImage, openGraphBasicFields } from '../../shared-metadata'
import { ProjectPageMetaData, ProjectPageMetaDataProps, ProjectPageProps } from './type'
import { getProject } from '../../util/projects'

/**
 * Generates the meta data for the ProjectPage
 * @memberof module:ProjectPage
 * @param {ProjectPageMetaDataProps} props - The meta data propertie 
 * @returns {Promise<ProjectPageMetaData>}
 */
export async function generateMetadata({ 
  params 
}: ProjectPageMetaDataProps): Promise<ProjectPageMetaData> {
  const project = await getProject(params.slug)

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
 * The ProjectPage
 * @param {ProjectPageProps} props - The properties of the ProjectPage
 * @returns {Promise<JSX.Element>}
 */
export default async function Page({
  params
}: ProjectPageProps): Promise<JSX.Element>{
  const project = await getProject(params.slug)

   return (
    <div>
      <h1>{project.title}</h1>
      <div>
        <label>Where</label>
        <p>{project.where}</p>
      </div>
      <div>
        <label>Start</label>
        <p>{project.start.year} quarter {project.start.quarter}</p>
      </div>
      <div>
        <label>End</label>
        <p>{project.start.year} quarter {project.start.quarter}</p>
      </div>
      <div>
        <label>Type</label>
        <p>{project.type}</p>
      </div>
      <div>
        <label>Description</label>
        <p>{project.description}</p>
      </div>
      <div>
        <label>Technologies</label>
        <ul>
          {project.technologies.map((technology)=>{return <li key={"technologies_list_item_"+technology}>{technology}</li>})}
        </ul>
      </div>
    </div>
   )
}