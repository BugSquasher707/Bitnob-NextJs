import 'tailwindcss/tailwind.css'
import '../styles/global.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import SEO from '@bradgarropy/next-seo'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

function BitNob({ Component, pageProps }) {
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
	const getLayout = Component.getLayout || ((page) => page)
	return getLayout(
		<>
			<SEO
				title='Welcome to Bitnob'
				description='Bitnob is a delightful way to save, borrow, pay, receive, and get paid in Bitcoin on time'
				keywords={['Savings', 'Bitcoin', 'DCA', 'Dollar Cost Averaging', 'Lightning Network', 'Lightning', 'USD Savings', 'Bitcoin Savings',' Automatically Save in Bitcoin', 'Buy', 'Sell', 'Send', 'Receive', 'Virtual Cards', 'Loans', 'Bitcoin Loans', 'APIs', 'Payments', 'Wallet', 'Accept payment in bitcoin', 'Remittance']}
				icon='https://bitnob.com/images/bitnob_ico.ico'
				twitter={{
					card: 'summary',
					site: '@bitnob_official',
					image: 'https://bitnob.com/images/featured_image_bitnob.png',
				}}
        facebook={{
          image: 'https://bitnob.com/images/featured_image_bitnob.png',
					url: 'https://bitnob.com',
					type: 'website'
        }}
			/>
			<Component {...pageProps} />
		</>,
	)
}

export default BitNob
