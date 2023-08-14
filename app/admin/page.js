import styles from './page.module.scss'
import LogoutForm from '../components/logoutForm'
import AdminActions from '../components/adminActions'
import { openGraphImage, openGraphBasicFields } from '../shared-metadata'

const title = 'Admin'
const description = "The admin page of Liam's website"

export const metadata = {
  title: title,
  description: description,
  openGraph:{
    ...openGraphImage,
    ...openGraphBasicFields,
    title: title,
    description: description
  }
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