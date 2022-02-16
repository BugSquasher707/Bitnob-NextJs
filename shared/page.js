import Head from 'next/head'
import React from 'react'

const Page = ({ title, children }) => (
    <React.Fragment>
        <Head>
            <title>
                {title} - Buy, Save & Invest In Bitcoin Easily!
            </title>
            <meta charset="UTF-8" />
            <meta name="description" content="Now you can automatically save in Bitcoin with as little as $1 today!" />
            <meta name="keywords" content="Bitcoin, Save, Invest" />
        </Head>
        <React.Fragment>
            {children}
        </React.Fragment>
    </React.Fragment>
)

export default Page