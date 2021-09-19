import { homeData } from 'static';
import { BitNobContainer } from '../';
import { Quote, Dots, ArrowOutline } from "public";
import styles from 'styles/Home.module.css';

const Reviews = () => {

    return(
        <div className={` mt-32 overflow-x-hidden pb-10 overflow-y-hidden md:mt-40 bg-gradient-to-b from-white via-bitGreen-100 to-white relative ${styles.reviews}`}>
            <BitNobContainer>
                <div className="max-w-2xl mx-auto"> 
                    <div className="text-left lg:text-center max-w-sm lg:max-w-md mx-auto xl:max-w-full">
                        <h2 className="font-bold leading-tight text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-black font-gordita mb-2">{homeData.reviews.heading}</h2>
                        <p className=" md:text-md pt-2 text-bitGray-200 font-quicksand">{homeData.reviews.description}</p>
                    </div>
                    <div className="relative mt-28 flex mx-auto max-w-xl xl:max-w-2xl">
                        {
                            homeData.reviews.comments.map(({description, position, author}, i)=> {
                                const styles = {
                                    top: `${i * 35}px`,
                                    zIndex: homeData.reviews.comments.length - i,
                                    transform: `scale(${1 - i/10})`,
                                    opacity: `1 - ${i/10}`,
                                    boxShadow:"0px 18px 52.8537px rgba(63, 177, 181, 0.16)"
                                }

                                return (
                                    <div style={styles} className="text-center absolute rounded-xl bg-white px-6 md:p-12 py-9 flex flex-col items-center">
                                        <Quote className="absolute transform scale-50 xl:scale-75 -top-1" />
                                        
                                        <p className=" text-md md:text-lg 2xl:text-xl mt-8 text-bitGray-300 font-quicksand">{description}</p>
                                        <span className="block mt-8 md:mt-12 text-xs md:text-md 2xl:text-lg">
                                            <b>{author}</b> - <span>{position}</span>
                                        </span>
                                    </div>
                                )
                            })
                        }
                        <Dots className="absolute -top-20 md:-top-8 transform scale-75 md:scale-90 -right-52 md:-right-32" />
                        <Dots variant="green" className="absolute top-52 transform scale-75 md:scale-90 -left-40 md:-left-28" />
                    </div>
                    <div className=" absolute transform left-1/2 -translate-x-1/2 space-x-10 bottom-0 flex w-full max-w-sm justify-center items-center md:mt-16">
                        <ArrowOutline role="button" tabIndex="0" className="transform scale-50 md:scale-75 transition-all duration-100 hover:shadow-md rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-black" />
                        <ArrowOutline role="button" tabIndex="0" className="transform -rotate-180 scale-50 md:scale-75 transition-all duration-100 hover:shadow-md rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-black" />
                    </div>
                    {
                        homeData.reviews.assets.map((a, i)=> {
                        // Spreading avatars Clockwise from 11'
                        const loci = {
                            0: {top:"10%", left:"15%"},
                            1: {top:"10%", right:"20%"},
                            2: {top:"50%", right:"5%"},
                            3: {bottom:"0%", right:"12%"},
                            4: {bottom:"0", left:"10%"},
                            5: {top:"45%", left:"5%"},
                        }

                            return (
                                <img 
                                src={a} 
                                style={loci?.[i]} 
                                alt="avatar" 
                                className=" hidden lg:block absolute w-20 h-20 xl:h-28 xl:w-28 bg-bitGreen-50 rounded-full z-30" />
                            )
                        })
                    }
                </div>
            </BitNobContainer>
        </div>
    )
}

export default Reviews