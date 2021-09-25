import { BitNobButton, BitNobContainer, getLayout, Page } from "components"
import { businessPageData } from "static";
import styles from 'styles/Business.module.css'

const Business = ()=> {
    const {  section1, section2, section3, dataList } = businessPageData

    return(
        <Page title="Bitnob for Business">
            <div className="z-0 to-white">
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
            </div>
        </Page>
    )
}


Business.getLayout = getLayout;
export default Business