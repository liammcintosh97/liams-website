import { APIResponse } from "../api/type"
import { Project } from "../api/projects/type"

/**
 * Gets all the Projects for the RootPage
 * @memberof module:RootPage
 * @returns {Promise<Project>}
 */
export async function getProjects(): Promise<Project[]>  {
  try{
    const url = `${process.env.HOST}/api/projects`
    const res = await fetch(url)
    const apiRes: APIResponse<Project[]> = await res.json() 
    console.log(`GET ${url} - response`, apiRes)
  
    if (!apiRes.success) throw new Error(apiRes.message)
    return apiRes.data
  }catch(e) { throw e }
}

/**
 * Gets the Project data for the page
 * @memberof module:ProjectPage
 * @param {string} slug - The slug of the Project to get 
 * @returns {Promise<Project>}
 */
export async function getProject(slug: string): Promise<Project> {
  try{
    const url = `${process.env.HOST}/api/projects/${slug}`
    const res = await fetch(url)
    const apiRes: APIResponse<Project> = await res.json() 
    console.log(`GET ${url} - response`, apiRes)
  
    if (!apiRes.success) throw new Error(apiRes.message)
    return apiRes.data
  }catch(e) { throw e }
}
