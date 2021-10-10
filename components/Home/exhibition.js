import React, { useState } from 'react';
import { homeData } from 'static';
import { BitNobContainer } from '..';
import { Arrow2, Circle } from "public";
import styles from 'styles/Home.module.css'
import classNames from 'classnames';


const Exhibition = () => {
    const [active, setActive] = useState(homeData.slides.defaultImage);

    const getImage = ()=> {
        if(active > -1) return homeData.slides.steps[active]?.image;
        return homeData.slides.defaultImage;
    }

    const skipF = () => {
        if(active < homeData.slides.steps.length - 1) setActive(active + 1)
    }

    const skipB = ()=> {
        if(!isNaN(active) && active > -1) {
            setActive(active - 1)
        }
    }


    return(
        <div className="mt-28">
            <BitNobContainer>
            <div className="flex flex-col items-center justify-center relative">
                <div className="flex flex-col lg:flex-row z-10 space-y-4 lg:space-y-0 lg:space-x-4">
                    {
                        homeData.slides.steps.map(({ trace, title }, i)=> {
                            const isActive = active === i;
                            const styles = {
                                0: {left: "70%"},
                                3: {left: "45%"},
                            }

                            return(
                                <div 
                                    role="button"
                                    onClick={()=> setActive(i)}
                                    className={classNames(
                                        `relative flex cursor-default justify-center items-center lg:w-64 py-7 px-8 lg:py-4 bg-white whitespace-pre text-black font-bold font-gordita text-center text-lg md:text-xl lg:text-sm 2xl:text-md
                                        rounded-3xl`
                                    )}
                                    style={{border: `1.5px solid ${isActive ? "#23FDB4" : 'rgba(239, 241, 241, 1)'} `}}>
                                    {title}
                                    <span style={styles[i]} className="hidden lg:block left-1/2 transform -translate-x-2/3 top-full absolute">{trace}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex -mt-12 z-10 max-w-5xl relative">
                    <img src={getImage()} className={classNames(styles.active_slide, 'max-w-full')} />
                </div>
                <div className="flex w-full -mt-32 md:-mt-80 space-x-20 md:space-x-0 justify-between md:justify-around items-center">
                    <Arrow2 onClick={()=> skipB()} className="z-20 relative -left-10 hover:opacity-80 transition-all transform scale-75 xl:scale-75 2xl:scale-90 duration-150 cursor-pointer" />
                    <Arrow2 onClick={()=> skipF()} className="z-20 relative -right-10 transform scale-75 xl:scale-75 2xl:scale-90 -rotate-180 hover:opacity-90 transition-all duration-150 cursor-pointer" />
                </div>
                <Circle className=" max-w-xs md:max-w-md lg:max-w-3xl z-0 top-52 md:top-96 lg:-top-14 absolute" />
            </div>
            </BitNobContainer>
        </div>
    )
}

export default Exhibition