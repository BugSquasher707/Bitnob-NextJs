import { BitNobContainer, BitNobLink } from "components";
import { homeData } from "static";
import styles from 'styles/ProductPage.module.css';
import { MdHome } from 'react-icons/md'
import { AppStore, FaqSvg, NobCredit, PlayStore, Savings, Usd, Wallet } from "public"
import { useRouter } from "next/dist/client/router";




const BreadCrumb = ()=> {
    const { pathname } = useRouter();

    const breadcrumb = [
        {title:"Features"},
        {title: pathname.replace(/[^a-zA-Z0-9 ]/g, " "), route: pathname }
    ]


    return(
        <ul className="breadcrumb mt-12 flex space-x-4 lg:space-x-4 items-center">
            <li>
                <span className="text-bitGray-50">
                    <MdHome />
                </span>
            </li>
            {
                breadcrumb.map(({title, route})=> (
                    <>
                        <span className="text-bitGray-50">/</span>
                        <li>
                            <BitNobLink className="text-bitGray-50 capitalize" to={route || title}>{title}</BitNobLink>
                        </li>
                    </>
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
            <div className={`mt-4 relative flex flex-col lg:flex-row flex-nowrap ${styles.landing}`}>
                <BitNobContainer className="flex-1">
                    <div className="flex justify-between space-x-10">
                        <div className="max-w-md">
                            <div className="-ml-3">
                                {icons[heading]}
                            </div>
                            <h1 className="text-black leading-tight text-lg font-gordita font-black">
                                {subHeading}
                            </h1>
                            <h1 className="text-black leading-tight text-5xl font-gordita font-black">
                                {heading}
                            </h1>
                            <div className="space-y-10 items-center mt-12">
                                {
                                    dataList?.map(({title, description})=> (
                                        <div>
                                            <h1 className="text-black mb-4 leading-tight text-lg font-gordita font-black">{title}</h1>
                                            <p>{description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="z-10">
                            <div className="max-w-2xl">
                                <img src={desktopImg} />
                            </div>
                        </div>
                    </div>
                </BitNobContainer>
                <div className={`h-96 bg-bitGreen-100 w-full absolute ${styles.product_bg}`}></div>
            </div>
            <BitNobContainer>
                <div className={`mt-40 p-16 py-12 relative rounded-2xl bg-left bg-cover ${styles.product_foot}`}>
                    <div className="max-w-xs">
                        <h1 className="text-black pb-2 leading-tight text-4xl font-gordita font-black">
                            Freedom For Your Money
                        </h1>
                        <div className="flex space-x-4 items-center mt-12">
                            <BitNobLink to="#">
                                <AppStore className="w-36 md:w-auto" />
                            </BitNobLink>
                            <BitNobLink to="#">
                                <PlayStore className="w-36 md:w-auto" />
                            </BitNobLink>
                        </div>
                    </div>
                    <img src="/images/half-phone.png" alt="app" className="absolute max-w-md right-0 -top-16" />
                </div>
            </BitNobContainer>
        </div>
    )
}


export default ProductPage