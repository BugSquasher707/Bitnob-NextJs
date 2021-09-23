import { getLayout, Page, ProductPage } from "components"
import { featureData } from "static";

const UsdWallet = ()=> (
    <Page title="USD Wallet">
        <ProductPage {...featureData.usdWalletData} />
    </Page>
)


UsdWallet.getLayout = getLayout;
export default UsdWallet