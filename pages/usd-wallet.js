import classNames from "classnames";
import { getLayout, Page, ProductPage } from "components"
import { featureData } from "static";
import styles from 'styles/Usdwallet.module.css';

const { cover, art } = featureData.usdWalletData;

const UsdWallet = ()=> (
    <Page title={featureData.usdWalletData.heading}>
        <ProductPage adjust {...featureData.usdWalletData}>
            <div className={classNames('max-w-xl flex items-center flex-nowrap', styles.wrapper)}>
                {/* eslint-disable-next-line */}
                <img src={cover} alt='' />
                {/* eslint-disable-next-line */}
                <img src={art} className={classNames('right-0 max-w-auto art', styles.art)} alt='' />
                <div className={`h-96 bg-bitGreen-100 w-full absolute ${styles.product_bg}`} />
            </div>
        </ProductPage>
    </Page>
)


UsdWallet.getLayout = getLayout;
export default UsdWallet