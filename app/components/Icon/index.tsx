/** @module Icon */
import React from 'react'
import styles from './style.module.scss'
import { IconProps } from './type'

/**
 * The Nav component
 * @memberof module:Icon
 * @returns {JSX.Element}
 */
function Icon({
  url
}: IconProps): JSX.Element{
  return (
   <div 
      className={styles.icon}
      style={{
        mask: `url('${url}')`,
        maskSize: 'cover'
      }}
   />
  )
}

export default Icon