import styles from './page.module.scss'
import LoginForm from '@/app/components/loginForm' 

export const runtime = 'edge'

export const metadata = {
  title: 'Admin',
}

export default async function Page() {
  
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm/>
    </div>
  )
}