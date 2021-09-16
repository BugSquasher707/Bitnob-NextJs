import React from "react"
import BitNobContainer from "../../UI/Container"
import BitNobButton from "../../UI/Button"
import BitNobLink from "../../UI/Link"
import { LogoFull } from "../../../public"
import { mockData } from '../../../static'

const Footer = ()=> {

    return(
        <div className="bg-white">
            <BitNobContainer>
                <div className="grid grid-cols-4">
                    <LogoFull />
                    {
                        Object.entries(mockData.footerLinks).map(([title, links])=> (
                            <React.Fragment>
                                <h3 className="text-black font-black uppercase mb-4">{title}</h3>
                                <ul>
                                    {
                                        links.map(l=> (
                                            <li>
                                                <BitNobLink className="my-6" to={l.title}>{l.title}</BitNobLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </React.Fragment>
                        ))
                    }
                </div>
            </BitNobContainer>
        </div>
    )
}

export default Footer