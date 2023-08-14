import { basicFields } from "./shared-metadata"

const defaultTitle = 'Liam\'s Website'

export const metadata = {  
  ...basicFields,
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
