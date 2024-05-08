/** @module Nav */
"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Icon from '../Icon'
import { oswald } from '../../fonts'

/**
 * The Nav component
 * @memberof module:Nav
 * @returns {JSX.Element}
 */
function Nav(): JSX.Element{
  const [hidden, setHidden] = useState(false)
  const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout>()

  let className = styles.nav
  if (hidden) className += ' ' + styles.hidden

  function onMouseEnter (): void {
    clearTimeout(timeoutID)
    setHidden(false)
  }

  function startTimeout(): void {
    const _timeoutID = setTimeout(() => {
      setHidden(true)
    },3000)

    setTimeoutID(_timeoutID)
  }

  useEffect(() => {
    startTimeout()
  }, []) 

  return (
    <div 
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setHidden(true)}
    >
      <nav>
        <ul>
          <li>
            <Link href="/">
              <Icon url='/icons/home-icon.svg'/>
            </Link>
          </li>
          <li>
            <Link className={oswald.className} href={`projects`}>Projects</Link>
          </li>
          <li>
            <Link className={oswald.className} href={`about-me`}>About Me</Link>
          </li>
        </ul>
      </nav>
      <div 
        className={styles.handle}
      ><div/></div>
    </div>
  )
}

export default Nav