import { BitNobContainer } from "components"
import { homeData } from "static"

const BusinessSection = props => (
    <div className="my-40 max-w-7xl mx-auto">
        <BitNobContainer>
          <div className="max-w-md text-center mx-auto">
            <h2 className="font-bold text-5xl text-black font-gordita mb-2">{homeData.business.heading}</h2>
            <p className="text-md text-gray-200 font-quicksand">{homeData.business.description}</p>
          </div>
          <div className="mt-14">
            <img src={homeData.business.image} alt="business" />
            <BitNobButton className="mt-6 max-w-xs w-max mx-auto">Learn More</BitNobButton>
          </div>
        </BitNobContainer>
    </div>
)

export default BusinessSection