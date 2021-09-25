import { CogIcon, InvoiceIcon, PeopleIcon, TransactionIcon, WalletIcon } from "public"


const businessPageData = {
    section1: {
        heading: "Accept business payments in Bitcoin",
        description: "Bitnob for Businesses is an enterprise platform that enables businesses accept payments for services in Bitcoin",
        cover: "/svgs/business-page-cover1.svg",
    },
    section2:{
        heading: "All the features your business needs",
        description: "Bitnob for Business has everything your business needs for daily use",
        cover: "/svgs/business-page-cover2.svg",
    },
    dataList : [
        {
            title: "Transactions",
            icon: <TransactionIcon />,
            description: `You can use Bitnob for business via a dashboard or via our public API for businesses that wants to integrate our services on their own platform`
        },
        {
            title: "Invoices",
            icon: <InvoiceIcon />,
            description: `You can use Bitnob for business via a dashboard or via our public API for businesses that wants to integrate our services on their own platform`
        },
        {
            title: "Customers",
            icon: <PeopleIcon />,
            description: `You can use Bitnob for business via a dashboard or via our public API for businesses that wants to integrate our services on their own platform`
        },
        {
            title: "Payment Processes",
            icon: <TransactionIcon />,
            description: `With Bitnob for business, payments can either be processed Onchain or via the Lightning Network.`
        },
        {
            title: "API Integration",
            icon: <CogIcon />,
            description: `Our API integration enables businesses build on our in house infrastructure. It is a seamless process with our detailed documentation by your side.
            `
        },
        {
            title: "Wallet Services",
            icon: <WalletIcon />,
            description: `We own our bitcoin and Lightning Infrastructure which handles the Bitnob Payment Process and enables us offer Cryptocurrency Wallet services to businesses that wishes to use Bitnob for Business`
        },
    ],
    reviews: [
        {
            author: "Mide Ajayi",
            description: `Using Bitnob for business has made......grow their wealth as their business grows. More importantly, Bitnob doesn't charge you a portion of your profits as your business grows!`
        },
        {
            author: "Michael Snowden",
            description: `Using Bitnob for business has made......grow their wealth as their business grows. More importantly, Bitnob doesn't charge you a portion of your profits as your business grows!`
        },
    ],
    section3: {
        title: "Make your business operations seamless",
        cover: "/svgs/business-page-foot.svg",
    }
}

export default businessPageData