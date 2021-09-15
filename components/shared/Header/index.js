import BitNobContainer from "../../UI/Container"
import BitNobButton from "../../UI/Button"
import BitNobLink from "../../UI/Link"
import React from "react"
import { LogoFull } from "../../../public"

const Header = ()=> {

    const links = {
        Home: '/',
        Features: [],
        Business: '/business',
        Company: []
    }

    return(
        <header>
            <BitNobContainer>
                <div className="flex justify-between items-center py-4 px-6 md:mt-8 rounded-xl bg-green-50">
                    <div>
                        <LogoFull />
                    </div>
                    <div className="flex justify-between items-center space-x-24">
                        <ul className="flex space-x-12">
                            {
                                Object.entries(links).map(([key, val])=> (
                                    <React.Fragment>
                                        {
                                            Array.isArray(val) ? 
                                            <li>
                                                <span className="relative cursor-pointer hover:opacity-80 font-bold block">
                                                    {key} 
                                                </span>
                                            </li>
                                            :
                                            <li>
                                                <BitNobLink to={val}>
                                                    {key}
                                                </BitNobLink>
                                            </li>
                                        }
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