async function getData(slug) {
  const url = `${process.env.HOST}/api/events/${slug}`
  const res = await fetch(url)
  const data = await res.json()
  console.log(`GET ${url} - response`,data)
  return data
}


// or Dynamic metadata
export async function generateMetadata({ params }) {
  const data = await getData(params.slug)
  const event = data.item

  return {
    title: event.title,
  }
}

export default async function Page({params}){
  const data = await getData(params.slug)
  const event = data.item

   return (
    <div>
      <h1>{event.title}</h1>
      <div>
        <label>Where</label>
        <p>{event.where}</p>
      </div>
      <div>
        <label>Start</label>
        <p>{event.start.year} quarter {event.start.quarter}</p>
      </div>
      <div>
        <label>End</label>
        <p>{event.start.year} quarter {event.start.quarter}</p>
      </div>
      <div>
        <label>Type</label>
        <p>{event.type}</p>
      </div>
      <div>
        <label>Description</label>
        <p>{event.description}</p>
      </div>
      <div>
        <label>Technologies</label>
        <ul>
          {event.technologies.map((technology)=>{return <li key={"technologies_list_item_"+technology}>{technology}</li>})}
        </ul>
      </div>
    </div>
   )
}