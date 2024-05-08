/** @module Nav */
import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'
import Icon from '../Icon'

/**
 * The Footer component
 * @memberof module:Nav
 * @returns {JSX.Element}
 */
function Footer(): JSX.Element{
  return (
    <footer className={styles.footer}>
      <Link href="mailto:liam.ed.al97@gmail.com">
        <Icon url='/icons/email-icon.svg'/>
      </Link>
      <Link href="https://github.com/liammcintosh97">
        <Icon url='/icons/github-icon.svg'/>
      </Link>
      <Link href="https://www.linkedin.com/in/liam-alton-4b0656141/">
        <Icon url='/icons/linkedin-icon.svg'/>
      </Link>
    </footer>
  )
}

export default Footer