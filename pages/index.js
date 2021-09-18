import { BitNobContainer, BitNobLink, getLayout, Page } from '../components';
import { Arrow, Bolt,  AppStore, PlayStore, Dollar, People, Shield } from "../public";
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
  }
}

const Home = ()=> {
  const { solutionSection, howItWorks } = data

  return (
    <Page title="Welcome to BitNob">
      <div className={`mt-20 flex flex-nowrap ${styles.landing}`}>
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
    </Page>
  )
}

Home.getLayout = getLayout;
export default Home;
