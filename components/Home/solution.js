import { homeData } from 'static';
import { BitNobContainer } from '../';


const Solution = () => {
    const { solutionSection } = homeData;

    return (
        <BitNobContainer>
            <div className="flex flex-col-reverse mt-16 lg:mt-0 lg:items-stretch lg:flex-row md:space-x-10 lg:space-x-28 xl:space-x-36">
                <div className="self-center lg:self-stretch mt-10 lg:mt-0 -ml-3 xl:-ml-8 max-w-md 2xl:max-w-lg">
                    <img src={solutionSection.image} alt="solution" />
                </div>
                <div className="max-w-xl xl:max-w-2xl 2xl:max-w-xl xl:mt-20">
                    <h2 className="font-black text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-gordita leading-tight">{solutionSection.heading}</h2>
                    <p className=" md:text-md mt-4 font-quicksand text-bitGray-200">{solutionSection.description[0]} <br /> {solutionSection.description[1]}</p>
                    <div className="space-y-6 mt-16 md:mt-20">
                        {
                            solutionSection.list.map(({ icon, title, description })=> (
                                <div key={title} className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 md:items-center">
                                    <div style={{minWidth:"7rem"}} className="h-28 w-28 transform scale-90 2xl:scale-100 rounded-3xl flex justify-center items-center bg-bitGreen-50">
                                        {icon}
                                    </div>
                                    <div style={{borderColor:"rgba(239, 241, 241, 1)"}} className=" px-8 2xl:px-10 py-6 md:py-4 2xl:py-6 border rounded-3xl">
                                        <h4 className="text-lg pb-2 md:pb-0 xl:text-xl font-gordita font-bold">{title}</h4>
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