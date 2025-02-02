/** @module RootPage */
import './globals.scss'
import styles from './styles.module.scss'
import { openGraphImage, openGraphBasicFields} from './shared-metadata'
import React, { JSX } from "react"
import SubHeader from './components/SubHeader'

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
      <h1 className={styles.title}>LIAM ALTON</h1>
      <SubHeader/>
    </div>
  )
}