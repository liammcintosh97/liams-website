import {AuthHandler} from '../components/authHandler'

import { basicFields, robots } from "./shared-metadata"

const defaultTitle = 'Admin'

export const metadata = {  
  ...basicFields,
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  robots: {
    ...robots,
    follow: false
  }
}

export default async function layout({children}) {
  return (
    <AuthHandler>
      {children}
    </AuthHandler>
  )
}