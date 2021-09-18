import { 
  BitNobButton,
  BitNobContainer, 
  BitNobLink, 
  getLayout, 
  Page 
} from '../components';

import { 
  Arrow, 
  Arrow2, 
  Bolt, 
  Trace1, 
  Trace2, 
  Trace3, 
  Trace4, 
  PlayButton,
  Quote,
  Circle, 
  AppStore, 
  Dots,
  ArrowOutline,
  PlayStore, 
  Dollar, 
  People, 
  Shield 
} from "../public";
import styles from '../styles/Home.module.css';


const data = {    
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
    heading: "How it works",
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
        description:`No other  platform allows people to start for free and grow their wealth as their business grows. More importantly, Bitnob doesn't charge you a portion of your profits as your business grows!`,
        author: "Bernard Parah",
        position: "CEO Bitnob"
      },
      {
        description:`No other  platform allows people to start for free and grow their wealth as their business grows. More importantly, Bitnob doesn't charge you a portion of your profits as your business grows!`,
        author: "Bernard Parah",
        position: "CEO Bitnob"
      },
      {
        description:`No other  platform allows people to start for free and grow their wealth as their business grows. More importantly, Bitnob doesn't charge you a portion of your profits as your business grows!`,
        author: "Bernard Parah",
        position: "CEO Bitnob"
      },
      {
        description:`No other  platform allows people to start for free and grow their wealth as their business grows. More importantly, Bitnob doesn't charge you a portion of your profits as your business grows!`,
        author: "Bernard Parah",
        position: "CEO Bitnob"
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

const Home = ()=> {
  const { solutionSection, howItWorks, seeInAction, reviews, business, slides, preFooter } = data

  return (
    <Page title="Welcome to BitNob">
      <div className={`mt-32 flex flex-nowrap ${styles.landing}`}>
        <BitNobContainer className="flex-1">
          <div className="flex justify-center">
            <div style={{maxWidth:"500px"}} className="">
              <h1 className="text-black leading-tight text-6xl font-gordita font-extraBold">
                <span className="italic">Freedom</span> for your money
              </h1>
              <p className="mt-6 text-md text-gray-100">
                Making money moves has never been easier. 
                Save and Invest with ease in Bitcoin, send, receive and get loans in cash when you need it. 
              </p>
              <div className="flex space-x-4 items-center mt-6">
                <BitNobLink to="#">
                  <AppStore />
                </BitNobLink>
                <BitNobLink to="#">
                  <PlayStore />
                </BitNobLink>
              </div>
            </div>
          </div>
        </BitNobContainer>
        <div className={`relative ${styles.landing_cover}`}>
          <div className={`${styles.artboard} rounded-l-md w-full`}>
            <img src="/images/smartphone.png" alt="smatphone" className={styles.phone} />
          </div>
        </div>
      </div>


      <BitNobContainer>
        <div className="flex space-x-24">
          <div className="max-w-lg">
            <img src={solutionSection.image} alt="solution" />
          </div>
          <div className="max-w-xl xl:max-w-2xl">
            <h2 className="font-bold text-5xl font-gordita leading-tight">{solutionSection.heading}</h2>
            <p className="text-md mt-4 font-quicksand text-gray-200">{solutionSection.description[0]} <br /> {solutionSection.description[1]}</p>
            <div className="space-y-6 mt-20">
              {
                solutionSection.list.map(({ icon, title, description })=> (
                  <div key={title} className="flex space-x-6 items-center">
                    <div style={{minWidth:"7rem"}} className="h-28 w-28 rounded-3xl flex justify-center items-center bg-green-50">
                      {icon}
                    </div>
                    <div style={{borderColor:"rgba(239, 241, 241, 1)"}} className="px-10 py-6 border rounded-3xl">
                      <h4 className="text-xl font-gordita font-bold">{title}</h4>
                      <p className="mt-2 text-gray-200">{description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </BitNobContainer>

      <div className="relative">
        <div className=" lg:max-w-3xl 2xl:max-w-5xl right-0 h-96 w-full bg-cover bg-no-repeat -top-32 absolute" style={{backgroundImage:`url(${howItWorks.cover})`}} />
        <BitNobContainer>
          <div className="bg-green-50 mt-48 rounded-2xl px-20 pb-16 pt-10">
            <div className="flex space-x-10 items-center">
              <div className="max-w-sm">
                <h2 className="font-bold text-5xl text-black font-gordita mb-8">{howItWorks.heading}</h2>
                <p className="mt-2 text-md text-gray-200 font-quicksand">{howItWorks.description}</p>
              </div>
            </div>
            <div className="flex mt-28 space-x-10 justify-center mb-10">
              {
                howItWorks.list.map(({title, description, icon})=> (
                  <div key={title} className="space-y-4 max-w-xs">
                    <span className="block w-min" style={{transform: title === "Loans" && "rotate(180deg)"}}>{icon}</span>
                    <h4 className="font-bold text-black text-md font-gordita">{title}</h4>
                    <p className="text-gray-200 pb-1 block font-quicksand">{description}</p>
                    <BitNobLink className="font-bold text-gray-200">Learn More</BitNobLink>
                  </div>
                ))
              }
            </div>
          </div>
        </BitNobContainer>
      </div>

      <div style={{minHeight:"1000px"}} className="mt-28">
        <BitNobContainer>
          <div className="flex flex-col items-center justify-center relative">
            <div className="flex space-x-4 mb-2">
              {
                slides.map(({ trace, title })=> {
                  return(
                    <div className="relative">
                      <div 
                        style={{borderColor:"rgba(239, 241, 241, 1)"}} 
                        className="px-14 py-4  text-black font-bold border font-gordita text-lg rounded-3xl">
                        {title}
                        <span className="block left-1/5 top-full absolute">{trace}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="flex ml-8 mt-40">
                {
                  slides.map(({image}, i)=> {
                    const style = {
                      height: "550px",
                      marginTop: `-${[1,2].includes(i) ? "90" : ""}px`,
                      marginLeft: `-${i < 2 ? "40" : "44"}px`,
                      transform: `rotate(${i < 2 ? "-18" : "15"}deg)`,
                    }
                    
                  return(
                    <img 
                      style={{left: i ? 20 : 0 }} 
                      src={image} 
                      style={style} 
                      className="max-w-xs top-32 z-10" />
                  )})
                }
            </div>
            <div className="flex w-full -mt-60 justify-around items-center">
              <Arrow2 className="z-20 hover:opacity-80 transition-all duration-150 cursor-pointer" />
              <Arrow2 style={{transform: "rotate(209deg)"}} className="z-20 transform hover:opacity-90 transition-all duration-150 cursor-pointer" />
            </div>
            <Circle className="max-w-3xl top-10 absolute" />
          </div>
        </BitNobContainer>
      </div>
      
      <div className="mt-30">
        <BitNobContainer>
          <div className="max-w-md text-center mx-auto">
            <h2 className="font-bold text-5xl text-black font-gordita mb-2">{seeInAction.heading}</h2>
            <p className="text-md text-gray-200 font-quicksand">{seeInAction.description}</p>
          </div>
          <div style={{borderRadius:"68px"}} className="bg-green-200 relative max-w-6xl mx-auto mt-20">
            <img src={seeInAction.image} alt="video" />
            <PlayButton style={{transform: "translate(-50%, -50%) scale(.8)"}} className="absolute cursor-pointer animate-pulse left-1/2 top-1/2" />
          </div>
        </BitNobContainer>
      </div>
      
      <div className={`mt-40 bg-gradient-to-b from-white via-green-100  relative ${styles.reviews}`}>
        <BitNobContainer>
          <div className="max-w-2xl text-center mx-auto"> 
            <div className="text-center">
              <h2 className="font-bold leading-tight text-5xl text-black font-gordita mb-2">{reviews.heading}</h2>
              <p className="text-md text-gray-200 font-quicksand">{reviews.description}</p>
            </div>
            <div className="relative mt-28 flex mx-auto max-w-2xl">
              {
                reviews.comments.map(({description, position, author}, i)=> {
                  const styles = {
                    top: `${i * 35}px`,
                    zIndex: reviews.comments.length - i,
                    transform: `scale(${1 - i/10})`,
                    opacity: `1 - ${i/10}`,
                    boxShadow:"0px 18px 52.8537px rgba(63, 177, 181, 0.16)"
                  }

                  return (
                    <div style={styles} className="text-center absolute rounded-xl bg-white p-12 py-9 flex flex-col items-center">
                      <Quote className="absolute transform scale-75 -top-1" />
                      
                      <p className="text-xl mt-8 text-gray-300 font-quicksand">{description}</p>
                      <span className="block mt-12 text-lg">
                        <b>{author}</b> - <span>{position}</span>
                      </span>
                    </div>
                  )
                })
              }
              <Dots className="absolute -top-8 -right-32" />
              <Dots variant="green" className="absolute top-52 -left-28" />
            </div>
            <div className=" absolute transform left-1/2 -translate-x-1/2 space-x-10 -bottom-10 flex w-full max-w-sm justify-center items-center mt-20">
                <ArrowOutline role="button" tabIndex="0" className="transform scale-75 transition-all duration-100 hover:shadow-md rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-black" />
                <ArrowOutline role="button" tabIndex="0" className="transform -rotate-180 scale-75 transition-all duration-100 hover:shadow-md rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-black" />
            </div>
            {
                reviews.assets.map((a, i)=> {
                  const loci = {
                    0: {top:"10%", left:"15%"},
                    1: {top:"10%", right:"23%"},
                    2: {top:"50%", right:"5%"},
                    3: {bottom:"0%", right:"12%"},
                    4: {bottom:"0", left:"14%"},
                    5: {top:"45%", left:"5%"},
                  }

                  return <img src={a} style={loci?.[i]} alt="avatar" className="absolute z-30" />
                })
              }
          </div>
        </BitNobContainer>
      </div>

      <div className="my-40 max-w-7xl mx-auto">
        <BitNobContainer>
          <div className="max-w-md text-center mx-auto">
            <h2 className="font-bold text-5xl text-black font-gordita mb-2">{business.heading}</h2>
            <p className="text-md text-gray-200 font-quicksand">{business.description}</p>
          </div>
          <div className="mt-14">
            <img src={business.image} alt="business" />
            <BitNobButton className="mt-6 max-w-xs w-max mx-auto">Learn More</BitNobButton>
          </div>
        </BitNobContainer>
      </div>

      <div className="bg-black mt-20 py-12">
        <BitNobContainer>
          <div className="flex max-w-6xl mx-auto space-x-6">
            {
              preFooter.map(({title, description})=> (
                <div key={title} className="p-6 flex-1 rounded-3xl bg-white">
                  <h3 className="text-lg font-gordita font-bold mb-3">{title}</h3>
                  <p className="text-gray-200">{description}</p>
                </div>
              ))
            }
          </div>
          <div className="flex space-x-4 justify-center items-center mt-8">
            <BitNobLink className="border border-gray-500 rounded-md" to="#">
              <AppStore />
            </BitNobLink>
            <BitNobLink className="border border-gray-500 rounded-md" to="#">
              <PlayStore />
            </BitNobLink>
          </div>
        </BitNobContainer>
      </div>
    </Page>
  )
}

Home.getLayout = getLayout;
export default Home;
