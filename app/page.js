import "./globals.scss"
import styles from './page.module.scss'
import EventCard from "./components/EventCard"

export const metadata = {
  title: 'Home',
}

async function getData() {
  const url = `${process.env.HOST}/api/events`
  const res = await fetch(url)
  const json = await res.json()
  console.log(`GET ${url} - response`,json)
  return json
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