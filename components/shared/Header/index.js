import BitNobContainer from "../../UI/Container"
import BitNobButton from "../../UI/Button"
import BitNobLink from "../../UI/Link"
import React from "react"
import { LogoFull } from "../../../public";
import { mockData } from '../../../static'
import style from './Header.module.css';
import { useCloseContext } from "../../../hooks";

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
    }else if(title === "Features"){
        return(
            <div className="absolute top-0 p-6 rounded-lg bg-red-300 shadow-md">
                Heere
            </div>
        )
    }

    return <>Hello</>
}


const Header = ()=> {
    const { headerLinks } = mockData;
    const [activelink, setActiveLink] = React.useState('')
    const { ref, visible, setVisible } = useCloseContext()

    return(
        <header>
            <BitNobContainer>
                <div className="flex justify-between items-center py-4 px-6 md:mt-10 rounded-xl bg-green-50">
                    <div>
                        <LogoFull />
                    </div>
                    <div className="flex justify-between items-center space-x-24">
                        <ul className="flex relative space-x-12">
                            {
                                Object.entries(headerLinks).map(([key, val])=> (
                                    <React.Fragment>
                                        <li ref={ref} className="relative">
                                        {
                                            Array.isArray(val) ? 
                                                <span onClick={()=> {
                                                    setActiveLink(key);
                                                    setVisible(true)
                                                }} className="relative cursor-pointer hover:opacity-80 font-bold block">
                                                    {key} 
                                                </span>
                                            :
                                                <BitNobLink to={val}>
                                                    {key}
                                                </BitNobLink>
                                        }
                                            {(activelink === key && visible) && <MenuDropDown title={activelink} data={headerLinks[activelink]} />}
                                        </li>
                                    </React.Fragment>
                                ))
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
}

export default Header