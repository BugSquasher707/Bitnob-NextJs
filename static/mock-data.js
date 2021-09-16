import { FaqSvg, NobCredit, Savings, Usd, Wallet } from "../public";

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
    }
}

export default mockData;