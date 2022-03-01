import { FaFacebook, FaPaperPlane, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const headerLinks = {
    Home: '/',
    Features: [
        {
            title: 'Savings',
            icon: 'group-saving.png',
            route: '/savings',
            description: 'Easily save for yourself or your kids in Bitcoin and USD.'
        },
        // {
        //     title: 'Lightning Address',
        //     icon: 'lightning-address.png',
        //     route: '/lightning-address',
        //     description:'Receive money via the lightning network without having to send invoices.'
        // },
        // {
        //     title: 'Virtual Dollar Cards',
        //     icon: 'virtual-dollar-card.png',
        //     route: '/virtual-dollar-card',
        //     description:'Perform any dollar transactions with your card.'
        // },
        {
            title: 'Nob Credit',
            icon: 'nob-credit.png',
            route: '/nob-credit',
            description: 'Take a loan for up to 12 months.'
        },
    ],
    Business: '/business',
    Company: [
        { title: "About", route: "/about-us" },
        { title: "Blog", route: "/blogs" },
        // {title: "Careers", route:"/careers"},
        // {title: "FAQs", route:"/faq"},
    ],
    Developers: '/developers',
}

const footerLinks = {
    links: {
        Company: [
            { title: "About", route: "/about-us" },
            { title: "Blogs", route: "/blogs" },
            // {title: "Careers", route:"/careers"},
            // {title: "FAQs", route:"/faq"},
        ],
        Legal: [
            { title: "Terms of service", route: '/terms-of-services' },
            { title: "Privacy Policy", route: '/privacy-policy' }
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
            link: "https://www.instagram.com/bitnob/",
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
