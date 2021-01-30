import Head from 'next/head'

import Navbar from '../components/Navbar'
import { useAuth } from '../lib/auth'

export default function Index() {
  const auth = useAuth()
  return (
    <div className="Index">
      <Head>
        <title>Spring Lakes Golf Club</title>
        <meta name="description" content="A private golf club offering great rates and 3 exceptional championship golf courses just north of the city of Toronto." key="description" />

        {/* Open Graph */}
        <meta name="og:title" property="og:title" content="Spring Lakes Golf Club" key="ogtitle" />
        <meta name="og:url" property="og:url" content="https://springlakesgolf.com/about" key="ogurl" />
        <meta name="og:image" property="og:image" content="#" key="ogimage" />
        <meta name="og:description" property="og:description" content="A private golf club offering great rates and 3 exceptional championship golf courses just north of the city of Toronto." key="ogdescription" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content="Spring Lakes Golf Club" key="twtitle" />
        <meta name="twitter:description" content="A private golf club offering great rates and 3 exceptional championship golf courses just north of the city of Toronto." key="twdescription" />
        <meta name="twitter:image" content="#" key="twimage" />
      </Head>

      <header>
        <Navbar />
        <br/>
      </header>

      <main>
        <h1>Spring Lakes Golf Club</h1>
        <p>A private golf club offering great rates and 3 exceptional championship golf courses just north of the city of Toronto.</p>
        <br/><br/>

        <div>
          <h2>Auth</h2>
          {auth.user ? (
            <div>
              <p>UID: {auth.user.uid}</p>
              <p>Email: {auth.user.email}</p>
              <p>Name: {auth.user.name}</p>
              <p>Provider: {auth.user.provider}</p>
              <p>Photo URL: {auth.user.photoUrl}</p>
              <button onClick={(e) => auth.signOut()}>Sign Out</button> 
            </div>
          ) : (
            <div>
              <button onClick={(e) => auth.signInWithGoogle()}>signInWithGoogle</button>
              <button onClick={(e) => auth.signInWithTwitter()}>signInWithTwitter</button>
              <button onClick={(e) => auth.signInWithFacebook()}>signInWithFacebook</button>
            </div>
          )}
          <br/>
        </div>

      </main>

      <footer>
        <br/>
        <p>© 2021 Spring Lakes Golf Club. All rights reserved.</p>
      </footer>
    </div>
  )
}