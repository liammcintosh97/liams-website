import Link from 'next/link'

export default function Event({title,slug}){
  return (
    <Link href={`events/${slug}`}>
      <h3>{title}</h3>
    </Link>
  )
}