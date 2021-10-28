import { useRouter } from "next/dist/client/router";

import { BitNobContainer, BitNobButton, getLayout, Page } from "components"
import { aboutPageData } from "static";


const AboutUs = ()=> {
    const { welcome, values, mission, join } = aboutPageData
    const router = useRouter();

    return(
        <Page title="About Us">
            <div className=" mt-12 lg:mt-24">
                <div style={{minHeight: "500px"}} className="relative overflow-hidden w-full h-full">
                    <BitNobContainer>
                        <div className="max-w-xl 2xl:max-w-2xl mx-auto lg:absolute top-0 left-1/2 transform lg:-translate-x-1/2 text-center">
                            <div className="max-w-md mx-auto">
                                <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl font-gordita">{welcome.heading}</h2>
                                <p className=" md:text-md my-4 font-quicksand text-bitGray-200">{welcome.description}</p>
                            </div>
                        </div>
                    </BitNobContainer>
                    <img src={welcome.bg} className="absolute transform scale-150 md:scale-100 z-10 md:top-1/4 lg:static" />
                </div>

                <div className="mt-10 md:mt-60 lg:mt-20 2xl:mt-20">
                    <BitNobContainer>
                        <div className="bg-bitGreen-50 rounded-2xl py-10 px-4 md:p-6 lg:p-12 text-center">
                            <div className="max-w-xl mx-auto">
                                <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl font-gordita">{values.heading}</h2>
                                <p className=" md:text-md my-4 font-quicksand text-bitGray-200">{values.description}</p>
                                <p className=" md:text-md my-4 font-quicksand text-bitGray-200">These 5 values form the Acronym <b>PILOT</b></p>
                            </div>
                            <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-3 lg:gap-5 xl:grid-cols-3 text-left mb-10 max-w-7xl mx-auto">
                                {
                                    Object.values(values.dataList).map((v, i)=> (
                                        <div key={i} className="flex items-center flex-col space-y-5">
                                            {
                                                v.map(({title, description, icon})=> (
                                                    <div style={{borderRadius:"30px"}} key={title} className={`space-y-4 p-6 md:p-8 hover:bg-white box-shadow flex-1 cursor-default transition-all duration-400 xl:max-w-sm`}>
                                                        <span className=" -ml-3 block w-min">{icon}</span>
                                                        <h4 className="font-bold text-black text-md md:text-lg 2xl:text-xl font-gordita">{title}</h4>
                                                        <p className="text-bitGray-200 pb-4 text-xs lg:text-sm md:pb-2 block font-quicksand">{description}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </BitNobContainer>
                </div>
                <div className="mt-10 md:mt-40 2xl:mt-20">
                    <BitNobContainer>
                        <div className="max-w-2xl mx-auto text-center border-b pb-14">
                            <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl font-gordita">{mission.heading}</h2>
                            <p className=" md:text-md my-4 font-quicksand text-bitGray-200">{mission.description}</p>
                        </div>
                    </BitNobContainer>
                </div>
                <BitNobContainer>
                    <div 
                        className={`flex flex-col lg:flex-row justify-between items-center mt-20 md:mt-36 bg-black text-white rounded-3xl overflow-hidden lg:overflow-visible px-6 md:px-20 py-12 lg:px-14 xl:px-20 2xl:p-20 relative bg-left bg-cover`}>
                        <div className="flex lg:block flex-col items-center lg:items-stretch text-center lg:text-left max-w-md lg:max-w-sm xl:max-w-lg">
                            <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl font-gordita">{join.heading}</h2>
                            <p className=" text-xs md:text-md my-4 opacity-95 font-quicksand">{join.description}</p>
                            <BitNobButton 
                                onClick={()=> router.push('/careers')} 
                                className="my-8 md:my-14 lg:mt-10 mb-2 py-3 md:py-auto w-max">See Job Openings</BitNobButton>
                        </div>
                        <div className="max-w-xs md:max-w-lg lg:max-w-xs xl:max-w-md p-6 md:p-0 box-border mt-12 md:mt-20 lg:mt-0">
                            <img src={join.image} alt="app"  />
                        </div>
                    </div>
                </BitNobContainer>
            </div>
        </Page>
    )
}


AboutUs.getLayout = getLayout
export default AboutUs