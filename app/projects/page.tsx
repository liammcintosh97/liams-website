/** @module RootPage */
import "../globals.scss"
import ProjectCard from "../components/ProjectCard"
import { openGraphImage, openGraphBasicFields} from '../shared-metadata'
import React from "react"
import { getProjects } from "../util/projects"

const title = 'Projects'
const description = "My projects"

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
 * The Projects page component
 * @returns {Promise<JSX.Element>}
 */
export default async function Page(): Promise<JSX.Element>{
  const projects = await getProjects()
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((e)=>{
        return(
          <ProjectCard
            key={"project_card_" + e.slug}
            title={e.title}
            slug={e.slug}
          />
        )
      })}
    </div>
  )
}