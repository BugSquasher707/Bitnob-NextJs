import { BitNobContainer, BitNobLink, getLayout, Page } from '../components';
import { AppStore, PlayStore } from '../public';
import styles from '../styles/Home.module.css';
import { mockData } from '../static';

const Home = ()=> {
  const { solutionSection } = mockData

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
        <div className={`${styles.landing_artboard} rounded-l-md w-full`}>
          <img src="/images/smartphone.png" alt="smatphone" className={styles.phone} />
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
                  <div className="flex space-x-6 items-center">
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
    </Page>
  )
}

Home.getLayout = getLayout;
export default Home;
