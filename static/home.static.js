
  import { 
    Arrow, 
    Bolt, 
    Trace1, 
    Trace2, 
    Trace3, 
    Trace4, 
    Dollar, 
    People, 
    Shield 
  } from "../public";
  
  
  const homeData = {   
    landing: {
      assets: '/images/artboard.png',
      cover: "/images/smartphone.png",
      heading: ["Freedom", "for your money"],
      description: `Making money moves has never been easier. 
      Save and Invest with ease in Bitcoin, send, receive and get loans in cash when you need it.`
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
    },
    howItWorks: {
      cover: "/images/how-it-works.png",
      heading: "How It Works",
      description: "We can help you save and manage your money in a way that maximizes the value of your returns.",
      list: [
          {
              title:"Savings",
              description: `Save in Bitcoin with (Dollar Cost Averaging)DCA. Learn More`,
              icon: <Arrow />
          },
          {
              title:"Loans",
              description: `Save in Bitcoin with (Dollar Cost Averaging)DCA. Learn More`,
              icon: <Arrow />
          },
          {
              title:"Withdrawal",
              description: `Withdraw your BTC to USD and USD to your bank account without stress. Learn More`,
              icon: <Dollar />
          },
      ]
    },
    slides: [
      { title: "Lightning Transactions", image: "/images/phone-0.png", trace: <Trace1 /> },
      { title: "Group Savings", image: "/images/phone-1.png", trace: <Trace2 /> },
      { title: "Cross Platform Transfers", image: "/images/phone-2.png", trace: <Trace3 />},
      { title: "NobCredit", image: "/images/phone-3.png", trace: <Trace4 />},
    ],
    seeInAction: {
      heading: "See it in action",
      image: '/images/video.png',
      description: "Enough with the talking, why not see for yourself. Have a glimpse of our app in acton."
    },
    reviews: {
      heading: "Designed with your best interest in mind",
      description: "This is why we are most trusted by individuals and businesses",
      assets: ["/images/r-1.png", "/images/r-2.png", "/images/r-3.png", "/images/r-4.png", "/images/r-5.png", "/images/r-6.png"],
      comments: [
        {
          description:`No other platform allows people to start for free and grow their wealth as their business grows. More importantly, Bitnob doesn't charge you a portion of your profits as your business grows!`,
          author: "Bernard Parah",
          position: "CEO Bitnob"
        },
        {
          description:`Platform allows  people to start for free and grow their wealth as their business grows. More importantly, No other  platform a Bitnob doesn't charge you a portion of your profits as your business grows!`,
          author: "Bernard Parah",
          position: "CEO EcoBank"
        },
        {
          description:`Other  platform allows people to start for free and grow their wealth as their business grows. More importantly, Bitnob doesn't charge you a portion of your profits as your business grows!`,
          author: "Bernard Parah",
          position: "CEO Patricia"
        },
        {
          description:`Allows people no other  platform a to start for free and grow their wealth as their business grows. More importantly, Bitnob doesn't charge you a portion of your profits as your business grows!`,
          author: "Bernard Parah",
          position: "CEO WYreOut"
        },
      ]
    },
    business: {
      image: "/svgs/business-cover.svg",
      heading: "See it in action",
      description: "Bring your business onboard for to experience Secure bitcoin payment processing infrastructure."
    },
    preFooter: [
      {
        title: "We're a dedicated team",
        description: "focused on making the preservation of your wealth super easy."
      },
      {
        title: "Let's help you grow",
        description: "we’re concerned with your best interests. So let us help you grow."
      },
      {
        title: "Getting you started is simple",
        description: "All you need is to have you phone handy and download the app from your appstore."
      }
    ]
  }

export default homeData;