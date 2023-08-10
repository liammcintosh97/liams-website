import styles from './page.module.scss'
import LogoutForm from '../components/logoutForm'
import AdminActions from '../components/adminActions'


export const metadata = {
  title: 'Admin',
}

async function getData() {
  const res = await fetch(`${process.env.HOST}/api/events`)
  return res.json()
}

export default async function Page() {
  //const data = await getData()

  return (
    <div>
      <h1>Admin Page</h1>
      <LogoutForm/>
      <AdminActions/>
    </div>
  )
}