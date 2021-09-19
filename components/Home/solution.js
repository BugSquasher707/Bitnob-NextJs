import { homeData } from 'static';
import { BitNobContainer } from '../';


const Solution = () => {
    const { solutionSection } = homeData;

    return (
        <BitNobContainer>
            <div className="flex space-x-24">
            <div className=" lg:max-w-xs xl:max-w-md 2xl:max-w-lg">
                <img src={solutionSection.image} alt="solution" />
            </div>
            <div className="max-w-xl xl:max-w-2xl">
                <h2 className="font-bold text-3xl xl:text-4xl 2xl:text-5xl font-gordita leading-tight">{solutionSection.heading}</h2>
                <p className="text-md mt-4 font-quicksand text-bitGray-200">{solutionSection.description[0]} <br /> {solutionSection.description[1]}</p>
                <div className="space-y-6 mt-20">
                {
                    solutionSection.list.map(({ icon, title, description })=> (
                        <div key={title} className="flex space-x-6 items-center">
                            <div style={{minWidth:"7rem"}} className="h-28 w-28 transform scale-90 2xl:scale-100 rounded-3xl flex justify-center items-center bg-bitGreen-50">
                                {icon}
                            </div>
                            <div style={{borderColor:"rgba(239, 241, 241, 1)"}} className=" px-8 2xl:px-10 py-4 2xl:py-6 border rounded-3xl">
                                <h4 className="text-lg xl:text-xl font-gordita font-bold">{title}</h4>
                                <p className="mt-2 text-bitGray-200">{description}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            </div>
        </BitNobContainer>
    )
}

export default Solution