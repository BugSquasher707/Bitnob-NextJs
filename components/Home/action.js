import { BitNobContainer } from "components";
import { PlayButton } from "public";
import { homeData } from "static";

const SeeInAction = props => (
    <div className="mt-30 max-w-5xl mx-auto">
        <BitNobContainer>
          <div className="max-w-md text-center mx-auto">
            <h2 className="font-bold text-5xl text-black font-gordita mb-2">{homeData.seeInAction.heading}</h2>
            <p className="text-md text-gray-200 font-quicksand">{homeData.seeInAction.description}</p>
          </div>
          <div style={{borderRadius:"68px"}} className="bg-green-200 relative max-w-6xl mx-auto mt-20">
            <img src={homeData.seeInAction.image} alt="video" />
            <PlayButton style={{transform: "translate(-50%, -50%) scale(.8)"}} className="absolute cursor-pointer animate-pulse left-1/2 top-1/2" />
          </div>
        </BitNobContainer>
    </div>
)

export default SeeInAction