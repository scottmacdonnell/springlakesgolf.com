import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

import { AuthProvider } from '../lib/auth'

import '../styles/globals.scss'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function SpringLakesGolfClub({ Component, pageProps }) {
  const router = useRouter()
  return (

    <AuthProvider>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </AuthProvider>
  )
}

export default SpringLakesGolfClub