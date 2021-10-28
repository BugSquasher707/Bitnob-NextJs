import React, { useState } from 'react';
import { homeData } from 'static';
import { BitNobContainer } from '..';
import { ArrowL, ArrowR, Circle } from "public";
import styles from 'styles/Home.module.css'
import classNames from 'classnames';
import { isBrowser } from '../../utils'


const Exhibition = () => {
    const length = homeData.slides.steps.length;
    const [active, setActive] = useState(-1);
    const _isActive = active > -1;

    const getImage = ()=> {
        if(active > -1) return homeData.slides.steps[active]?.image;
        return homeData.slides.defaultImage;
    }

    const skipF = () => {
        if(active < length - 1) setActive(active + 1)
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
                <div className="flex flex-col lg:flex-row z-10 space-y-4 lg:space-y-0 lg:space-x-4 mb-36 lg:mb-0">
                    {
                        homeData.slides.steps.map(({ trace, title }, i)=> {
                            const isActive = active === i;
                            const styles = {
                                0: {left: "70%"},
                                3: {left: "45%"},
                            }

                            return(
                                <div className="relative w-full">
                                    <div
                                        role="button" 
                                        onMouseEnter={()=> setActive(i)}
                                        style={{border: `1.7px solid ${isActive ? "#23FDB4" : 'rgba(239, 241, 241, 1)'} `}} 
                                        className={classNames(
                                        `relative z-10 flex cursor-default justify-center items-center w-full lg:w-56 xl:w-64 py-7 px-8 lg:py-4 bg-white whitespace-pre text-black font-bold font-gordita text-center text-md md:text-xl lg:text-sm 2xl:text-md
                                        rounded-3xl`
                                    )}>{title}</div>
                                    <span style={styles[i]} className="hidden lg:block left-1/2 transform -translate-x-2/3 top-full absolute">{trace}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex -mt-12 z-10 lg:max-w-4xl xl:max-w-5xl relative">
                    <img src={getImage()} className={classNames(styles.active_slide, 'max-w-full')} />
                </div>
                <div className="flex w-full -mt-20 md:-mt-28 lg:-mt-60 space-x-36 md:space-x-10 md:space-x-0 justify-evenly md:justify-around items-center">
                    <ArrowL 
                        isActive={_isActive}
                        onClick={()=> skipB()} 
                        className={classNames({'bg-bitGreen-200': _isActive, 'bg-white': !_isActive}, "z-20 hover:bg-bitGreen-200 relative w-14 h-14 md:w-20 md:h-20 lg:h-24 lg:w-24 p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl hover:fill transition-all transform duration-150 cursor-pointer")} />
                    <ArrowR 
                        isActive={_isActive}
                        onClick={()=> skipF()} 
                        className={classNames({'bg-bitGreen-200': _isActive, 'bg-white': !_isActive}," hover:bg-bitGreen-200  z-20 relative w-14 h-14 md:w-20 md:h-20 lg:h-24 lg:w-24 p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl transition-all transform duration-150 cursor-pointer")} />
                </div>
                <Circle className={classNames(
                        {'w-60' : isBrowser()?.innerWidth < 400},
                        'max-w-xs md:max-w-xl lg:max-w-2xl xl:max-w-3xl z-0 top-52 md:top-96 lg:-top-14 absolute'
                    )} />
            </div>
            </BitNobContainer>
        </div>
    )
}

export default Exhibition