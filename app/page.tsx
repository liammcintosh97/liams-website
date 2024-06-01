/** @module RootPage */
import "./globals.scss"
import styles from './styles.module.scss'
import { openGraphImage, openGraphBasicFields} from './shared-metadata'
import React from "react"
import { oswald, playfair_display } from './fonts'

const title = 'Home'
const description = "The home page of Liam's website"

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
 * The RootPage component
 * @returns {Promise<JSX.Element>}
 */
export default async function Page(): Promise<JSX.Element>{
  return (
    <div className={"page " + styles.root}>
      <h1 className={`${styles.title} ${oswald.className}`}>LIAM ALTON</h1>
      <div className={styles.subHeader}>
        <h2 className={playfair_display.className}>Software Engineer</h2>
        <p>|</p>
        <h2 className={playfair_display.className}>IT Professional</h2>
        <p>|</p>
        <h2 className={playfair_display.className}>Game Designer</h2>
      </div>
    </div>
  )
}