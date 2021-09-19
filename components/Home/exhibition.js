import React from 'react';
import { homeData } from 'static';
import { BitNobContainer } from '..';
import { Arrow2, Circle } from "public";


const Exhibition = props => {
    const { slides } = homeData

    return(
        <div style={{minHeight:"1000px"}} className="mt-28">
            <BitNobContainer>
            <div className="flex flex-col items-center justify-center relative">
                <div className="flex space-x-4 mb-2">
                {
                    slides.map(({ trace, title })=> {
                    return(
                        <div className="relative">
                        <div 
                            style={{borderColor:"rgba(239, 241, 241, 1)"}} 
                            className="px-14 py-4  text-black font-bold border font-gordita text-lg rounded-3xl">
                            {title}
                            <span className="block left-1/5 top-full absolute">{trace}</span>
                        </div>
                        </div>
                    )
                    })
                }
                </div>
                <div className="flex ml-8 mt-40">
                    {
                    slides.map(({image}, i)=> {
                        const style = {
                        height: "550px",
                        marginTop: `-${[1,2].includes(i) ? "90" : ""}px`,
                        marginLeft: `-${i < 2 ? "40" : "44"}px`,
                        transform: `rotate(${i < 2 ? "-18" : "15"}deg)`,
                        }
                        
                    return(
                        <img 
                        style={{left: i ? 20 : 0 }} 
                        src={image} 
                        style={style} 
                        className="max-w-xs top-32 z-10" />
                    )})
                    }
                </div>
                <div className="flex w-full -mt-60 justify-around items-center">
                <Arrow2 className="z-20 hover:opacity-80 transition-all duration-150 cursor-pointer" />
                <Arrow2 style={{transform: "rotate(209deg)"}} className="z-20 transform hover:opacity-90 transition-all duration-150 cursor-pointer" />
                </div>
                <Circle className="max-w-3xl top-10 absolute" />
            </div>
            </BitNobContainer>
        </div>
    )
}

export default Exhibition