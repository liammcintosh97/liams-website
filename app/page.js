import "./globals.scss"
import styles from './page.module.scss'
import EventCard from "./components/EventCard"

export const runtime = 'edge'

export const metadata = {
  title: 'Home',
}

async function getData() {
  const res = await fetch(`${process.env.HOST}/api/events`)
  return res.json()
}

export default async function Page() {
  const data = await getData()

  return (
    <div>
      <h1>Home Page</h1>
      {data.map((data)=>{

        return(
          <EventCard
            key={"event_card_" + data.slug}
            title={data.title}
            slug={data.slug}
          />
        )
      })}
    </div>
  )
}