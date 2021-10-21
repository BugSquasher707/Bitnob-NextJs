import React from 'react';
import Image from 'next/image'
import { BitNobContainer, BitNobLink } from "components";
import styles from 'styles/ProductPage.module.css';
import { AppStore, PlayStore } from "public"


const ProductPage= ({ heading, subHeading, dataList, desktopImg, mobileImg, adjust })=> {
    const icons = {
        "Dollar Cost Averaging": 'dollar-cost.png',
        "Group Saving" : 'group-saving.png',
        'USD Wallet': 'usd-wallet.png',
        'NobCredit': 'nob-credit.png',
        'Bank Withdrawal': 'bank-withdrawal.png'
    }

    return(
        <div>
            <div className={`mt-16 relative flex flex-col lg:flex-row flex-nowrap ${styles.hero}`}>
                <BitNobContainer className="flex-1">
                    <div className="flex flex-col-reverse lg:flex-row justify-between lg:space-x-28 2xl:space-x-10">
                        <div className="max-w-md">
                            <div className="hidden lg:block">
                                <div className="-ml-2">
                                    <Image src={`/images/${icons[heading]}`} width="55" height="55" alt={heading} />
                                </div>
                                <h1 className=" text-bitGray-400 mt-1 mb-4 lg:mb-2 leading-tight text-2xs md:text-sm lg:text-md font-gordita font-semibold">
                                    {subHeading}
                                </h1>
                                <h1 className="text-bitGray-400 leading-tight text-2xl xl:text-4xl 2xl:text-5xl font-gordita font-bold">
                                    {heading}
                                </h1>
                            </div>
                            <div className={`space-y-12 items-center ${adjust ? 'mt-60 lg:mt-12' : "mt-12"}`}>
                                {
                                    dataList?.map(({title, description})=> (
                                        <div>
                                            <h1 className="text-bitGray-400 mb-4 leading-tight text-xs sm:text-sm lg:text-md font-gordita font-semibold">{title}</h1>
                                            <p className=" pt-2 text-2xs md:text-sm text-bitGray-300">{description}</p>
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
                            <div className={`max-w-2xl flex justify-center ${adjust ? styles.adjusted : styles.normal} ${styles.hero_image}`}>
                                <img src={desktopImg} className="hidden lg:block desktop" />
                                <img src={mobileImg} className="block lg:hidden mobile relative lg:left-1/4" />
                            </div>
                        </div>
                    </div>
                </BitNobContainer>
                <div className={`h-96 bg-bitGreen-100 w-full absolute block ${adjust ? styles.adjusted_bg : ""} ${styles.product_bg}`} />
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