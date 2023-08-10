import styles from './page.module.scss'
import LogoutForm from '../components/logoutForm'
import AdminActions from '../components/adminActions'


export const metadata = {
  title: 'Admin',
}

export default async function Page() {

  return (
    <div>
      <h1>Admin Page</h1>
      <LogoutForm/>
      <AdminActions/>
    </div>
  )
}