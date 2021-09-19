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
      <div className={` mt-14 2xl:mt-24 flex flex-nowrap ${styles.landing}`}>
        <BitNobContainer className="flex-1">
          <div className="flex self-center pt-20 justify-center">
            <div style={{maxWidth:"450px"}} className="">
              <h1 className="text-black leading-tight text-5xl xl:text-6xl font-gordita font-black">
                <span className="italic">{landing.heading[0]}</span> {landing.heading[1]}
              </h1>
              <p className="mt-6 max-w-md text-sm xl:text-md text-bitGray-100">{landing.description}</p>
              <div className="flex space-x-4 items-center mt-8">
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
            <img src={landing.cover} alt="smatphone" className={`${styles.phone}`} />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Landing;
