import { getData } from './page';
 
const routes = [
  "",
  "admin",
  "/admin/login",
]

export default async function sitemap() {
  const data = await getData()

  const posts = data.map(({ slug }) => ({
    url: `${process.env.HOST}/events/${slug}`,
    lastModified: new Date().toISOString(),
  }));
 
  const _routes = routes.map((route) => ({
    url: `${process.env.HOST}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [..._routes, ...posts];
}