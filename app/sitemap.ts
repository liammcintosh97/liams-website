import { MetadataRoute } from "next/types";
import { getProjects } from "./util/projects";

const routes = [
  ""
]

/**
 * Generates a Sitemap.xml file
 * @returns {Promise<MetadataRoute.Sitemap>}
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects()

  const posts = projects.map(({ slug }) => ({
    url: `${process.env.HOST}/projects/${slug}`,
    lastModified: new Date().toISOString(),
  }));
 
  const _routes = routes.map((route) => ({
    url: `${process.env.HOST}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [..._routes, ...posts];
}