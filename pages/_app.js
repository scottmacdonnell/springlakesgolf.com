import Head from 'next/head'
import { AuthProvider } from '../lib/auth'

import '../styles/globals.scss'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default App
