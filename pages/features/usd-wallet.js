import { getLayout, Page, ProductPage } from "components"
import { featureData } from "static";

const UsdWallet = ()=> (
    <Page title={featureData.usdWalletData.heading}>
        <ProductPage adjust {...featureData.usdWalletData} />
    </Page>
)


UsdWallet.getLayout = getLayout;
export default UsdWallet