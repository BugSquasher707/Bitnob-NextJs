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
        <footer className="bg-white mt-40 py-12">
            <BitNobContainer>
                <div className="grid grid-cols-5">
                    <LogoFull />
                    {
                        Object.entries(footerLinks.links).map(([title, links])=> (
                            <React.Fragment>
                                <ul>
                                    <h3 className="text-black font-bold font-gordita text-xs uppercase mb-3">{title}</h3>
                                    {
                                        links.map(l=> (
                                            <li>
                                                <BitNobLink className="block w-max font-normal py-2" to={l.title}>{l.title}</BitNobLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </React.Fragment>
                        ))
                    }
                    <ul className="col-span-2 max-w-sm">
                        <h3 className="text-black font-bold font-gordita text-xs uppercase mb-4">Subscribe to our newsletter</h3>
                        <p className="text-sm text-black">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <div className=" mt-4 ">
                            <form>
                                <div className="flex space-x-4">
                                    <BitNobInput required className="flex-2" placeholder="Enter your email" name="email" />
                                    <BitNobButton style={{maxWidth:"120px"}} className="flex-1" variant="black">Subscribe</BitNobButton>
                                </div>
                            </form>
                        </div>
                    </ul>
                </div>
                <div style={{height:"1px"}} className="bg-gray-50 mt-16 mb-9 w-full" />
                <div className="flex justify-between items-center space-x-5">
                    <h2 className="font-quicksand font-bold">
                        © {new Date().getFullYear()} Bitnob Technologies. All rights reserved.
                    </h2>
                    <ul className="flex space-x-7">
                        {
                            Object.entries(footerLinks.socials).map(([key, {link, icon}])=> (
                                <li title={key}>
                                    <BitNobLink className="text-black text-lg" to={link} title={key}>{icon}</BitNobLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <p className="mt-10 text-gray-100">{footerLinks.description}</p>
            </BitNobContainer>
        </footer>
    )
}

export default Footer