import { BitNobButton, BitNobContainer } from "components"
import { homeData } from "static"

const BusinessSection = () => (
    <div className=" my-20 overflow-x-hidden md:my-40 max-w-7xl mx-auto">
        <BitNobContainer>
          <div className="max-w-md lg:text-center mx-auto">
            <h2 className="font-black text-3xl md:text-4xl xl:text-5xl text-black font-gordita mb-2">{homeData.business.heading}</h2>
            <p className=" md:text-md text-bitGray-200 font-quicksand">{homeData.business.description}</p>
          </div>
          <div className=" mt-10 md:mt-14">
            <img src={homeData.business.image} alt="business" className=" p-2 md:p-0 transform scale-125 md:scale-100" />
            <BitNobButton className="mt-6 mb-2 py-3 md:py-auto max-w-xs w-max mx-auto">Learn More</BitNobButton>
          </div>
        </BitNobContainer>
    </div>
)

export default BusinessSection