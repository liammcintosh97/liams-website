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
        <p>My skillsets in Software Engineering spans a variety of languages and Frameworks focusing around web and mobile development using the React.js, Next.js and React Native frameworks. Beyond that I’ve had experience in other languages such as C# in the Unity Engine, Objective C, Java, PHP and python. </p>
        <p>I’ve worked on multiple large scale mobile and browser applications from conception to release. Working in a sprint based agile environment and adhering to the latest technologies and development practises. I take pride in producing clean, modular and well documented code bases. </p>
        <p>During my IT career I engaged in multiple levels or IT customer support, assisting end users and in office employees. I’ve administrated various systems suites like Office365 and Google and BePOZ. I’ve facilitated hardware & software rollout to end users and in office employees. I’ve also made significant contributions to the management and execution of IT fit and de-fits and establishments of new restaurants.</p>
        <p>I completed  a Bachelor of Design, Computer Games and Programming Skill at RMIT. Which explored the practical and theoretical aspects of
games, design, art and technology. I worked on multiple small to large scale projects in the Unity engine, in collaboration with other students and by myself.</p>
        <p>Outside of my professional career I’m a husband and father to a one year old boy. I enjoy spending my free time  with my family, cooking & baking and playing video games when the time arises</p>
      </article>
    </div>
  )
}