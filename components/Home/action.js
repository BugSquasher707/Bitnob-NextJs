import { BitNobContainer } from "components";
import { PlayButton } from "public";
import { homeData } from "static";

const SeeInAction = () => (
  <div className=" max-w-4xl xl:max-w-5xl mt-36 md:mt-60 xl:mt-44 mx-auto">
    <BitNobContainer>
      <div className="max-w-md lg:text-center mx-auto">
        <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl text-black font-gordita mb-2">
          {homeData.seeInAction.heading}
        </h2>
        <p className=" text-xs md:text-md text-bitGray-200 font-quicksand">
          {homeData.seeInAction.description}
        </p>
      </div>
      <div className="flex justify-center overflow-hidden relative max-w-3xl lg:max-w-6xl mx-auto mt-10 md:mt-16">
        <iframe
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          width="788.54"
          height="443"
          type="text/html"
          src="https://www.youtube.com/embed/ChHmjqmCG6o?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"
        />
      </div>
    </BitNobContainer>
  </div>
);

export default SeeInAction;
