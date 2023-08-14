import styles from './page.module.scss'
import LoginForm from '@/app/components/loginForm' 
import { openGraphImage, openGraphBasicFields} from '../../shared-metadata'

const title = 'Login'
const description = "The login page of Liam's website"

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
      <h1>Login Page</h1>
      <LoginForm/>
    </div>
  )
}