import { ReactNode } from "react"

/** The properties of the Error component */
export interface ErrorProps {
  /** The error that has occured */
  error: Error
  /** Attempts to recover by trying to re-render the segment */
  reset: () => void
}

/** The properties of the RootLayout component */
export interface RootLayoutProps {
  /** The children of the RootLayout component */
  children: ReactNode
}