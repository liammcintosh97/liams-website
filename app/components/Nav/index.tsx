/** @module Nav */
import Link from 'next/link'
import React, { JSX } from 'react'
import styles from './style.module.scss'
import Icon from '../Icon'
import { inconsolata } from '../../fonts'

/**
 * The Nav component
 * @memberof module:Nav
 * @returns {JSX.Element}
 */
function Nav(): JSX.Element{
  return (
    <div className={styles.navContainer}>
      <nav>
        <Icon 
          className={styles.burgerIcon}
          url='/icons/burger-menu-icon.svg'
        />
        <ul>
          <li>
            <Link href="/">
              <Icon url='/icons/home-icon.svg'/>
            </Link>
          </li>
          <li>
            <Link className={inconsolata.className} href={`/employment`}>Employment</Link>
          </li>
          <li>
            <Link className={inconsolata.className} href={`/projects`}>Projects</Link>
          </li>
          <li>
            <Link className={inconsolata.className} href={`/certificates`}>Certificates</Link>
          </li>
          <li>
            <Link className={inconsolata.className} href={`/acknowledgements`}>Acknowledgements</Link>
          </li>
          <li>
            <Link className={inconsolata.className} href={`/about-me`}>About Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav