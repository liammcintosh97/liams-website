import { APIResponse } from "../../api/type"
import { Event, EventsQuery } from './type'

/**
 * Gets all the Events for the RootPage
 * @returns {Promise<Event>}
 */
export async function getEvents(query?: EventsQuery): Promise<Event[]>  {
  let queryString: string | undefined = undefined
  
  if (query !== undefined) queryString = toQueryString(query)
  try{
    const url = `${process.env.HOST}/api/events` + (queryString && '?' + queryString)
    console.log('url', url)
    const res = await fetch(url)
    const apiRes: APIResponse<Event[]> = await res.json() 
    console.log(`GET ${url} - response`, apiRes)
  
    if (!apiRes.success) throw new Error(apiRes.message)
    return apiRes.data
  }catch(e) { throw e }
}

/**
 * Gets the Event data for the page
 * @param {string} slug - The slug of the Event to get 
 * @returns {Promise<Event>}
 */
export async function getEvent(slug: string): Promise<Event> {
  try{
    const url = `${process.env.HOST}/api/events/${slug}`
    const res = await fetch(url)
    const apiRes: APIResponse<Event> = await res.json() 
    console.log(`GET ${url} - response`, apiRes)
  
    if (!apiRes.success) throw new Error(apiRes.message)
    return apiRes.data
  }catch(e) { throw e }
}

function toQueryString(obj: Record<string, string>): string {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
