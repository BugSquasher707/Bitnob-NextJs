import { homeData } from 'static';
import { 
  BitNobContainer, 
  BitNobLink, 
} from '../'

const HowItWorks = props => {
    const { howItWorks } = homeData;

    return(
        <div className="relative">
            <div className=" lg:max-w-3xl 2xl:max-w-5xl right-0 h-96 w-full bg-cover bg-no-repeat -top-32 absolute" style={{backgroundImage:`url(${howItWorks.cover})`}} />
            <BitNobContainer>
            <div className="bg-green-50 mt-48 rounded-2xl px-20 pb-16 pt-10">
                <div className="flex space-x-10 items-center">
                <div className="max-w-sm">
                    <h2 className="font-bold text-5xl text-black font-gordita mb-8">{howItWorks.heading}</h2>
                    <p className="mt-2 text-md text-gray-200 font-quicksand">{howItWorks.description}</p>
                </div>
                </div>
                <div className="flex mt-28 space-x-10 justify-center mb-10">
                {
                    howItWorks.list.map(({title, description, icon})=> (
                    <div key={title} className="space-y-4 max-w-xs">
                        <span className="block w-min" style={{transform: title === "Loans" && "rotate(180deg)"}}>{icon}</span>
                        <h4 className="font-bold text-black text-md font-gordita">{title}</h4>
                        <p className="text-gray-200 pb-1 block font-quicksand">{description}</p>
                        <BitNobLink className="font-bold text-gray-200">Learn More</BitNobLink>
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