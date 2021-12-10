import Image from 'next/image';
import { BitNobButton, BitNobContainer, getLayout, Page } from "components"
import { Review } from "components/Home/reviews";
import { ArrowOutline } from "public";
import { useState } from "react";
import { businessPageData } from "static";
import styles from 'styles/Business.module.css'


const Business = ()=> {
    const [active, setActive] = useState(0)
    const {  section1, section2, reviews, section3, dataList } = businessPageData;
    
    const handleSlide = (dir)=> {        
        if(dir) {
            setActive(active < reviews.length ? active + 1 : active)           
        }else{
            setActive(active > 0 ? active - 1 : active)           
        }
    }

    return(
        <Page title="Bitnob for Business">
            <div className="z-0">
                <div className="pt-6 bg-white">
                    <BitNobContainer>
                        <div className="mt-10 xl:mt-20 text-center">
                            <div>
                                <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-gordita">{section1.heading}</h2>
                                <p className=" text-2xs md:text-md mt-2 mb-10 font-quicksand text-bitGray-300">{section1.description}</p>
                                <BitNobButton className="my-6 mb-2 py-3 md:py-auto max-w-xs w-max mx-auto">Get Started</BitNobButton>
                            </div>
                            <div className="mt-16 mb-20 relative md:mt-10">
                                <Image src={section1.cover} objectFit="contain" width="1500" height="1200" priority />
                            </div>
                        </div>
                    </BitNobContainer>
                </div>
                <BitNobContainer>
                    <div className="text-center mx-auto -mt-14 lg:-mt-20">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="font-bold text-lg md:text-2xl font-gordita">{section2.heading}</h2>
                            <p className="text-2xs mt-4 md:text-lg font-quicksand text-bitGray-200">{section2.description}</p>
                        </div>
                    </div>
                </BitNobContainer>
                <div className="relative px-1 text-left overflow-hidden mt-20 lg:mt-10 mx-auto max-w-8xl">
                    <BitNobContainer>
                        <div className={`flex flex-col justify-center`}>
                            <div className={`space-y-4 bg-whte z-10 flex-1 cursor-default transition-all duration-400 rounded-2xl md:max-w-sm`}>
                                <span className=" -ml-3 block w-min -mb-4">{dataList[0]?.icon}</span>
                                <h4 className="font-bold text-black text-xl lg:text-2xl whitespace-pre pt-0 font-gordita">{dataList[0]?.title}</h4>
                                <p className="text-bitGray-300 pb-4 text-xs md:text-sm md:pb-2 block font-quicksand">{dataList[0]?.description}</p>
                            </div>
                            <div className={`mt-6 justify-center items-center max-w-6xl mx-auto z-10`}>
                                <img src={dataList[0]?.cover} className="flex justify-center transform scale-110 lg:scale-100" />
                            </div>
                        </div>

                        <div className={`flex flex-col-reverse lg:flex-row justify-center items-center max-w-4xl mx-auto gap-x-10`}>
                            <div className={`max-w-lg flex justify-center mx-auto transform scale-125 md:scale-100 relative z-10 mt-10 lg:mt-0`}>
                                <img src={dataList[1]?.cover} className="z-10" />
                                <img style={{maxHeight: '500px'}} src={dataList[1]?.asset} className="justify-center flex absolute -left-40 xl:-left-80" />
                            </div>
                            <div className={`space-y-4 z-10 mt-20 lg:mt-0 cursor-default transition-all duration-400 rounded-2xl`}>
                                <span className=" -ml-3 block w-min -mb-4">{dataList[1]?.icon}</span>
                                <h4 className="font-bold text-black text-xl lg:text-2xl pt-0 font-gordita">{dataList[1]?.title}</h4>
                                <p className="text-bitGray-300 pb-4 max-w-sm text-xs md:text-sm md:pb-2 block font-quicksand">{dataList[1]?.description}</p>
                            </div>
                        </div>

                        <div className={`flex flex-col lg:flex-row justify-center max-w-5xl mx-auto pb-10 mt-20`}>
                            <div className={`space-y-4 z-10 cursor-default transition-all duration-400 rounded-2xl`}>
                                <span className=" -ml-3 block w-min -mb-4">{dataList[2]?.icon}</span>
                                <h4 className="font-bold text-black text-xl lg:text-2xl pt-0 font-gordita">{dataList[2]?.title}</h4>
                                <p className="text-bitGray-300 pb-4 max-w-sm text-xs md:text-sm md:pb-2 block font-quicksand">{dataList[2]?.description}</p>
                            </div>
                            <div className={`max-w-xl flex justify-center mx-auto relative z-10 mt-5 md:mt-10 lg:mt-0 `}>
                                <img src={dataList[2]?.cover} className="z-10 transform scale-110 md:scale-125" />
                                <img src={dataList[2]?.asset} className="flex justify-center absolute -right-32 md:-right-60" />
                            </div>
                        </div>

                        <div className={`flex flex-col-reverse lg:flex-row justify-center items-center max-w-4xl mx-auto gap-x-20 mt-20`}>
                            <div className={`max-w-lg flex justify-center mx-auto relative mt-16 z-10 md:mt-10 lg:mt-0 `}>
                                <img src={dataList[3]?.cover} className="z-10 transform scale-125 md:scale-100" />
                                <img style={{maxHeight: '500px'}} src={dataList[3]?.asset} className="flex justify-center absolute -left-80" />
                            </div>
                            <div className={`space-y-4 max-w-sm z-10 cursor-default transition-all duration-400 rounded-2xl `}>
                                <span className=" -ml-3 block w-min -mb-4">{dataList[3]?.icon}</span>
                                <h4 className="font-bold text-black text-xl lg:text-2xl pt-0 font-gordita">{dataList[3]?.title}</h4>
                                <p className="text-bitGray-300 pb-4 max-w-sm text-xs md:text-sm md:pb-2 block font-quicksand">{dataList[3]?.description}</p>
                            </div>
                        </div>

                        <div className={`flex flex-col lg:flex-row justify-center max-w-5xl mx-auto pb-10 mt-20`}>
                            <div className={`space-y-4 z-10 cursor-default transition-all duration-400 rounded-2xl`}>
                                <span className=" -ml-3 block w-min -mb-4">{dataList[4]?.icon}</span>
                                <h4 className="font-bold text-black text-xl lg:text-2xl pt-0 font-gordita">{dataList[4]?.title}</h4>
                                <p className="text-bitGray-300 pb-4 max-w-sm text-xs md:text-sm md:pb-2 block font-quicksand">{dataList[4]?.description}</p>
                            </div>
                            <div className={`max-w-sm flex justify-center mx-auto relative z-10`}>
                                <img src={dataList[4]?.cover} className="z-10 mt-10 lg:mt-40 transform scale-125" />
                                <img  src={dataList[4]?.asset} className="flex justify-center absolute transform scale-150 top-14 md:top-10 -right-32 md:-right-52" />
                            </div>
                        </div>

                        <div className={`flex flex-col-reverse lg:flex-row justify-between gap-x-10 mt-20`}>
                            <div className={`max-w-4xl flex justify-center mx-auto relative mt-8 lg:mt-0 z-10`}>
                                <Image src={dataList[5]?.cover} className="z-10" width="1000" height="1000" priority objectFit="contain" />
                            </div>
                            <div className={`space-y-4 mt-20 max-w-sm z-10 cursor-default transition-all duration-400 rounded-2xl`}>
                                <span className=" -ml-3 block w-min -mb-4">{dataList[5]?.icon}</span>
                                <h4 className="font-bold text-black text-xl lg:text-2xl pt-0 font-gordita">{dataList[5]?.title}</h4>
                                <p className="text-bitGray-300 pb-4 max-w-sm text-xs md:text-sm md:pb-2 block font-quicksand">{dataList[5]?.description}</p>
                            </div>
                        </div>

                    </BitNobContainer>
                </div>
                <div className="mt-10">
                    <BitNobContainer>
                        <div className={`max-w-7xl mx-auto flex flex-col items-center overflow-hidden lg:overflow-visible pb-0 pt-14 lg:pt-20 px-6 relative rounded-2xl bg-left bg-cover ${styles.business_foot}`}>
                            <div className=" max-w-4xl text-center mx-auto lg:mx-0">
                                <h1 className="text-black pb-2 leading-tight text-xl sm:text-2xl md:text-3xl font-gordita font-bold">
                                    {section3.title}
                                </h1>
                                <BitNobButton className="w-min flex justify-center mx-auto my-6 text-white whitespace-pre" variant="black">Get Started</BitNobButton>
                            </div>
                            <img src={section3.cover} alt="app" className=" md:-mb-2 lg:-mb-0 " />
                        </div>
                    </BitNobContainer>
                </div>
            </div>
        </Page>
    )
}


Business.getLayout = getLayout;
export default Business