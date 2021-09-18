import { Bolt, FaqSvg, NobCredit, People, Savings, Shield, Usd, Wallet } from "../public";

const mockData = {
    headerLinks: {
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
                route: '/credit',
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
    },
    footerLinks: {
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
    solutionSection: {
        image: '/images/solution.png',
        heading: `We’re the solution you’ve been waiting for`,
        description: [`Keeping money in USD and Bitcoin has never been easier`, 'Don’t just take our word for it.'],
        list: [
            {
                title: "Lightening Fast Transactions",
                description: "Conduct transactions faster, less costly, and more effieciently.",
                icon: <Bolt />
            },
            {
                title: "Industry Standard Security",
                description: `With us, you’re in safe hands. Our industry standard security features guarantee the safety of your funds.`,
                icon: <Shield />
            },
            {
                title: "Round the Clock Support",
                description: `We’re ready to help whenever you need us. And we curated a fine list of resources to help you make the most of the app`,
                icon: <People />
            },
        ]
    }
}


export default mockData;