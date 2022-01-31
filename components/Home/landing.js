import Image from 'next/image';
import { homeData } from 'static';
import { 
  BitNobContainer, 
  BitNobLink, 
  Page ,
} from '../';

import { AppStore, PlayStore } from "public";
import styles from 'styles/Home.module.css';
import { bitnobAppleStore, bitnobPlayStore } from 'app-constants';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import classNames from 'classnames';
import { isBrowser } from 'utils';

const Landing = ()=> {
  let x;
  const landingRef = useRef(null)
  const phoneRef = useRef(null)
  const { landing } = homeData;
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(()=> {
    x = setTimeout(()=> {
      setLoaded(true)
    }, 300);

    return()=> clearTimeout(x)
  },[])

  useEffect(()=> {
    if(loaded) {
      gsap.timeline()
      .from(landingRef.current, {
        y: 400,
        duration: .6,
        opacity: 0,
        scaleY: .3
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

      setVisible(true);

    }
  }, [loaded])


  return (
    <Page title="Welcome to BitNob">
      <div className="relative xl:mt-5 overflow-hidden">
        <BitNobContainer>
          <div className="flex flex-col lg:flex-row w-full pt-10 md:pt-20 lg:justify-between">
            <div style={{minHeight: isBrowser()?.innerWidth > 768 ? "600px" : '400px'}} className='max-w-md flex-1'>
              <div ref={landingRef} className={classNames({hidden: !visible})}  >
                <h1 className="text-black leading-tight text-4xl md:text-5xl font-gordita font-bold">
                  <span>{landing.heading[0]}</span> <br /> {landing.heading[1]}
                </h1>
                <p className="mt-6 max-w-md text-xs md:text-sm xl:text-md font-quicksand font-light opacity-90 text-bitGray-200">{landing.description[0]}</p>
                <p className="mt-2 max-w-md text-xs md:text-sm xl:text-md font-quicksand font-light opacity-90 text-bitGray-200">{landing.description[1]}</p>
                <div className="flex space-x-2 md:space-x-4 items-center mt-12 md:mt-8">
                  <BitNobLink isExternal to={bitnobAppleStore}>
                    <AppStore className="w-38 xl:w-auto" />
                  </BitNobLink>
                  <BitNobLink isExternal to={bitnobPlayStore}>
                    <PlayStore className="w-38 xl:w-auto" />
                  </BitNobLink>
                </div>
              </div>
            </div>
            <div className={classNames(`flex-1 justify-end mt-10 md:mt-8 lg:mt-0 relative`, {flex: visible, hidden: !visible}, styles.landing_cover)}>
              <figure ref={phoneRef} className={classNames("phone z-10 relative", styles.phone)}>
                <Image src={landing.cover} alt="smatphone" layout="fill" priority="100" objectFit="contain" />
              </figure>
            </div>
          </div>
        </BitNobContainer>
        <div className={`${styles.product_bg} bg-bitGreen-temp z-0 absolute rounded-3xl`} />
      </div>
    </Page>
  )
}

export default Landing;
