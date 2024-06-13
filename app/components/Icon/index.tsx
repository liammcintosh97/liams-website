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
  url,
  className
}: IconProps): JSX.Element{
  let _className = styles.icon
  if (className !== undefined) _className += ' ' + className

  return (
   <div 
      className={_className}
      style={{
        mask: `url('${url}')`,
        maskSize: 'cover'
      }}
   />
  )
}

export default Icon