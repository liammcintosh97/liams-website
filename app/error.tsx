/** @module Error */
'use client'

import { ErrorProps } from "./type"
import React from "react"

/**
 * The Error component
 * @memberof module:Error
 * @param {ErrorProps} props - The properties of the Error component 
 * @returns {JSX.Element}
 */
export default function Error({ 
  error, 
  reset 
}: ErrorProps): JSX.Element {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}