import { homeData } from 'static';
import { 
  BitNobContainer, 
  BitNobLink, 
  Page ,
} from '../';

import { AppStore, PlayStore } from "public";
import styles from 'styles/Home.module.css';

const Landing = ()=> {
  const { landing } = homeData;

  return (
    <Page title="Welcome to BitNob">
      <div className="relative xl:mt-10 overflow-hidden">
        <BitNobContainer>
          <div className="flex flex-col lg:flex-row w-full pt-16 md:pt-20 lg:justify-between">
            <div className=" max-w-md flex-1">
              <h1 className="text-black leading-tight text-5xl xl:text-6xl font-gordita font-black">
                <span className="italic">{landing.heading[0]}</span> {landing.heading[1]}
              </h1>
              <p className="mt-6 max-w-md text-xs md:text-sm xl:text-md text-bitGray-100">{landing.description}</p>
              <div className="flex space-x-2 md:space-x-4 items-center mt-12 md:mt-8">
                <BitNobLink to="#">
                  <AppStore className="w-38 xl:w-auto" />
                </BitNobLink>
                <BitNobLink to="#">
                  <PlayStore className="w-38 xl:w-auto" />
                </BitNobLink>
              </div>
            </div>
            <div className={`flex-1 mt-10 md:mt-8 lg:mt-0 relative ${styles.landing_cover}`}>
              <img src={landing.cover} alt="smatphone" className="z-10 relative phone" />
            </div>
          </div>
        </BitNobContainer>
        <div className={`${styles.product_bg} bg-bitGreen-temp z-0 absolute rounded-3xl`} />
      </div>
    </Page>
  )
}

export default Landing;
