import { homeData } from 'static';
import { 
  BitNobContainer, 
  BitNobLink, 
} from '../'

const HowItWorks = () => {
    const { howItWorks } = homeData;

    return(
        <div className="relative mt-60">
            <div 
                className=" max-w-xl lg:max-w-md xl:max-w-3xl 2xl:max-w-5xl right-0 h-60 lg:h-80 xl:h-96 w-full bg-cover bg-no-repeat -top-20 xl:-top-32 absolute" 
                style={{backgroundImage:`url(${howItWorks.cover})`}} />
            <BitNobContainer>
            <div className="bg-bitGreen-50 xl:mt-48 rounded-2xl px-10 lg:px-20 pb-16 pt-60 lg:pt-10">
                <div className="flex space-x-10 items-center">
                    <div className="max-w-sm">
                        <h2 className="font-bold text-5xl text-black font-gordita mb-8">{howItWorks.heading}</h2>
                        <p className="mt-2 text-md text-bitGray-200 font-quicksand">{howItWorks.description}</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row mt-20 xl:mt-28 space-y-10 lg:space-y-0 lg:space-x-10 lg:justify-center mb-10">
                    {
                        howItWorks.list.map(({title, description, icon}, i)=> (
                            <div key={title} className={`${((i + 1) % 2 === 0) ? "bg-white shadow-xl" : ''} space-y-4 p-8 hover:bg-white hover:shadow-xl flex-1 cursor-default transition-all duration-400 rounded-2xl xl:max-w-xs`}>
                                <span className="block w-min" style={{transform: title === "Loans" && "rotate(180deg)"}}>{icon}</span>
                                <h4 className="font-bold text-black text-2xl lg:text-md font-gordita">{title}</h4>
                                <p className="text-bitGray-200 pb-2 block font-quicksand">{description}</p>
                                <BitNobLink className="font-bold text-bitGray-200">Learn More</BitNobLink>
                            </div>
                        ))
                    }
                </div>
            </div>
            </BitNobContainer>
        </div>
    )
}

export default HowItWorks