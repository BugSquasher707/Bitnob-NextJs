import { homeData } from 'static';
import { 
  BitNobContainer, 
  BitNobLink, 
  Page ,
} from '../';

import { AppStore, PlayStore } from "public";
import styles from 'styles/Home.module.css';
import { bitnobAppleStore, bitnobPlayStore } from 'app-constants';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Landing = ()=> {
  const landingRef = useRef(null)
  const phoneRef = useRef(null)
  const { landing } = homeData;

  useLayoutEffect(()=> {
    gsap.timeline()
    .from(landingRef.current, {
      y: 400,
      duration: .6,
      opacity: 0,
      scaleY: .5
    })
    .to(landingRef.current, {
      y: 0,
      opacity: 1,
      scaleY: 1
    })

    gsap.timeline()
    .from(phoneRef.current, {
      x: 400,
      duration: .6,
      opacity: 0
    })
    .to(phoneRef.current, {
      x: 0,
      opacity: 1
    })
  },[])


  return (
    <Page title="Welcome to BitNob">
      <div className="relative xl:mt-5 overflow-hidden">
        <BitNobContainer>
          <div className="flex flex-col lg:flex-row w-full pt-16 md:pt-20 lg:justify-between">
            <div ref={landingRef} className=" mt-8 max-w-md flex-1">
              <h1 className="text-black leading-tight text-5xl font-gordita font-bold">
                <span className="italic">{landing.heading[0]}</span> {landing.heading[1]}
              </h1>
              <p className="mt-6 max-w-md text-xs md:text-sm xl:text-md text-bitGray-200">{landing.description}</p>
              <div className="flex space-x-2 md:space-x-4 items-center mt-12 md:mt-8">
                <BitNobLink isExternal to={bitnobAppleStore}>
                  <AppStore className="w-38 xl:w-auto" />
                </BitNobLink>
                <BitNobLink isExternal to={bitnobPlayStore}>
                  <PlayStore className="w-38 xl:w-auto" />
                </BitNobLink>
              </div>
            </div>
            <div className={`flex-1 flex justify-end mt-10 md:mt-8 lg:mt-0 relative ${styles.landing_cover}`}>
              <img ref={phoneRef} src={landing.cover} alt="smatphone" className="z-10 relative phone" />
            </div>
          </div>
        </BitNobContainer>
        <div className={`${styles.product_bg} bg-bitGreen-temp z-0 absolute rounded-3xl`} />
      </div>
    </Page>
  )
}

export default Landing;
