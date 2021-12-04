import classNames from "classnames";
import { getLayout, Page, ProductPage } from "components";
import { featureData } from "static";
import styles from "styles/GroupSaving.module.css";

const { cover, art } = featureData.lightningAddressData;

const LightningAddress = () => (
  <Page title={featureData.lightningAddressData.heading}>
    <ProductPage {...featureData.lightningAddressData}>
      <div
        className={classNames(
          "max-w-xl flex items-center flex-nowrap",
          styles.wrapper
        )}
      >
        <img src={cover} />
        <img
          src={art}
          className={classNames("right-0 max-w-auto art", styles.art)}
        />
        <div
          className={`h-96 bg-bitGreen-100 w-full absolute ${styles.product_bg}`}
        />
      </div>
    </ProductPage>
  </Page>
);

LightningAddress.getLayout = getLayout;
export default LightningAddress;
