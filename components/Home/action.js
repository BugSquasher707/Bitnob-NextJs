import { BitNobContainer } from "components";
import { PlayButton } from "public";
import { homeData } from "static";

const SeeInAction = () => (
    <div className=" max-w-4xl xl:max-w-5xl mt-60 xl:mt-44 mx-auto">
        <BitNobContainer>
          <div className="max-w-md lg:text-center mx-auto">
            <h2 className="font-black text-5xl text-black font-gordita mb-2">{homeData.seeInAction.heading}</h2>
            <p className="text-md text-bitGray-200 font-quicksand">{homeData.seeInAction.description}</p>
          </div>
          <div style={{borderRadius:"68px"}} className="bg-bitGreen-200 relative max-w-3xl lg:max-w-6xl mx-auto mt-16">
            <img src={homeData.seeInAction.image} alt="video" />
            <PlayButton style={{transform: "translate(-50%, -50%) scale(.8)"}} className="absolute cursor-pointer animate-pulse left-1/2 top-1/2" />
          </div>
        </BitNobContainer>
    </div>
)

export default SeeInAction