import BitNobContainer from "../../UI/Container"
import BitNobButton from "../../UI/Button"
import BitNobLink from "../../UI/Link"
import React from "react"
import { LogoFull } from "../../../public";
import { mockData } from '../../../static'
import style from './Header.module.css';
import { useCloseContext } from "../../../hooks";
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const MenuDropDown = ({title, data})=> {
    if(!data) return null

    if(title === "Company"){
        return (
            <div className={`absolute flex flex-col text-center items-center space-y-5 p-8 px-10 whitespace-pre rounded-lg bg-white shadow-md ${style.dropDown}`}>
                {
                    data.map((d)=> (
                        <BitNobLink activeStyles='bg-green-50 px-4 w-full py-1 rounded-lg' to={d.route}>{d.title}</BitNobLink>
                    ))
                }
            </div>
        )
    }
    
    if(title === "Features"){
        return(
            <div className={`absolute grid grid-cols-3 gap-6 p-8 px-10 rounded-lg bg-white shadow-md ${style.dropDown} ${style.wide}`}>
                {
                    data.map((d)=> (
                        <BitNobLink activeStyles='bg-green-50 px-4 w-full py-2 transition-all duration-100 rounded-lg' to={d.route}>
                            <div className="flex col-span-1 items-center space-x-2 p-1">
                                <span className="h-20 w-20">
                                    {d.icon}
                                </span>
                                <div>
                                    <h4 className="text-green-500">{d.title}</h4>
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


const LinkLists = ({ data })=> {
    const [key, val] = data
    const [activelink, setActiveLink] = React.useState('')
    const { ref, visible, setVisible } = useCloseContext()


    return(
        <React.Fragment key={key}>
            <li ref={ref} className="relative">
            {
                Array.isArray(val) ? 
                    <span
                        onClick={()=> {
                            setActiveLink(key);
                            setVisible(true)
                        }} 
                        className={`flex  cursor-pointer hover:opacity-80 items-center space-x-1 ${(activelink === key && visible) ? 'text-green-300' : ''}`}>
                        <span className={`relative font-bold block `}>
                            {key} 
                        </span>
                        <span className="text-xl">
                            {!visible ? <BiChevronDown /> : <BiChevronUp />}
                        </span>
                    </span>
                    
                :
                    <BitNobLink to={val}>
                        {key}
                    </BitNobLink>
            }
                {(activelink === key && visible) && <MenuDropDown title={activelink} data={mockData?.headerLinks[activelink]} />}
            </li>
        </React.Fragment>
    )
}

const Header = ()=> (
    <header>
        <BitNobContainer>
            <div className="flex justify-between items-center py-4 px-6 md:mt-10 rounded-xl bg-green-50">
                <div>
                    <LogoFull />
                </div>
                <div className="flex justify-between items-center space-x-24">
                    <ul className="flex relative space-x-12">
                        {
                            Object.entries(mockData?.headerLinks).map((a)=> <LinkLists key={a[0]} data={a} /> )
                        }
                    </ul>
                    <BitNobButton>
                      Get Started  
                    </BitNobButton>
                </div>
            </div>
        </BitNobContainer>
    </header>
)

export default Header