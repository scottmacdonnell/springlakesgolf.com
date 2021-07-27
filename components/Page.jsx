import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Page({
  children,
  pageName,
  slug,
  description,
  imageURL,
  className,
  noIndex
}) {
  const siteName = 'Spring Lakes Golf Club'
  const siteURL = 'https://springlakesgolf.com'
  const siteDescription = 'A private golf club offering great rates and 3 exceptional championship golf courses just north of the city of Toronto.'
  const siteImage = `${siteURL}/images/og/main.jpg`

  const formattedPageName = pageName ? `${pageName} - ${siteName}` : siteName
  const formattedURL = slug ? `${siteURL}/${slug}` : siteURL
  const formattedDescription = description ? description : siteDescription
  const formattedImage = imageURL ? imageURL : siteImage

  return (
    <>
      <Head>
        <meta name="description" content={formattedDescription} key="description" />
        <meta name="og:site_name" property="og:site_name" content={siteName} key="og:sitename" />
        <meta name="og:title" property="og:title" content={formattedPageName} key="og:title" />
        <meta name="og:url" property="og:url" content={formattedURL} key="og:url" />
        <meta name="og:image" property="og:image" content={formattedImage} key="og:image" />
        <meta name="og:description" property="og:description" content={formattedDescription} key="og:description" />
        <meta name="twitter:title" content={formattedPageName} key="twitter:title" />
        <meta name="twitter:description" content={formattedDescription} key="twitter:description" />
        <meta name="twitter:image" content={formattedImage} key="twitter:image" />
        { noIndex ? <meta name="robots" content="noindex" /> : '' }
        <title>{formattedPageName}</title>
      </Head>
      
      <motion.div initial="exit" animate="enter" exit="exit" className={className} key={className}>
        {children}
      </motion.div>
    </>
  )
}

export const Animation = (props) => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
  
  const pageVariants = {
    exit: { opacity: 0, transition },
    enter: { opacity: 1, transition: { delay: 0.5, ...transition } },
  }

  return (
    <motion.div
      variants={pageVariants}
    >
      {props.children}
    </motion.div>
  )
}