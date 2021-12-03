import { FaFacebook, FaPaperPlane, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const headerLinks = {
    Home: '/',
    Features: [
        {
            title: 'Dollar Cost Averaging',
            icon: 'dollar-cost.png',
            route: '/dollar-cost-averaging',
            description:'Spread the purchase of an asset over an extended period.'
        },
        {
            title: 'Group Savings',
            icon: 'group-saving.png',
            route: '/group-saving',
            description:'Create a savings plan and invite others to join.'
        },
        {
            title: 'USD Wallet',
            icon: 'usd-wallet.png',
            route: '/usd-wallet',
            description:'Save in USD and send USD to anyone anywhere in the world.'
        },
        {
            title: 'Nob Credit',
            icon: 'nob-credit.png',
            route: '/nob-credit',
            description:'Take a loan for up to 12 months.'
        },
        {
            title: 'Bank Withdrawal',
            icon: 'bank-withdrawal.png',
            scale: true,
            route: '/bank-withdrawal',
            description:'Make withdrawals to your bank account with ease.'
        },
    ],
    Business: '/business',
    Company: [
        {title: "About", route:"/about-us"},
        {title: "Careers", route:"/careers"},
        {title: "FAQs", route:"/faq"},
    ],
    Developers: '/developers',
}

const footerLinks = {
    links: {
        Company: [
            {title: "About", route:"/about-us"},
            {title: "Careers", route:"/careers"},
            {title: "FAQs", route:"https://bitnob.com/faq/"},
        ],
        Legal: [
            {title: "Terms of service", route: '/terms-of-services'},
            {title: "Privacy Policy", route: '/privacy-policy'}
        ]
    },
    socials: {
        facebook: {
            link: "https://web.facebook.com/bitnob",
            icon: <FaFacebook />
        },
        twitter: {
            link: "https://twitter.com/Bitnob_official",
            icon: <FaTwitter />
        },
        Instagram: {
            link: "https://www.instagram.com/bitnob",
            icon: <FaInstagram />
        },
        telegram: {
            link: "https://t.me/bitnobles",
            icon: <FaPaperPlane />
        },
        LinkinIn: {
            link: "https://www.linkedin.com/company/bitnob",
            icon: <FaLinkedinIn />
        },
    },
    description: `Digital currency is not legal tender, is not backed by any federal government and Coinfly accounts are not FDIC insured. While Coinfly and its custodial partners make every effort to keep your money safe and covered, please note that any investment entails risk. The interest rates featured on this page vary according to the dynamics of digital currency markets and are subject to change at any time.`
}


export {
    headerLinks,
    footerLinks
}
