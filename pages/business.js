import { BitNobButton, BitNobContainer, getLayout, Page, Reviews } from "components"
import { Review } from "components/Home/reviews";
import { ArrowOutline, ShapesSvg } from "public";
import { useState } from "react";
import { businessPageData } from "static";
import styles from 'styles/Business.module.css'
import { isBrowser } from "utils";


const Service = ({ title, index, asset = null, cover, icon, description })=> (
    <div className="relative my-10 px-1">
        <div className="max-w-8xl mx-auto">
            <BitNobContainer>
                <div
                    style={{minHeight: (isBrowser()?.innerWidth > 800 && index ) && "700px"}} 
                    className={`flex justify-center lg:space-x-6 gap-x-10 ${index ? 'flex-row items-center' : 'flex-col'} ${(index + 1) % 2 === 0 ? 'flex-col lg:flex-row-reverse' : index ? 'flex-col lg:flex-row' : 'flex-col'} `}>
                    <div className={`space-y-4 bg-whte z-10 flex-1 cursor-default transition-all duration-400 rounded-2xl md:max-w-sm`}>
                        <span className=" -ml-3 block w-min -mb-4">{icon}</span>
                        <h4 className="font-bold text-black text-xl xl:text-3xl whitespace-pre pt-0 font-gordita">{title}</h4>
                        <p style={{minWidth:"200px"}} className="text-bitGray-300 pb-4 text-xs lg:text-sm xl:text-md md:pb-2 block font-quicksand">{description}</p>
                    </div>
                    <div className={`mt-6 justify-center items-center mx-auto z-10 ${index && 'max-w-3xl'} ${["Customers", "Wallet Services"].includes(title) ? "px-6 2xl:max-w-3xl" : ''}`}>
                        <img src={cover} className="flex justify-center transform scale-110 lg:scale-100" />
                    </div>
                </div>
            </BitNobContainer>
        </div>
        {asset && <ShapesSvg style={{maxHeight: "500px"}} className={`absolute opacity-30 lg:opacity-100 top-1/2 transform -translate-y-1/2 scale-75 lg:scale-100 -${asset}-96 z-0`} />}
    </div>
)

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
                                <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-gordita">{section1.heading}</h2>
                                <p className=" text-xs md:text-md my-6 font-quicksand text-bitGray-300">{section1.description}</p>
                                <BitNobButton className="my-6 mb-2 py-3 md:py-auto max-w-xs w-max mx-auto">Get Started</BitNobButton>
                            </div>
                            <div className="mt-16 mb-20 relative md:mt-10">
                                <img src={section1.cover} />
                            </div>
                        </div>
                    </BitNobContainer>
                </div>
                <BitNobContainer>
                    <div className="text-center mx-auto -mt-20">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="font-bold text-2xl md:text-2xl font-gordita">{section2.heading}</h2>
                            <p className=" md:text-lg mt-2 font-quicksand text-bitGray-200">{section2.description}</p>
                        </div>
                    </div>
                </BitNobContainer>
                <div className="relative px-1 text-left overflow-hidden mx-auto max-w-8xl">
                    <BitNobContainer>
                        <div className={`flex flex-col justify-center`}>
                            <div className={`space-y-4 bg-whte z-10 flex-1 cursor-default transition-all duration-400 rounded-2xl md:max-w-sm`}>
                                <span className=" -ml-3 block w-min -mb-4">{dataList[0]?.icon}</span>
                                <h4 className="font-bold text-black text-xl lg:2xl xl:text-3xl whitespace-pre pt-0 font-gordita">{dataList[0]?.title}</h4>
                                <p className="text-bitGray-300 pb-4 text-xs lg:text-sm xl:text-md md:pb-2 block font-quicksand">{dataList[0]?.description}</p>
                            </div>
                            <div className={`mt-6 justify-center items-center max-w-6xl mx-auto z-10`}>
                                <img src={dataList[0]?.cover} className="flex justify-center transform scale-110 lg:scale-100" />
                            </div>
                        </div>

                        <div className={`flex flex-row justify-center items-center max-w-4xl mx-auto gap-x-10 mt-20`}>
                            <div className={`max-w-lg flex justify-center mx-auto relative z-10`}>
                                <img src={dataList[1]?.cover} className="z-10" />
                                <img style={{maxHeight: '500px'}} src={dataList[1]?.asset} className="flex justify-center absolute -left-80" />
                            </div>
                            <div className={`space-y-4 z-10 cursor-default transition-all duration-400 rounded-2xl`}>
                                <span className=" -ml-3 block w-min -mb-4">{dataList[1]?.icon}</span>
                                <h4 className="font-bold text-black text-xl lg:2xl xl:text-3xl whitespace-pre pt-0 font-gordita">{dataList[1]?.title}</h4>
                                <p className="text-bitGray-300 pb-4 max-w-sm text-xs lg:text-sm xl:text-md md:pb-2 block font-quicksand">{dataList[1]?.description}</p>
                            </div>
                        </div>

                        <div className={`flex flex-row justify-center max-w-5xl mx-auto pb-10 mt-20`}>
                            <div className={`space-y-4 z-10 cursor-default transition-all duration-400 rounded-2xl`}>
                                <span className=" -ml-3 block w-min -mb-4">{dataList[2]?.icon}</span>
                                <h4 className="font-bold text-black text-xl lg:2xl xl:text-3xl whitespace-pre pt-0 font-gordita">{dataList[2]?.title}</h4>
                                <p className="text-bitGray-300 pb-4 max-w-sm text-xs lg:text-sm xl:text-md md:pb-2 block font-quicksand">{dataList[2]?.description}</p>
                            </div>
                            <div className={`max-w-xl flex justify-center mx-auto relative z-10`}>
                                <img src={dataList[2]?.cover} className="z-10 transform scale-125" />
                                <img  src={dataList[2]?.asset} className="flex justify-center absolute -right-60" />
                            </div>
                        </div>
                    </BitNobContainer>
                </div>
                <div style={{minHeight:600}} className="pt-28 pb-72 relative bg-gradient-to-b from-white via-bitGreen-50 to-white">
                    <BitNobContainer>
                        <div className="relative flex mx-auto max-w-2xl">
                            {
                                reviews?.map((a, i)=> (
                                    <Review
                                        {...a} 
                                        i={i} 
                                        active={active}
                                        reviews={reviews} 
                                        key={a.author} />
                                ))
                            }
                        </div>
                    </BitNobContainer>
                    <div className=" absolute transform left-1/2 -translate-x-1/2 space-x-10 bottom-10 md:-bottom-10 flex w-full max-w-sm justify-center items-center">
                        <ArrowOutline
                            arial-label="Previous" 
                            onClick={()=> handleSlide(0)} 
                            role="button" 
                            tabIndex="0" 
                            className="transform scale-50 md:scale-75 transition-all duration-100 hover:shadow-md rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-black" />
                        <ArrowOutline
                            arial-label="Next" 
                            onClick={()=> handleSlide(1)} 
                            role="button" 
                            tabIndex="0" 
                            className="transform -rotate-180 scale-50 md:scale-75 transition-all duration-100 hover:shadow-md rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-black" />
                    </div>
                </div>
                <div className=" mt-14 md:mt-40">
                    <BitNobContainer>
                        <div className={`max-w-7xl mx-auto flex flex-col items-center overflow-hidden lg:overflow-visible pb-0 pt-14 lg:pt-20 px-6 relative rounded-2xl bg-left bg-cover ${styles.business_foot}`}>
                            <div className=" max-w-4xl text-center mx-auto lg:mx-0">
                                <h1 className="text-black pb-2 leading-tight text-xl sm:text-3xl md:text-4xl lg:text-4xl font-gordita font-black">
                                    {section3.title}
                                </h1>
                                <BitNobButton className="w-min flex justify-center mx-auto my-6 text-white whitespace-pre">Get Started</BitNobButton>
                            </div>
                            <img src={section3.cover} alt="app" />
                        </div>
                    </BitNobContainer>
                </div>
            </div>
        </Page>
    )
}


Business.getLayout = getLayout;
export default Business