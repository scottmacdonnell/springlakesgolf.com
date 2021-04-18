import { AuthProvider } from '../lib/auth'

import '../styles/globals.scss'

function springlakesgolf({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default springlakesgolf