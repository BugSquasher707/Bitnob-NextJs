import Head from 'next/head'
import React from 'react'

const Page = ({ title, children }) => (
    <React.Fragment>
        <Head>
            <title>
                {title}
            </title>
        </Head>
        <React.Fragment>
            {children}
        </React.Fragment>
    </React.Fragment>
)

export default Page