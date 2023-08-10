import {AuthHandler} from '../components/authHandler'

export default async function layout({children}) {
  return (
    <AuthHandler>
      {children}
    </AuthHandler>
  )
}