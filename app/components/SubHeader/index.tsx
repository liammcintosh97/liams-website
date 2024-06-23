/** @module SubHeader */
import React from "react"
import styles from './styles.module.scss'
import { SubHeaderProps } from "./type"

/**
 * The SubHeader component
 * @memberof SubHeader
 * @returns {Promise<JSX.Element>}
 */
export default async function SubHeader({
  className
}: SubHeaderProps): Promise<JSX.Element>{
  let _className = styles.subHeader
  if (className !== undefined) _className = className

  return (
    <div className={_className}>
      <h2>Software Engineer</h2>
      <p>|</p>
      <h2>IT Professional</h2>
      <p>|</p>
      <h2>Game Designer</h2>
    </div>
  )
}