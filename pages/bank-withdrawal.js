import classNames from "classnames";
import { getLayout, Page, ProductPage } from "components"
import { featureData } from "static";
import styles from 'styles/Bankwithdrawal.module.css';

const { cover, art } = featureData.bankwithdrawalData;

const BankWithdrawal = ()=> (
    <Page title={featureData.bankwithdrawalData.heading}>
        <ProductPage adjust {...featureData.bankwithdrawalData}>
            <div className={classNames('max-w-xl flex items-center flex-nowrap', styles.wrapper)}>
               {/*eslint-disable-next-line */}
                <img src={cover} alt='image' />
                {/*eslint-disable-next-line */}
                <img src={art} className={classNames('right-0 max-w-auto art', styles.art)} alt='image' />
                <div className={`h-96 bg-bitGreen-100 w-full absolute ${styles.product_bg}`} />
            </div>
        </ProductPage>
    </Page>
)


BankWithdrawal.getLayout = getLayout;
export default BankWithdrawal