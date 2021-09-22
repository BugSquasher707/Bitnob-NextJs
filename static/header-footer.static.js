import { FaqSvg, NobCredit, Savings, Usd, Wallet } from "public"
import { FaFacebook, FaPaperPlane, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const headerLinks = {
    Home: '/',
    Features: [
        {
            title: 'Dollar Cost Averaging',
            icon: <Usd />,
            route: '/',
            description:'Spread the purchase of an asset over an extended period.'
        },
        {
            title: 'Group Savings',
            icon: <Savings />,
            route: '/savings',
            description:'Create a savings plan and invite others to join.'
        },
        {
            title: 'USD Wallet',
            icon: <Wallet />,
            route: '/usd',
            description:'Save in USD and send USD to anyone anywhere in the world.'
        },
        {
            title: 'Nob Credit',
            icon: <NobCredit />,
            route: '/nob-credit',
            description:'Take a loan for up to 12 months.'
        },
        {
            title: 'FAQs',
            icon: <FaqSvg />,
            route: '/faq',
            description:'Got questions? We already answered them.'
        },
    ],
    Business: '/business',
    Company: [
        {title: "About", route:"/"},
        {title: "Careers", route:"/careers"},
        {title: "Learn", route:"/learn"},
        {title: "FAQs", route:"/faqs"},
        {title: "Referral Leader Board", route:"/referral"},
    ]
}

const footerLinks = {
    links: {
        Company: [
            {title: "About", route:"/"},
            {title: "Careers", route:"/careers"},
            {title: "Learn", route:"/learn"},
            {title: "FAQs", route:"/faqs"},
            {title: "Referral Leader Board", route:"/referral"},
        ],
        Legal: [
            {title: "Terms of service", route: '/terms'},
            {title: "Privacy Policy", route: '/privacy'}
        ]
    },
    socials: {
        facebook: {
            link: "https://facebook.com",
            icon: <FaFacebook />
        },
        twitter: {
            link: "https://twitter.com",
            icon: <FaTwitter />
        },
        Instagram: {
            link: "https://instagram.com",
            icon: <FaInstagram />
        },
        Email: {
            link: "email",
            icon: <FaPaperPlane />
        },
        LinkinIn: {
            link: "https://linkindin.com",
            icon: <FaLinkedinIn />
        },
    },
    description: `Digital currency is not legal tender, is not backed by any federal government and Coinfly accounts are not FDIC insured. 
    While Coinfly and its custodial partners make every effort to keep your money safe and covered, please note that any investment entails 
    risk. The interest rates featured on this page vary according to the dynamics of digital currency markets and are subject to change at any time.`
}


export {
    headerLinks,
    footerLinks
}