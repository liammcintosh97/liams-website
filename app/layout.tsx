/** @module RootLayout */
import React from "react"
import { basicFields } from "./shared-metadata"
import { RootLayoutProps } from "./type"

const defaultTitle = 'Liam\'s Website'

export const metadata = {  
  ...basicFields,
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
}

/**
 * The Rootlayout component
 * @memberof module:RootLayout
 * @param {RootLayoutProps} props - The properties of the RootLayout component
 * @returns {JSX.Element}
 */
export default function RootLayout({
  children 
}: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
