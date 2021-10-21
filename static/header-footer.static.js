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
        {title: "Learn", route:"https://bitnob.com/academy/"},
        {title: "FAQs", route:"https://bitnob.com/faq/"},
        {title: "Referral Leader Board", route:"https://leaderboard.bitnob.com/?_gl=1*1gob7ec*_ga*Nzk4MDIxMTU4LjE2MzI3NjI0MDQ.*_ga_QJNNYZ5R95*MTYzMzY1MDY5NS44LjEuMTYzMzY1MTk5NS4w&_ga=2.15618550.1378171926.1633624459-798021158.1632762404"},
       
    ]
}

const footerLinks = {
    links: {
        Company: [
            {title: "About", route:"/about-us"},
            {title: "Careers", route:"/careers"},
            {title: "Learn", route:"https://bitnob.com/academy/"},
            {title: "FAQs", route:"https://bitnob.com/faq/"},
            {title: "Referral Leader Board", route:"https://leaderboard.bitnob.com/?_gl=1*1gob7ec*_ga*Nzk4MDIxMTU4LjE2MzI3NjI0MDQ.*_ga_QJNNYZ5R95*MTYzMzY1MDY5NS44LjEuMTYzMzY1MTk5NS4w&_ga=2.15618550.1378171926.1633624459-798021158.1632762404"},
        ],
        Legal: [
            {title: "Terms of service", route: 'https://bitnob.com/terms-of-services/'},
            {title: "Privacy Policy", route: 'https://bitnob.com/privacypolicy/'}
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
