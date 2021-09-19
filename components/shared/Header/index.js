import BitNobContainer from "../../UI/Container"
import BitNobButton from "../../UI/Button"
import BitNobLink from "../../UI/Link"
import React, { useEffect, useRef } from "react"

import style from './Header.module.css';
import { useCloseContext } from "../../../hooks";
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { HiViewGrid } from 'react-icons/hi';
import { LogoFull } from "public";
import { headerFooterLinks } from "static";
import { useRouter } from "next/dist/client/router";

const { headerLinks } = headerFooterLinks;


const MenuDropDown = ({ title, data }) => {
    if (!data) return null

    if (title === "Company") {
        return (
            <div className={`absolute z-20 flex flex-col text-center items-center space-y-1 py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-10 whitespace-pre rounded-lg bg-white shadow-md ${style.dropDown}`}>
                {
                    data.map((d) => (
                        <BitNobLink activeStyles='bg-bitGreen-50 px-4 w-full py-1 rounded-lg' className="py-2" to={d.route}>{d.title}</BitNobLink>
                    ))
                }
            </div>
        )
    }

    if (title === "Features") {
        return (
            <div className={`absolute z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2 md:py-6 lg:py-8 px-2 md:px-6 lg:px-10 rounded-lg bg-white shadow-md ${style.dropDown} ${style.wide}`}>
                {
                    data.map((d) => (
                        <BitNobLink activeStyles='bg-bitGreen-50 border border-bitGreen-100 md:border-0 px-2 py-2 transition-all duration-100 rounded-lg' to={d.route}>
                            <div className="flex items-center space-x-4 lg:space-x-2 p-1">
                                <span className=" h-12 w-12 lg:h-20 lg:w-20">
                                    {d.icon}
                                </span>
                                <div>
                                    <h4 className="text-bitGreen-500">{d.title}</h4>
                                    <p className="text-xs mt-1 text-left font-medium">{d.description}</p>
                                </div>
                            </div>
                        </BitNobLink>
                    ))
                }
            </div>
        )
    }

    return null
}


const LinkLists = ({ data }) => {
    const [key, val] = data
    const [activelink, setActiveLink] = React.useState('')
    const { ref, visible, setVisible } = useCloseContext()

    return (
        <React.Fragment key={key}>
            <li ref={ref} className="relative">
                {
                    Array.isArray(val) ?
                        <span
                            onClick={() => {
                                setActiveLink(key);
                                setVisible(!visible)
                            }}
                            className={`flex lg:cursor-pointer text-bitGray-200 hover:opacity-80 items-center space-x-8 w-full lg:w-auto lg:space-x-1 ${(activelink === key && visible) ? 'text-bitGreen-300' : ''}`}>
                            <span className={`relative font-bold block `}>
                                {key}
                            </span>
                            <span className="text-xl">
                                {!visible ? <BiChevronDown /> : <BiChevronUp />}
                            </span>
                        </span>

                        :
                        <BitNobLink className="font-bold py-4 pr-40 lg:p-0 w-full" to={val}>
                            {key}
                        </BitNobLink>
                }
                {(activelink === key && visible) && <MenuDropDown title={activelink} data={headerLinks[activelink]} />}
            </li>
        </React.Fragment>
    )
}

const Header = () => {
    const router = useRouter()
    const headerRef = useRef(null)
    const { ref, visible, setVisible } = useCloseContext()


    useEffect(()=> {
        headerRef.current?.scrollIntoViewIfNeeded()
    }, [router.pathname])
    
    return(
        <BitNobContainer>
            <header ref={headerRef} className="flex justify-between items-center py-3 xl:py-4 px-4 md:px-6 mt-6 rounded-2xl bg-bitGreen-50 z-10 w-full">
                <LogoFull className=" w-24 lg:w-32" />
                {
                    !visible ? 
                        <div 
                            ref={ref} 
                            className="bg-white z-50 lg:bg-transparent shadow-lg lg:shadow-none 
                            px-6 lg:px-0 py-10 lg:py-0 w-full lg:w-auto absolute left-0 top-24 md:top-28 lg:top-0 lg:static flex flex-col 
                            lg:flex-row justify-between lg:items-center lg:space-x-24">
                            <ul className="flex flex-col lg:flex-row relative space-y-10 lg:space-y-0 lg:space-x-12">
                                {
                                    Object.entries(headerLinks).map((a) => <LinkLists key={a[0]} data={a} />)
                                }
                            </ul>
                            <BitNobButton className=" mt-12 py-4 md:py-4 shadow-md lg:shadow-none lg:mt-0 z-10">
                                Get Started
                            </BitNobButton>
                        </div>
                    : null
                }
                <div 
                    onClick={()=> setVisible(!visible)}
                    tabIndex="0" 
                    role="button" 
                    className={`
                        transform ${!visible && "rotate-45"} 
                        appearance-none outline-none text-3xl md:text-4xl lg:hidden 
                        cursor-default transition-all duration-200 hover:opacity-70 
                        focus:ring-2 focus:ring-offset-2 focus:ring-bitGreen-200 bg-white 
                        rounded-full p-2 md:p-1 flex justify-center items-center box-border w-12 h-12 
                        md:h-16 md:w-16 text-bitGreen-200`}>
                    <HiViewGrid />
                </div>
            </header>
        </BitNobContainer>
    )
}

export default Header