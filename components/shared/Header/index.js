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
            <div className={`absolute z-20 flex flex-col text-center items-center space-y-1 p-8 px-10 whitespace-pre rounded-lg bg-white shadow-md ${style.dropDown}`}>
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
            <div className={`absolute z-20 grid grid-cols-3 gap-6 py-8 px-10 rounded-lg bg-white shadow-md ${style.dropDown} ${style.wide}`}>
                {
                    data.map((d) => (
                        <BitNobLink activeStyles='bg-bitGreen-50 px-4 w-full py-2 transition-all duration-100 rounded-lg' to={d.route}>
                            <div className="flex col-span-1 items-center space-x-2 p-1">
                                <span className="h-20 w-20">
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
                                setVisible(true)
                            }}
                            className={`flex  cursor-pointer hover:opacity-80 items-center space-x-1 ${(activelink === key && visible) ? 'text-bitGreen-300' : ''}`}>
                            <span className={`relative font-bold block `}>
                                {key}
                            </span>
                            <span className="text-xl">
                                {!visible ? <BiChevronDown /> : <BiChevronUp />}
                            </span>
                        </span>

                        :
                        <BitNobLink className="font-bold" to={val}>
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

    useEffect(()=> {
        headerRef.current?.scrollIntoViewIfNeeded()
    }, [router.pathname])
    
    return(
        <BitNobContainer>
            <header ref={headerRef} className="flex justify-between items-center py-3 xl:py-4 px-6 md:mt-6 rounded-xl bg-bitGreen-50 z-10 w-full">
                <div>
                    <LogoFull />
                </div>
                <div className=" hidden absolute lg:static lg:flex justify-between items-center space-x-24">
                    <ul className="flex relative space-x-12">
                        {
                            Object.entries(headerLinks).map((a) => <LinkLists key={a[0]} data={a} />)
                        }
                    </ul>
                    <BitNobButton>
                        Get Started
                    </BitNobButton>
                </div>
                <div 
                    tabIndex="0" 
                    role="button" 
                    className="text-4xl lg:hidden cursor-pointer transition-all duration-300 hover:opacity-95 bg-white rounded-full p-1 flex justify-center items-center box-border h-16 w-16 text-bitGreen-200">
                    <HiViewGrid />
                </div>
            </header>
        </BitNobContainer>
    )
}

export default Header