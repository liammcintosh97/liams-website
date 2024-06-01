/** @module Nav */
import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'
import Icon from '../Icon'
import { oswald } from '../../fonts'

/**
 * The Nav component
 * @memberof module:Nav
 * @returns {JSX.Element}
 */
function Nav(): JSX.Element{
  return (
    <div className={styles.nav}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <Icon url='/icons/home-icon.svg'/>
            </Link>
          </li>
          <li>
            <Link className={oswald.className} href={`/certificates`}>Certificates</Link>
          </li>
          <li>
            <Link className={oswald.className} href={`/about-me`}>About Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav