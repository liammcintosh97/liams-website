/** @module RootLayout */
import "./globals.scss"
import React from "react"
import { basicFields } from "./shared-metadata"
import { RootLayoutProps } from "./type"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { oswald ,playfair_display} from './fonts' 

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
export default function Layout({
  children 
}: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={`${oswald.variable} ${playfair_display.variable}`}>
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
