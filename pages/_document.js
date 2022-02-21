import * as gtag from 'lib/gtag'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class BitNobDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel='icon' href='/svgs/logo.svg' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="true" />
					<link
						href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
						rel='stylesheet'
					/>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						strategy='afterInteractive'
						src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
					/>
					<script
						id='gtag-init'
						strategy='afterInteractive'
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${gtag.GA_TRACKING_ID}', {
								page_path: window.location.pathname,
								});
							`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default BitNobDocument
