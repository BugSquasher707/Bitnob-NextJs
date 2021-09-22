import { BitNobContainer } from "components";
import { PlayButton } from "public";
import { homeData } from "static";

const SeeInAction = () => (
    <div className=" max-w-4xl xl:max-w-5xl md:mt-60 xl:mt-44 mx-auto">
        <BitNobContainer>
          <div className="max-w-md lg:text-center mx-auto">
            <h2 className="font-black text-2xl md:text-5xl text-black font-gordita mb-2">{homeData.seeInAction.heading}</h2>
            <p className=" md:text-md text-bitGray-200 font-quicksand">{homeData.seeInAction.description}</p>
          </div>
          <div className="bg-bitGreen-200 rounded-xl overflow-hidden relative max-w-3xl lg:max-w-6xl mx-auto mt-10 md:mt-16">
            <img src={homeData.seeInAction.image} alt="video" />
            <PlayButton className="absolute transform -translate-x-1/2 -translate-y-1/2 scale-50 md:scale-75 cursor-pointer animate-pulse left-1/2 top-1/2" />
          </div>
        </BitNobContainer>
    </div>
)

export default SeeInAction