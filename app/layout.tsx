/** @module RootLayout */
import "./globals.scss"
import React, { JSX } from "react"
import { basicFields } from "./shared-metadata"
import { RootLayoutProps } from "./type"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { inconsolata } from './fonts'

const defaultTitle = 'Liam\'s Website'

export const metadata = {  
  ...basicFields,
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
}

/**
 * The RootLayout component
 * @memberof module:RootLayout
 * @param {RootLayoutProps} props - The properties of the RootLayout component
 * @returns {JSX.Element}
 */
export default function Layout({
  children 
}: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={`${inconsolata.variable} ${inconsolata.variable}`}>
      <body>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
