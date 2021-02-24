import Head from 'next/head'
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
    <>
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      </Head>
      <AuthProvider>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AuthProvider>
    </>
  )
}

export default SpringLakesGolfClub