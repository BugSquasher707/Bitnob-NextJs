import classNames from "classnames";
import { getLayout, Page, ProductPage } from "components"
import { featureData } from "static";
import styles from 'styles/Dollarcost.module.css';

const { cover, art } = featureData.dollarCostData;

const DollarCostAveraging = ()=> (
    <Page title={featureData.dollarCostData.heading}>
        <ProductPage adjust {...featureData.dollarCostData}>
            <div className={classNames('max-w-xl flex items-center flex-nowrap', styles.wrapper)}>
                {/* eslint-disable-next-line */}
                <img src={cover} alt=''/>
                {/* eslint-disable-next-line */}
                <img src={art} className={classNames('right-0 max-w-auto art', styles.art)} alt='' />
                <div className={`h-96 bg-bitGreen-100 w-full absolute ${styles.product_bg}`} />
            </div>
        </ProductPage>
    </Page>
)


DollarCostAveraging.getLayout = getLayout;
export default DollarCostAveraging