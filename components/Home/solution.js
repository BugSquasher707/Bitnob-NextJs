import classNames from 'classnames';
import Image from 'next/image';

import { homeData } from 'static';
import { BitNobContainer } from '../';

const Solution = () => {
    const { solutionSection } = homeData;

    return (
        <BitNobContainer>
            <div className="flex flex-col-reverse mt-10 lg:mt-0 lg:items-start lg:flex-row md:space-x-10 lg:space-x-14 xl:space-x-20">
                <div className="self-center w-full overflow-hidden lg:self-stretch mt-10 lg:mt-0 relative -ml-3 xl:-ml-8 max-w-lg lg:max-w-lg 2xl:max-w-2xl">
                    <Image src={solutionSection.image} alt="solution" className="max-w-full" objectFit="contain" height="1060" width="800" priority="true" />
                    {
                        solutionSection.emojis.map((a, i)=> {
                        const loci = {
                            0: {top:"1%", right:"12%"},
                            1: {top:"23%", right:"1%"},
                            2: {top:"65%", left:"15%"},
                            3: {top:"28%", left:"0%"},
                        }

                            return (
                                <img 
                                    src={a} 
                                    style={loci?.[i]} 
                                    alt="avatar" 
                                    className={classNames( {'p-2': i === 1, 'bg-bitGreen-50': i !== 1}, 'absolute w-16 h-16 xl:h-20 xl:w-20  hover:bg-bitGreen-100 rounded-full z-30')} />
                            )
                        })
                    }
                </div>
                <div className="max-w-xl lg:max-w-2xl xl:mt-20">
                    <div className="max-w-md 2xl:max-w-2xl">
                        <h2 className="font-bold text-xl md:text-4xl xl:text-3xl 2xl:text-4xl font-gordita leading-tight">{solutionSection.heading}</h2>
                        <p className=" text-xs md:text-sm mt-4 font-quicksand text-bitGray-300">{solutionSection.description[0]} <br /> {solutionSection.description[1]}</p>
                    </div>
                    <div className="space-y-6 mt-14 md:mt-18 max-w-lg">
                        {
                            solutionSection.list.map(({ icon, title, description })=> (
                                <div key={title} className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-3 md:items-center">
                                    <div style={{minWidth:"6rem"}} className="h-24 w-24 transform scale-90 2xl:scale-100 rounded-3xl flex justify-center items-center bg-bitGreen-50">
                                        {icon}
                                    </div>
                                    <div style={{borderColor:"rgba(239, 241, 241, 1)"}} className=" px-8 2xl:px-10 py-6 md:py-6 border rounded-3xl">
                                        <h4 className=" text-sm md:text-lg pb-2 md:pb-0 lg:text-lg  md:whitespace-pre 2xl:text-lg font-gordita font-bold">{title}</h4>
                                        <p className="mt-2 text-2xs md:text-sm opacity-90 text-bitGray-200" dangerouslySetInnerHTML={{__html: description}} />
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