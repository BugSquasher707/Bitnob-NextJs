import { BitNobContainer, BitNobLink } from "components"
import { bitnobPlayStore } from "constants"
import { bitnobAppleStore } from "constants"
import { AppStore, PlayStore } from "public"
import { homeData } from "static"

const PreFooter = () => (
    <div className="bg-black mt-20 py-12">
        <BitNobContainer>
          <div className="flex flex-col lg:flex-row max-w-6xl mx-auto space-y-6 lg:space-y-0 lg:space-x-6">
            {
              homeData.preFooter.map(({title, description})=> (
                <div key={title} className=" p-7 md:p-8 lg:px-6 lg:py-4 flex-1 rounded-3xl bg-white">
                  <h3 className=" text-md md:text-xl lg:text-md xl:text-lg font-gordita font-bold mb-1">{title}</h3>
                  <p className=" text-2xs md:text-sm lg:text-xs xl:text-sm text-bitGray-200">{description}</p>
                </div>
              ))
            }
          </div>
          <div className="flex py-4 lg:py-0 space-x-4 justify-center items-center mt-8">
            <BitNobLink className="transform scale-90 xl:scale-100" to={bitnobAppleStore}>
              <AppStore />
            </BitNobLink>
            <BitNobLink className="transform scale-90 xl:scale-100" to={bitnobPlayStore}>
              <PlayStore />
            </BitNobLink>
          </div>
        </BitNobContainer>
      </div>
)

export default PreFooter