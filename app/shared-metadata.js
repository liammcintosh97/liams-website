export const openGraphImage = { 
  images: [
   { 
      url: 'https://media.licdn.com/dms/image/C5603AQHUClf3-3I2Tg/profile-displayphoto-shrink_800_800/0/1568869132563?e=1697673600&v=beta&t=k2VwCeaMzWzusmT6tBzWZM0Sq9f6v8wvyij504IVbeY',
      alt: "Liam Alton"
   }
  ] 
}

export const keyWords = [
  'Next.js', 
  'React', 
  'JavaScript', 
  'Resume', 
  "Protfolio",
  "Web Developer", 
  "Software Engineer",
  "HTML", 
  "SASS", 
  "Node.js", 
  "AWS", 
  "Amplify",
  "DynamoDD"
]

export const robots = {
  index: false,
  follow: true,
  nocache: true,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}

export const icons = {
  icons: {
    icon: '/favicon.ico'
  }
}

export const title = "Liam\'s Website"
export const description = "Liams Alton's developer portfolio & Resume"

export const twitter = {
  card: 'summary',
  title: title,
  description: description,
  site: '@Li_Macc',
  creator: '@Li_Macc',
  image: {
    url: `${process.env.HOST}/favicon.ico`,
    alt: 'Liam\'s Logo ',
  },
}

export const verfication = {
  google: 'google',
  yandex: 'yandex',
  yahoo: 'yahoo',
  other: {
    me: ['my-email', 'my-link'],
  },
}

export const alternates = {
  canonical: process.env.HOST,
  languages: {
    'en-AU': `${process.env.HOST}/en-AU`,
  }
}

export const basicFields = {
  generator: 'Next.js',
  applicationName: 'Liam\'s Website',
  referrer: 'origin-when-cross-origin',
  keywords: keyWords,
  authors: [{ name: 'Liam Alton', url: process.env.HOST }],
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  creator: 'Liam Alton',
  publisher: 'Liam Alton',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.HOST),
  alternates: {
    canonical: '/',
    languages: {
      'en-AU': '/en-AU',
    }
  },
  robots: robots,
  icons: icons,
  manifest: `${process.env.HOST}/manifest.json`,
  twitter: twitter,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verfication: verfication,
  category: 'technology'
}

export const openGraphBasicFields = {
  url: process.env.HOST,
  siteName: 'Liam\'s Website',
  locale: 'en_AU',
  authors: [{ name: 'Liam Alton', url: process.env.HOST }]
}