import React from 'react';
import { BitNobContainer, BitNobLink } from "components";
import styles from 'styles/ProductPage.module.css';
import { MdHome } from 'react-icons/md'
import { AppStore, FaqSvg, NobCredit, PlayStore, Savings, Usd, Wallet } from "public"
import { useRouter } from "next/dist/client/router";


const BreadCrumb = ()=> {
    const { pathname } = useRouter();

    const breadcrumb = [
        {title: <MdHome />, route: '/'},
        {title:"Features", route:'/'},
        {title: pathname.replace(/[^a-zA-Z0-9 ]/g, " "), route: pathname }
    ]


    return(
        <ul className="breadcrumb mt-10 flex space-x-2 lg:space-x-4 lg:space-x-4 items-center">
            {
                breadcrumb.map(({title, route}, i)=> (
                    <React.Fragment>
                        <li>
                            <BitNobLink className="text-bitGray-50 text-sm capitalize" to={route || title}>{title}</BitNobLink>
                        </li>
                        {(breadcrumb.length - i !== 1) && <span className="text-bitGray-50">/</span>}
                    </React.Fragment>
                ))
            }
        </ul>
    )
}

const ProductPage= ({ heading, subHeading, dataList, desktopImg, mobileImg })=> {
    const icons = {
        "USD": <Usd />,
        "Savings" : <Savings />,
        'USD Wallet': <Wallet />,
        'NobCredit': <NobCredit />,
        'FAQs': <FaqSvg />
    }

    return(
        <div>
            <BitNobContainer>
                <BreadCrumb />
            </BitNobContainer>
            <div className={`mt-4 relative flex flex-col lg:flex-row flex-nowrap ${styles.hero}`}>
                <BitNobContainer className="flex-1">
                    <div className="flex flex-col-reverse lg:flex-row justify-between lg:space-x-28 2xl:space-x-10">
                        <div className="max-w-md">
                            <div className="hidden lg:block">
                                <div>
                                    {icons[heading]}
                                </div>
                                <h1 className="text-black mt-1 mb-4 lg:mb-2 leading-tight text-2xs md:text-md lg:text-lg font-gordita font-black">
                                    {subHeading}
                                </h1>
                                <h1 className="text-black leading-tight text-2xl xl:text-4xl 2xl:text-5xl font-gordita font-black">
                                    {heading}
                                </h1>
                            </div>
                            <div className="space-y-12 items-center mt-12">
                                {
                                    dataList?.map(({title, description})=> (
                                        <div>
                                            <h1 className="text-black mb-4 leading-tight text-xs sm:text-md lg:text-lg font-gordita font-black">{title}</h1>
                                            <p className=" text-2xs md:text-sm text-bitGray-200">{description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="z-10">
                            <div className="mb-10 mobile block lg:hidden">
                                <div>
                                    {icons[heading]}
                                </div> 
                                <h1 className="text-black mb-4 lg:mb-2 leading-tight text-2xs md:text-md lg:text-lg font-gordita font-black">
                                    {subHeading}
                                </h1>
                                <h1 className="text-black leading-tight text-2xl xl:text-4xl 2xl:text-5xl font-gordita font-black">
                                    {heading}
                                </h1>
                            </div>
                            <div className={`max-w-2xl ${styles.hero_image}`}>
                                <img src={desktopImg} className="hidden lg:block desktop" />
                                <img src={mobileImg} className="block lg:hidden mobile relative left-1/4" />
                            </div>
                        </div>
                    </div>
                </BitNobContainer>
                <div className={`h-96 bg-bitGreen-100 w-full absolute block ${styles.product_bg}`} />
            </div>
            <BitNobContainer>
                <div className={`mt-40 flex lg:block flex-col items-center overflow-hidden lg:overflow-visible pt-20 px-6 lg:p-16 lg:py-12 relative rounded-2xl bg-left bg-cover ${styles.product_foot}`}>
                    <div className=" max-w-sm mx-auto lg:mx-0 lg:max-w-xs text-center lg:text-left">
                        <h1 className="text-black pb-2 leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-4xl font-gordita font-black">
                            Freedom For Your Money
                        </h1>
                        <div className="flex space-x-4 justify-center items-center mt-6 md:mt-12">
                            <BitNobLink to="#">
                                <AppStore className="w-32 md:w-auto" />
                            </BitNobLink>
                            <BitNobLink to="#">
                                <PlayStore className="w-32 md:w-auto" />
                            </BitNobLink>
                        </div>
                    </div>
                    <img src="/images/half-phone.png" alt="app" className="lg:absolute max-w-sm md:max-w-lg lg:max-w-md right-0 lg:-top-16 mt-12 md:mt-20 lg:mt-0" />
                </div>
            </BitNobContainer>
        </div>
    )
}


export default ProductPage