import { BitNobContainer, BitNobLink } from "components"
import { AppStore, PlayStore } from "public"
import { homeData } from "static"

const PreFooter = props => (
    <div className="bg-black mt-20 py-12">
        <BitNobContainer>
          <div className="flex max-w-6xl mx-auto space-x-6">
            {
              homeData.preFooter.map(({title, description})=> (
                <div key={title} className="p-6 flex-1 rounded-3xl bg-white">
                  <h3 className="text-lg font-gordita font-bold mb-3">{title}</h3>
                  <p className="text-gray-200">{description}</p>
                </div>
              ))
            }
          </div>
          <div className="flex space-x-4 justify-center items-center mt-8">
            <BitNobLink className="border border-gray-500 rounded-md" to="#">
              <AppStore />
            </BitNobLink>
            <BitNobLink className="border border-gray-500 rounded-md" to="#">
              <PlayStore />
            </BitNobLink>
          </div>
        </BitNobContainer>
      </div>
)

export default PreFooter