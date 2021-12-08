import React, { useState, Fragment } from 'react';
import Image from 'next/image';

import { homeData } from 'static';
import { BitNobContainer } from '..';
import { ArrowL, ArrowR, Circle } from "public";
import styles from 'styles/Home.module.css'
import classNames from 'classnames';
import { isBrowser } from '../../utils'


const Exhibition = () => {
    const length = homeData.slides.length;
    const [active, setActive] = useState(-1);
    const _isActive = active > -1;

    const skipF = () => {
        if(active < length - 1) setActive(active + 1)
    }

    const skipB = ()=> {
        if(active > 0) {
            setActive(active - 1)
        }
    }


    return(
        <div className="mt-28">
            <BitNobContainer>
            <div className="flex flex-col items-center justify-center relative">
                <div className="flex flex-col lg:flex-row z-10 space-y-4 lg:space-y-0 lg:space-x-4 mb-36 lg:mb-0">
                    {
                        homeData.slides.map(({ trace, title }, i)=> {
                            const isActive = active === i;
                            const styles = {
                                0: {left: "70%"},
                                3: {left: "45%"},
                            }

                            return(
                                <>
                                    {
                                        title && 
                                        <div className="relative w-full" key={title}>
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
                                    }
                                </>
                            )
                        })
                    }
                </div>
                <div style={{minHeight: "300px"}} className="flex transform scale-105 md:scale-100 -mt-16 z-10 lg:max-w-4xl xl:max-w-5xl lg:min-h-screen relative">
                    {
                        homeData.slides.map(({ image }, i) => (
                            <figure key={image} className={classNames('max-w-full', {'hidden': i !== active } )}>
                                <Image 
                                    className="cursor-default" 
                                    src={image} 
                                    width="1500" 
                                    height="1200" 
                                    objectFit="contain" 
                                    priority />
                            </figure>
                            )
                        )
                    }
                </div>
                <div className="flex w-full -mt-20 md:-mt-28 lg:-mt-60 space-x-28 md:space-x-10 md:space-x-0 justify-evenly md:justify-around items-center cursor-pointer">
                    <ArrowL 
                        isActive={_isActive}
                        onClick={()=> skipB()} 
                        className={classNames({'bg-bitGreen-200': _isActive, 'bg-white': !_isActive}, "z-20 hover:bg-bitGreen-200 relative w-14 h-14 md:w-20 md:h-20 lg:h-24 lg:w-24 p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl hover:fill transition-all transform duration-150")} />
                    <ArrowR 
                        isActive={_isActive}
                        onClick={()=> skipF()} 
                        className={classNames({'bg-bitGreen-200': _isActive, 'bg-white': !_isActive}," hover:bg-bitGreen-200  z-20 relative w-14 h-14 md:w-20 md:h-20 lg:h-24 lg:w-24 p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl transition-all transform duration-150")} />
                </div>
                <Circle className={`max-w-xs md:max-w-xl lg:max-w-2xl xl:max-w-3xl z-0 top-52 md:top-96 lg:-top-14 absolute ${isBrowser()?.innerWidth < 600 && 'w-60'}`} />
            </div>
            </BitNobContainer>
        </div>
    )
}

export default Exhibition