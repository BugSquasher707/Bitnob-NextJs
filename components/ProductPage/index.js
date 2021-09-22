import { BitNobContainer, BitNobLink } from "components";
import { homeData } from "static";
import styles from 'styles/ProductPage.module.css';
import { MdHome } from 'react-icons/md'
import { AppStore, FaqSvg, NobCredit, PlayStore, Savings, Usd, Wallet } from "public"


const { landing } = homeData

const bread = [
    {title:"Features"},
    {title:"NobCredit", route: "nob-credit"},
]

const data = [
    {
        title: "What is NobCredit",
        description: `NobCredit is Bitnob loans feature that allows you to take a loan for up to 12 months with your Bitcoin as collateral. Users qualify for this program with a minimum BTC Wallet balance of $100.`
    },
    {
        title: "How does NobCredit work?",
        description: "Bitnob offers up to 50% LTV (loan to value ratio)"
    },
    {
        title: "What is the purpose of NobCredit?",
        description: `The purpose of NobCredit is to help users who have Bitcoin assets get fiat currency for unexpected bills, fees, or anything in between.
        NobCredit helps users truly HODL for as long as they want.`,
    },
    {
        title: "What makes NobCredit unique?",
        description: `NobCredit is unique as users do not undergo credit checks, submit documents, or stake material collateral. All you need is your Bitcoin.
        Unlike most loan apps/features, you can take a loan for up to 12 months too!`,
    }
]

const BreadCrumb = ()=> (
    <ul className="breadcrumb mt-12 flex space-x-4 lg:space-x-4 items-center">
        <li>
            <span className="text-bitGray-50">
                <MdHome />
            </span>
        </li>
        {
            bread.map(({title, route})=> (
                <>
                    <span className="text-bitGray-50">/</span>
                    <li>
                        <BitNobLink className="text-bitGray-50" to={route || title}>{title}</BitNobLink>
                    </li>
                </>
            ))
        }
    </ul>
)

const ProductPage= ()=> {

    return(
        <div>
            <BitNobContainer>
                <BreadCrumb />
            </BitNobContainer>
            <div className={`mt-4 flex flex-col lg:flex-row flex-nowrap ${styles.landing}`}>
                <BitNobContainer className="flex-1">
                    <div className="flex self-center md:ml-10 xl:ml-0 lg:justify-center">
                        <div className="max-w-md">
                            <div className="-ml-3">
                                <NobCredit />
                            </div>
                            <h1 className="text-black leading-tight text-lg font-gordita font-black">
                                Bitnob's Feature
                            </h1>
                            <h1 className="text-black leading-tight text-5xl font-gordita font-black">
                                NobCredit
                            </h1>
                            <div className="space-y-10 items-center mt-12">
                                {
                                    data.map(({title, description})=> (
                                        <div>
                                            <h1 className="text-black mb-4 leading-tight text-lg font-gordita font-black">{title}</h1>
                                            <p>{description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </BitNobContainer>
                    <div className={`relative mt-20 lg:mt-16 ${styles.landing_cover}`}>
                    <div className={`${styles.artboard} transform scale-110 lg:scale-100`}></div>
                    <img src={landing.cover} alt="smatphone" className={`${styles.phone}`} />
                </div>
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