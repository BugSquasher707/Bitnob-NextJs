import { BitNobButton, BitNobContainer, getLayout, Page, Reviews } from "components"
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
                <div className=" pt-6 pb-60 bg-gradient-to-b from-white via-bitGreen-100">
                    <BitNobContainer>
                        <div className="mt-10 xl:mt-20 text-center mx-auto">
                            <div className="max-w-5xl mx-auto">
                                <h2 className="font-black text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-gordita">{section1.heading}</h2>
                                <p className=" md:text-md my-6 font-quicksand text-bitGray-200">{section1.description}</p>
                                <BitNobButton className="mt-6 mb-2 py-3 md:py-auto max-w-xs w-max mx-auto">Get Started</BitNobButton>
                            </div>
                            <div className="max-w-4xl 2xl:max-w-7xl mx-auto mt-10">
                                <img src={section1.cover} />
                            </div>
                        </div>
                    </BitNobContainer>
                </div>
                <div className="-mt-44 lg:-mt-80">
                    <BitNobContainer>
                        <div className="xl:mt-20 text-center mx-auto">
                            <div className="max-w-5xl mx-auto">
                                <h2 className="font-black text-2xl md:text-3xl font-gordita">{section2.heading}</h2>
                                <p className=" md:text-lg mt-4 font-quicksand text-bitGray-200">{section2.description}</p>
                            </div>
                            <div className=" max-w-4xl 2xl:max-w-7xl mx-auto">
                                <img src={section2.cover} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:grid-cols-3 text-left mb-10 max-w-7xl mx-auto">
                                {
                                    dataList.map(({title, description, icon})=> (
                                        <div key={title} className={`bg-white space-y-4 p-8 hover:bg-white hover:shadow-xl flex-1 cursor-default transition-all duration-400 rounded-2xl xl:max-w-sm`}>
                                            <span className=" -ml-3 block w-min">{icon}</span>
                                            <h4 className="font-bold text-black text-lg xl:text-xl font-gordita">{title}</h4>
                                            <p className="text-bitGray-200 pb-4 text-xs lg:text-sm md:pb-2 block font-quicksand">{description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </BitNobContainer>
                </div>
                <div style={{minHeight:600}} className="pt-28 pb-72 relative bg-gradient-to-b from-white via-bitGreen-100 to-white">
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
                    <div className=" absolute transform left-1/2 -translate-x-1/2 space-x-10 -bottom-10 flex w-full max-w-sm justify-center items-center">
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
                <div className="mt-40">
                    <BitNobContainer>
                        <div className={`max-w-7xl mx-auto flex flex-col items-center overflow-hidden lg:overflow-visible pb-0 pt-10 lg:pt-20 px-6 relative rounded-2xl bg-left bg-cover ${styles.business_foot}`}>
                            <div className=" max-w-4xl text-center mx-auto lg:mx-0">
                                <h1 className="text-black pb-2 leading-tight text-xl sm:text-3xl md:text-5xl lg:text-4xl font-gordita font-black">
                                    {section3.title}
                                </h1>
                                <div className="flex space-x-4 justify-center max-w-xs mx-auto items-center my-6">
                                    <BitNobButton className="w-min text-white whitespace-pre">Get Started</BitNobButton>
                                </div>
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