import { getLayout, Page, ProductPage } from "components"
import { featureData } from "static";

const NobCredit = ()=> (
    <Page title={featureData.nobCreditData.heading}>
        <ProductPage {...featureData.nobCreditData} />
    </Page>
)


NobCredit.getLayout = getLayout;
export default NobCredit