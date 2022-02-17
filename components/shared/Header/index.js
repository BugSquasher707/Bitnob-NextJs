import classNames from 'classnames'
import BitNobContainer from "../../UI/Container"
import BitNobButton from "../../UI/Button"
import BitNobLink from "../../UI/Link"
import React, { useEffect, useRef, useState } from "react"

import style from './Header.module.css';
import { useCloseContext } from "../../../hooks";
import { BiChevronDown, BiChevronUp, BiSearch } from 'react-icons/bi';
import { HiViewGrid } from 'react-icons/hi';
import { LogoFull } from "public";
import { headerFooterLinks } from "static";
import { useRouter } from "next/dist/client/router";
import { bitnobAppleStore } from 'app-constants'

const { headerLinks } = headerFooterLinks;

const MenuDropDown = ({ title, setVisible, data, visible }) => {
    if (!data) return null

    if (title === "Company") {
        return ( 
            <div className={`absolute z-20 flex-col text-center items-center space-y-2 py-4 md:py-6 lg:py-8 px-4 md:px-12 lg:px-10 whitespace-pre rounded-lg bg-white shadow-md ${style.dropDown} ${visible ? 'flex' : 'hidden'}`}>
                {
                    data.map((d) => (
                        <BitNobLink 
                            key={d.route}
                            onClick={()=> setVisible(false)}
                            style={{minWidth: "200px"}} 
                            activeStyles='bg-bitGreen-50 px-4 w-full py-1' 
                            className="py-2 px-8  rounded-xl font-semibold hover:bg-bitGreen-50" 
                            to={d.route}>{d.title}</BitNobLink>
                    ))
                }
            </div>
        )
    }

    if (title === "Features") {
        return (
            <div className={`absolute z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2 md:py-6 lg:py-8 px-2 md:px-6 lg:px-10 rounded-lg bg-white shadow-md ${style.dropDown} ${style.wide} ${visible ? 'flex' : 'hidden'}`}>
                {
                    data.map((d) => (
                        <BitNobLink 
                            key={d.route}
                            onClick={()=> setVisible(false)}
                            className="hover:bg-bitGreen-50 rounded-xl hover:bitGreen-50 pl-2 pr-6 py-2" 
                            activeStyles='bg-bitGreen-50 transition-all duration-100' to={d.route}>
                            <div className="flex">
                                <figure 
                                    style={{minWidth: "55px", maxWidth: "55px", height:"55px"}} 
                                    className={classNames({'p-2': d.scale}, 'relative -mt-1')}>
                                    <img className="max-w-full" src={`/images/${d.icon}`}  />
                                </figure>
                                <div className="pl-3">
                                    <h4 className="text-bitGreen-500 font-semibold">{d.title}</h4>
                                    <p className="text-xs mt-2 text-left font-medium">{d.description}</p>
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
    const { ref, visible, setVisible } = useCloseContext(false)

    return (
        <React.Fragment key={key}>
            <li className={classNames({relative: activelink === 'Company'})} ref={ref}>
                {
                    Array.isArray(val) ?
                        <span
                            onClick={() => {
                                setActiveLink(key);
                                setVisible(!visible)
                            }}
                            className={classNames(
                                {'text-bitGray-300': !(activelink === key && visible)}, 
                                {'text-bitGreen-300':(activelink === key && visible)}, 
                                `flex lg:cursor-pointer transition-all duration-200 hover:text-bitGreen-200 items-center space-x-8 w-full lg:w-auto lg:space-x-1`
                            )}>
                            <span className={`relative font-bold block `}>
                                {key}
                            </span>
                            <span className="text-xl">
                                {!visible ? <BiChevronDown /> : <BiChevronUp />}
                            </span>
                        </span>

                        :
                        <BitNobLink className="font-bold py-4 pr-40 lg:p-0 w-full hover:text-bitGreen-200" to={val}>
                            {key}
                        </BitNobLink>
                }
                
                <MenuDropDown setVisible={setVisible} visible={activelink === key && visible} title={activelink} data={headerLinks[activelink]} />
            </li>
        </React.Fragment>
    )
}

const Header = () => {
    
    const router = useRouter()
    const headerRef = useRef(null)
    const { ref, visible, setVisible } = useCloseContext(false, true)

    useEffect(()=> {
        setVisible(false)
        headerRef.current?.scrollIntoViewIfNeeded()

    }, [router.pathname])

    const [addClass, setAddClass] = useState(false)

    const showSearchBar = () => {
        setAddClass(!addClass)
    }

    const [searchVal, setSearchVal] = useState('')

    const handleSearchBar = async (e) => {

        e.preventDefault();

        if(searchVal.length){
            router.push(`/post/search/${searchVal}`)
            setSearchVal('')
        }

    }
    
    return(
        <BitNobContainer>
            <header ref={headerRef} className="hidden lg:flex z-20 justify-between items-center relative py-3 xl:py-4 px-4 md:px-12 mt-6 rounded-2xl bg-bitGreen-50 w-full">

                <BitNobLink to="/">
                    <LogoFull className=" w-24 lg:w-32" />
                </BitNobLink>
                
                    <div 
                        ref={ref} 
                        className={classNames(`transition-all duration-300 bg-white z-50 lg:bg-transparent shadow-lg lg:shadow-none 
                        px-6 lg:px-0 py-10 lg:py-0 w-full lg:w-auto absolute left-0 top-24 md:top-28 lg:top-0 lg:static flex flex-col 
                        lg:flex-row justify-between lg:items-center lg:space-x-24`, style.drop_visible)}>
                        
                        <ul className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-12">
                            
                            {
                                Object.entries(headerLinks).map((a) => <LinkLists key={a[0]} data={a} />)
                            }
                            
                            <div className={`hidden relative ${style.searchIconContainer}`}>
                            
                                <BiSearch className={`cursor-pointer text-lg`} onClick={showSearchBar}/>
                                
                                {addClass && <div className={`h-16 flex justify-center items-center absolute top-12 right-0 ${style.animateSearchBox}`}>    

                                    <div className={`flex relative justify-start items-center ${style.boxSearchBar}`}>
                                
                                        <BiSearch className='absolute text-sm ml-3 text-gray-500'/>

                                        <form onSubmit={handleSearchBar}>
                                            <input type="text" placeholder='Search' value={searchVal} onChange={(e) => setSearchVal(e.target.value)}
                                            className='w-48 py-1 px-2 pl-9 text-sm font-semibold text-gray-500 focus:outline-none rounded-lg border'/>
                                        </form>
                                    </div>

                                </div>}
                            
                            </div>

                            <div className={`flex relative justify-start items-center ${style.searchContainer}`}>
                            
                                <BiSearch className='absolute text-sm ml-3 text-gray-500'/>
                                
                                <form onSubmit={handleSearchBar}>
                                    <input type="text" placeholder='Search' value={searchVal} onChange={(e) => setSearchVal(e.target.value)}
                                    className='w-48 py-1 px-2 pl-9 text-sm font-semibold text-gray-500 focus:outline-none rounded-lg border'/>
                                </form>
                            
                            </div>

                        </ul>

                    </div>

                <div 
                    onClick={()=> setVisible(!visible)}
                    tabIndex="0" 
                    style={{ transform: visible ? 'rotate(135deg)' : ''}}
                    role="button" 
                    className={`
                        appearance-none outline-none text-3xl md:text-4xl lg:hidden 
                        cursor-default transition-all duration-300 hover:opacity-70 
                        focus:ring-2 focus:ring-offset-2 focus:ring-bitGreen-200 bg-white 
                        rounded-full p-2 md:p-1 flex justify-center items-center box-border w-12 h-12 
                        md:h-16 md:w-16 text-bitGreen-200`}>
                    <HiViewGrid />
                </div>

            </header>

            {/**Mobile */}
            <header ref={headerRef} className="flex lg:hidden z-20 justify-between items-center relative py-3 xl:py-4 px-4 md:px-6 mt-6 rounded-2xl bg-bitGreen-50 w-full">
                <BitNobLink to="/">
                    <LogoFull className=" w-24 lg:w-32" />
                </BitNobLink>
                {
                    visible ? 
                        <div 
                            ref={ref} 
                            className={`${visible ? style.drop_visible : ''} transition-all duration-300 bg-white z-50 lg:bg-transparent shadow-lg lg:shadow-none 
                            px-6 lg:px-0 py-10 lg:py-0 w-full lg:w-auto absolute left-0 top-24 md:top-28 lg:top-0 lg:static flex flex-col 
                            lg:flex-row justify-between lg:items-center lg:space-x-24`}>
                            
                            <ul className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-12">
                                

                                {
                                    Object.entries(headerLinks).map((a) => <LinkLists key={a[0]} data={a} />)
                                }

                            </ul>
                        </div>
                    : null
                }


                <div className='flex justify-between items-center'>

                        <div className={`hidden relative ${style.searchIconContainer}`}>
                                                                            
                             {addClass && <div className={`h-16 flex justify-center items-center absolute sm:top-10 top-9 -right-10 ${style.animateSearchBox}`}>    
                
                                 <div className={`flex relative justify-start items-center ${style.boxSearchBar}`}>
                                                
                                    <BiSearch className='absolute text-sm ml-3 text-gray-500'/>
                                                        
                                    <form onSubmit={handleSearchBar}>
                                        <input type="text" placeholder='Search' value={searchVal} onChange={(e) => setSearchVal(e.target.value)}
                                        className='w-48 py-1 px-2 pl-9 text-sm font-semibold text-gray-500 focus:outline-none rounded-lg border'/>
                                    </form>
                                                    
                                </div>
                
                            </div>}
                                            
                        </div>
                    <div 
                        onClick={showSearchBar}
                        tabIndex="0" 
                        className={`
                        appearance-none outline-none text-xl md:text-2xl lg:hidden 
                        cursor-default transition-all duration-300 hover:opacity-70 
                        ${addClass ? `focus:ring-2 focus:ring-offset-2 focus:ring-bitGreen-200` : ''} bg-white 
                        rounded-full p-2 md:p-1 flex justify-center items-center box-border w-12 h-12 
                        md:h-16 md:w-16 text-bitGreen-200 mr-3`}>
                        <BiSearch />


                    </div>

                    <div 
                        onClick={()=> setVisible(!visible)}
                        tabIndex="1" 
                        style={{ transform: visible ? 'rotate(135deg)' : ''}}
                        role="button" 
                        className={`
                            appearance-none outline-none text-3xl md:text-4xl lg:hidden 
                            cursor-default transition-all duration-300 hover:opacity-70 
                            focus:ring-2 focus:ring-offset-2 focus:ring-bitGreen-200 bg-white 
                            rounded-full p-2 md:p-1 flex justify-center items-center box-border w-12 h-12 
                            md:h-16 md:w-16 text-bitGreen-200`}>
                        <HiViewGrid />
                    </div>
                    
                </div>
            </header>
        </BitNobContainer>
    )
}

export default Header