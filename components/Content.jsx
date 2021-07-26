import { useAuth } from '../lib/auth'

export const Public = (props) => {
  const auth = useAuth()

  return auth.loading ? '' : (
    <>
      { !auth.user ? props.children : '' }
      { auth.user.role == 'user' ? props.children : '' }
    </>
  )
}

export const Members = (props) => {
  const auth = useAuth()

  return auth.loading ? '' : (
    <>
      { auth.user.role == 'member' ? props.children : '' }
    </>
  )
}

export const Staff = (props) => {
  const auth = useAuth()

  return auth.loading ? '' : (
    <>
      { auth.user.role == 'staff' ? props.children : '' }
    </>
  )
}

export const Admin = (props) => {
  const auth = useAuth()

  return auth.loading ? '' : (
    <>
      { auth.user.role == 'admin' ? props.children : '' }
    </>
  )
}