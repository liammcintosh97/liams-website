/** @module ProjectCard */
import Link from 'next/link'
import React from 'react'
import { ProjectCardProps } from './type'

/**
 * The ProjectCard component renders a link to the Project page
 * @memberof module:ProjectCard
 * @param {ProjectCardProps} props - The properties of the ProjectCard component 
 * @returns {JSX.Element}
 */
function ProjectCard({
  title,slug
}: ProjectCardProps): JSX.Element{
  return (
    <Link href={`projects/${slug}`}>
      <h3>{title}</h3>
    </Link>
  )
}

export default ProjectCard