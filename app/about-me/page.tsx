/** @module AboutMePage */
import { openGraphImage, openGraphBasicFields} from '../shared-metadata'
import React from "react"
import styles from './styles.module.scss'
import Image from 'next/image'
import SubHeader from '../components/SubHeader'

const title = 'About Me'
const description = "About Liam Alton"

export const metadata = {
  title: title,
  description: description,
  openGraph:{
    ...openGraphImage,
    ...openGraphBasicFields,
    title: title,
    description: description
  }
}

/**
 * The about-me page component
 * @returns {Promise<JSX.Element>}
 */
export default async function Page(): Promise<JSX.Element>{
  return (
    <div className={"page " + styles.about_me}>
      <article>
        <header>
          <Image
            className={styles.profile}
            src={'/images/profile.jpeg'}
            alt="A picture of the author Liam Alton"
            width={500}
            height={500}
            blurDataURL="data:..."
            placeholder="blur"
          />
          <div className={styles.title}>
            <h1>ABOUT ME</h1>
            <SubHeader className={styles.subHeader}/>
          </div>
        </header>
        <p>With near 5 years of professional experience, I’ve built a robust skillset expanding a variety of fields from Software Engineering, IT to Games Design.</p>
        <p>Im proficient in a variety of languages and Frameworks focusing around web and mobile development using the React.js, Next.js and React Native 
        frameworks. However I’ve also had experience in languages such as C# in the Unity Engine, Objective C, Java, PHP and python.
        </p>
        <p>I’ve worked on multiple large scale mobile and browser applications from conception to release. I take pride in producing clean, modular and well documented code bases and adhere to the latest technologies and development practises.
        </p>
        <p>I’ve worked in multiple levels or IT customer support and administrated various systems suites like Office365, Google and BePOZ. I’ve facilitated hardware & software rollout to end users and executed IT fits and de-fits.</p>
        <p>I completed a Bachelor of Design, Computer Games and Programming Skill at RMIT and worked on multiple small to large scale projects in the Unity engine</p>
        <p>Outside of my professional career I’m a husband and father I enjoy spending my free time with my family, cooking & baking and playing video games</p>
      </article>
    </div>
  )
}