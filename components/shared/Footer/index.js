import React from "react"
import BitNobContainer from "../../UI/Container"
import BitNobButton from "../../UI/Button"
import BitNobInput from "../../UI/Input"
import BitNobLink from "../../UI/Link"
import { LogoFull } from "../../../public"
import { headerFooterLinks } from "static"

const { footerLinks } = headerFooterLinks;

const Footer = ()=> {

    return(
        <footer className="bg-white mt-20 xl:mt-40 py-12">
            <BitNobContainer>
                <div className="flex flex-col lg:flex-row text-center lg:text-left items-center lg:items-stretch justify-between space-y-20 lg:space-y-0 lg:space-x-12">
                    <LogoFull />
                    {
                        Object.entries(footerLinks.links).map(([title, links])=> (
                            <React.Fragment>
                                <ul>
                                    <h3 className="text-black font-bold font-gordita text-xs uppercase mb-3">{title}</h3>
                                    {
                                        links.map(l=> (
                                            <li>
                                                <BitNobLink className="block w-full lg:w-max text-center lg:text-left font-normal py-2" to={l.title}>{l.title}</BitNobLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </React.Fragment>
                        ))
                    }
                    <ul className="flex-1 max-w-sm">
                        <h3 className="text-black font-bold font-gordita text-xs uppercase mb-4">Subscribe to our newsletter</h3>
                        <p className="text-sm text-black">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <div className="mt-4 ">
                            <form>
                                <div className="flex space-x-4">
                                    <BitNobInput required box={{minWidth:"250px"}} className="flex-2" placeholder="Enter your email" name="email" />
                                    <BitNobButton className="flex-1" variant="black">Subscribe</BitNobButton>
                                </div>
                            </form>
                        </div>
                    </ul>
                </div>
                <div style={{height:"1px"}} className="bg-bitGray-50 mt-16 mb-9 w-full" />
                <div className="flex flex-col-reverse md:flex-row text-center md:text-left justify-between items-center md:space-x-5">
                    <h2 className="font-quicksand mt-8 md:mt-0 block font-bold">
                        © {new Date().getFullYear()} Bitnob Technologies. All rights reserved.
                    </h2>
                    <ul className="flex w-full md:w-auto justify-evenly md:justify-items-start space-x-7">
                        {
                            Object.entries(footerLinks.socials).map(([key, {link, icon}])=> (
                                <li title={key}>
                                    <BitNobLink className="text-black text-lg" to={link} title={key}>{icon}</BitNobLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <p className="mt-10 text-bitGray-100">{footerLinks.description}</p>
            </BitNobContainer>
        </footer>
    )
}

export default Footer