import { BitNobButton, BitNobContainer, BitNobLink, getLayout, Page } from "components"
import { careersPageData } from "static"

const Careers = ()=> {
    const { section1, dividerImg, section2, gallery, jobs } = careersPageData;

    return(
        <Page title="Bitnob for Business">
            <div className="z-0">
                <div className=" pt-6 pb-20 bg-gradient-to-b from-white via-bitGreen-100">
                    <BitNobContainer>
                        <div className="mt-10 xl:mt-20 text-center mx-auto">
                            <div className="max-w-lg mx-auto">
                                <h2 className="font-black text-2xl md:text-3xl xl:text-4xl font-gordita">{section1.heading}</h2>
                                <p className=" md:text-md my-6 font-quicksand text-bitGray-200">{section1.description}</p>
                                <BitNobButton className="mt-10 mb-2 py-3 md:py-auto max-w-xs w-max mx-auto">Get Started</BitNobButton>
                            </div>
                            <div style={{borderRadius:"50px"}} className="max-w-4xl overflow-hidden 2xl:max-w-7xl mx-auto mt-20">
                                <img src={dividerImg} />
                            </div>
                        </div>
                    </BitNobContainer>
                </div>
                <div className=" -mt-20  bg-white">
                    <BitNobContainer>
                        <div className="mt-10 xl:mt-20 text-center mx-auto">
                            <div className="max-w-lg mx-auto">
                                <h2 className="font-black text-2xl md:text-3xl xl:text-4xl font-gordita">{section2.heading}</h2>
                                <p className=" md:text-md my-6 font-quicksand text-bitGray-200">{section2.description}</p>
                            </div>
                            <div className=" grid grid-cols-4 gap-3 max-w-7xl overflow-hidden 2xl:max-w-7xl mx-auto mt-20">
                                {
                                    gallery.map(g=> (
                                        <div className="max-w-xs h-64">
                                            <img src={g} className="w-full max-w-full h-auto" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </BitNobContainer>
                </div>
                <div className=" pt-6 pb-20 bg-gradient-to-b from-white via-bitGreen-100">
                    <BitNobContainer>
                        <div className="mt-10 xl:mt-20 text-center mx-auto">
                            <div className="max-w-lg mx-auto">
                                <h2 className="font-black text-2xl md:text-3xl font-gordita">Apply Now!</h2>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-4 max-w-4xl overflow-hidden 2xl:max-w-7xl mx-auto mt-20">
                                {
                                    jobs.map(({title, location})=> (
                                        <BitNobLink>
                                            <div className="bg-white text-left px-6 py-2 rounded-lg">
                                                <h4 className="font-bold font-gordita md:text-lg lg:text-xl">{title}</h4>
                                                <p className=" text-2xs md:text-xs text-bitGray-200">{location}</p>
                                            </div>
                                        </BitNobLink>
                                    ))
                                }
                            </div>
                        </div>
                    </BitNobContainer>
                </div>
            </div>
        </Page>
    )
}

Careers.getLayout = getLayout;
export default Careers