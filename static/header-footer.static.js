import { FaFacebook, FaPaperPlane, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const headerLinks = {
    Home: '/',
    Features: [
        {
            title: 'Dollar Cost Averaging',
            icon: 'dollar-cost.png',
            route: '/features/dollar-cost-averaging',
            description:'Spread the purchase of an asset over an extended period.'
        },
        {
            title: 'Group Savings',
            icon: 'group-saving.png',
            route: '/features/group-saving',
            description:'Create a savings plan and invite others to join.'
        },
        {
            title: 'USD Wallet',
            icon: 'usd-wallet.png',
            route: '/features/usd-wallet',
            description:'Save in USD and send USD to anyone anywhere in the world.'
        },
        {
            title: 'Nob Credit',
            icon: 'nob-credit.png',
            // scale: true,
            route: '/features/nob-credit',
            description:'Take a loan for up to 12 months.'
        },
        {
            title: 'Bank Withdrawal',
            icon: 'bank-withdrawal.png',
            scale: true,
            route: '/features/bitnob-business',
            description:'Make withdrawals to your bank account with ease.'
        },
    ],
    Business: '/business',
    Company: [
        {title: "About", route:"/about-us"},
        {title: "Careers", route:"/careers"},
        {title: "Learn", route:"/learn"},
        {title: "FAQs", route:"/faqs"},
        {title: "Referral Leader Board", route:"/referral"},
    ]
}

const footerLinks = {
    links: {
        Company: [
            {title: "About", route:"/about-us"},
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
    description: `Bitnob is not a custodian, depository institution, fiduciary or bank. Your assets with Bitnob are not insured by any insurance plan. Note that trading or using crypto assets carry significant risks. Bitnob does not provide any financial advice, no information on this website should be considered as such`
}


export {
    headerLinks,
    footerLinks
}
