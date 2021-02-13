import Head from 'next/head'

export default function Page({
  children,
  className,
  pageName,
  slug,
  description,
  imageURL,
}) {
  const siteName = 'Spring Lakes Golf Club';
  const siteURL = 'https://springlakesgolf.vercel.app';
  const siteDescription = 'A private golf club offering great rates and 3 exceptional championship golf courses just north of the city of Toronto.';
  const siteImage = `${siteURL}/images/og.jpg`;

  const formattedPageName = pageName ? `${pageName} - ${siteName}` : siteName;
  const formattedURL = slug ? `${siteURL}/${slug}` : siteURL;
  const formattedDescription = description ? description : siteDescription;
  const formattedImage = imageURL ? imageURL : siteImage;

  return (
    <div className={className}>
      <Head>
        {/* Main */}
        <title>{formattedPageName}</title>
        <meta
          name='description'
          content={formattedDescription}
          key='description'
        />

        {/* Open Graph */}
        <meta
          name='og:site_name'
          property='og:site_name'
          content={siteName}
          key='ogsitename'
        />
        <meta
          name='og:title'
          property='og:title'
          content={formattedPageName}
          key='ogtitle'
        />
        <meta
          name='og:url'
          property='og:url'
          content={formattedURL}
          key='ogurl'
        />
        <meta
          name='og:image'
          property='og:image'
          content={formattedImage}
          key='ogimage'
        />
        <meta
          name='og:description'
          property='og:description'
          content={formattedDescription}
          key='ogdescription'
        />

        {/* Twitter Cards */}
        <meta name='twitter:title' content={formattedPageName} key='twtitle' />
        <meta
          name='twitter:description'
          content={formattedDescription}
          key='twdescription'
        />
        <meta name='twitter:image' content={formattedImage} key='twimage' />
      </Head>
      {children}
    </div>
  );
}
