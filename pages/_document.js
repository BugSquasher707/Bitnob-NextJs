import * as gtag from 'lib/gtag'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class BitNobDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
                {/* eslint-disable-next-line */}
					<link rel='icon' href='/svgs/logo.svg' />
                {/* eslint-disable-next-line */}
					<link rel='preconnect' href='https://fonts.googleapis.com' />
                {/* eslint-disable-next-line */}
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="true" />
                {/* eslint-disable-next-line */}
					<link
						href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
						rel='stylesheet'
					/>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
                {/* eslint-disable-next-line */}
					<script
						strategy='afterInteractive'
						src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
					/>
                {/* eslint-disable-next-line */}
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
