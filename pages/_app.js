import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

import { AuthProvider } from '../lib/auth'
import * as gtag from '../lib/gtag'

import '../styles/globals.scss'

export default function SpringLakesGolfClub({ Component, pageProps }) {
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>

      <AuthProvider>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AuthProvider>
    </>
  )
}

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}