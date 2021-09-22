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
      <div className={` md:mt-4 2xl:mt-24 flex flex-col lg:flex-row flex-nowrap mb-4 ${styles.landing}`}>
        <BitNobContainer className="flex-1">
          <div className="flex self-center md:ml-10 pt-16 md:pt-20 lg:justify-center">
            <div className="max-w-md">
              <h1 className="text-black leading-tight text-5xl xl:text-6xl font-gordita font-black">
                <span className="italic">{landing.heading[0]}</span> {landing.heading[1]}
              </h1>
              <p className="mt-6 max-w-md text-xs md:text-sm xl:text-md text-bitGray-100">{landing.description}</p>
              <div className="flex space-x-4 items-center mt-12 md:mt-8">
                <BitNobLink to="#">
                  <AppStore className="w-36 md:w-auto" />
                </BitNobLink>
                <BitNobLink to="#">
                  <PlayStore className="w-36 md:w-auto" />
                </BitNobLink>
              </div>
            </div>
          </div>
        </BitNobContainer>
        <div className={`relative mt-20 lg:mt-16 ${styles.landing_cover}`}>
          <div className={`${styles.artboard} transform scale-110 lg:scale-100`}></div>
          <img src={landing.cover} alt="smatphone" className={`${styles.phone}`} />
        </div>
      </div>
    </Page>
  )
}

export default Landing;
