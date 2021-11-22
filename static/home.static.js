
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
      heading: ["It's time to taste freedom for your money"],
      description: [
        `We're on a mission to make your money move much easier.`, 
        `Save and Invest with ease in Bitcoin. Send, Receive money across borders and get loans in cash whenever you need them.`
      ]
    }, 
    solutionSection: {
        image: '/images/solution.png',
        emojis: ['/images/girl-cap.png', '/images/fav.png','/images/black-girl.png','/images/black-man.png'],
        heading: `We’re the solution you’ve been waiting for`,
        description: [`Keeping money in USD and Bitcoin has never been easier`, 'Don’t just take our word for it.'],
        list: [
            {
                title: "Lightening Fast Transactions",
                description: "Powered by the <i>Lightning Network</i>, you get transactions super fast and cheap at the click of a button.",
                icon: <Bolt />
            },
            {
                title: "Industry Standard Security",
                description: `With us, you’re in safe hands. Security and Fraud prevention is the core of our business.
                Our industry-standard security features guarantee the safety of your funds.`,
                icon: <Shield />
            },
            {
                title: "Borderless Account",
                description: `Imagine transactions across borders without stress. Your username is global & with it, you can receive funds from anywhere and get settled in your local currency.`,
                icon: <People />
            },
        ]
    },
    howItWorks: {
      cover: "/images/how-it-works.png",
      heading: "Here's what's in it for you",
      description: "We can help you save and manage your money in a way that maximizes the value of your returns.",
      list: [
          {
              title:"Savings",
              description: `Unsure of when to buy Bitcoin?
              Save in Bitcoin with (Dollar Cost Averaging)DCA. 
              This has been proven to give you the most value on your savings over time.`,
              icon: <Arrow />
          },
          {
              title:"Loans",
              description: `We call this NobCredit. Get cash a loan when you need it using your bitcoins as collateral. This way you don’t always have to sell.`,
              icon: <Arrow />
          },
          {
              title:"Withdrawal",
              description: `We've streamlined getting your money across platforms. At the click of a button, or maybe two, convert cash between BTC, USD, Naira, or Cedis all within a day.`,
              icon: <Dollar />
          },
      ]
    },
    slides: [
      { image: "/images/slide-0.png" },
      { title: "Lightning Transactions", image: "/images/slide-1.png", trace: <Trace1 /> },
      { title: "Group Savings", image: "/images/slide-2.png", trace: <Trace2 /> },
      { title: "Withdrawal", image: "/images/slide-3.png", trace: <Trace3 />},
      { title: "NobCredit", image: "/images/slide-4.png", trace: <Trace4 />},
    ],
    seeInAction: {
      heading: "See it in action",
      image: '/images/video-bg.png',
      description: "Enough with the talking, why not see for yourself. Have a glimpse of our app in acton."
    },
    reviews: {
      heading: "Built with your best interest in mind.",
      description: "You can always bank on us. That is why we are most trusted by individuals and businesses.",
      assets: ["/images/r-1.png", "/images/r-2.png", "/images/r-3.png", "/images/r-4.png", "/images/r-5.png", "/images/r-6.png"],
      comments: [
        {
          id:1,
          description:`No other platform allows people to start for free and grow their wealth as their business grows. More importantly, Bitnob doesn't charge you a portion of your profits as your business grows!`,
          author: "Bernard Parah",
          position: "CEO Bitnob"
        },
      ]
    },
    business: {
      image: "/svgs/business-cover.svg",
      heading: "See it in action",
      description: "We've crafted simple tools to aid the complex needs of your business, from accepting payments in crypto, invoices and payment links, APIs for 3rd party integration, automatic settlements, customer management, and more."
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