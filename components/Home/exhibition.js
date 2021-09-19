import React from 'react';
import { homeData } from 'static';
import { BitNobContainer } from '..';
import { Arrow2, Circle } from "public";
import styles from 'styles/Home.module.css'


const Exhibition = () => {

    return(
        <div className="mt-28">
            <BitNobContainer>
            <div className="flex flex-col items-center justify-center relative">
                <div className="flex flex-col lg:flex-row z-10 space-y-4 lg:space-x-4">
                    {
                        homeData.slides.map(({ trace, title })=> {
                            return(
                                <div 
                                    style={{borderColor:"rgba(239, 241, 241, 1)"}} 
                                    className="relative py-7 px-12 lg:px-10 xl:px-14 lg:py-4 bg-white whitespace-pre text-black font-bold border font-gordita text-center text-xl lg:text-sm xl:text-md 2xl:text-lg rounded-3xl">
                                    {title}
                                    <span className="hidden lg:block left-1/2 transform -translate-x-2/3 top-full absolute">{trace}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex ml-8 mt-64 lg:mt-40">
                    {
                        homeData.slides.map(({image}, i)=> {
                            const style = {
                                height: "450px",
                                marginTop: `-${[1,2].includes(i) ? "90" : ""}px`,
                                marginLeft: `-${i < 2 ? "40" : "44"}px`,
                                transform: `rotate(${i < 2 ? "-18" : "15"}deg)`,
                            }
                            
                            return(
                                <img 
                                    style={{left: i ? 20 : 0 }} 
                                    src={image} 
                                    style={style} 
                                    className={`max-w-xs top-32 z-10 ${styles.slide_image}`} />
                            )}
                        )
                    }
                </div>
                <div className="flex w-full -mt-60 justify-around items-center">
                    <Arrow2 className="z-20 hover:opacity-80 transition-all transform scale-75 xl:scale-75 2xl:scale-90 duration-150 cursor-pointer" />
                    <Arrow2 className="z-20 transform scale-75 xl:scale-75 2xl:scale-90 -rotate-180 hover:opacity-90 transition-all duration-150 cursor-pointer" />
                </div>
                <Circle className=" max-w-md lg:max-w-3xl z-0 top-96 lg:top-0 absolute" />
            </div>
            </BitNobContainer>
        </div>
    )
}

export default Exhibition