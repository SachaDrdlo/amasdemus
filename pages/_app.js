import '../styles/global/globals.scss'
import { useRouter } from 'next/router';
import React from 'react'

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState(false);
  React.useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <>
      {pageLoading
        ?
        <div className='loading-container'>
          <img className='loading-container-logo' src='../img/logos/logo-picto-green.svg' alt="" />
        </div>
        :
        <Component {...pageProps} />
      }
    </>
  )
}

export default MyApp
