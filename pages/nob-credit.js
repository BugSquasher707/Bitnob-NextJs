import { getLayout, Page, ProductPage } from "components"
import { nobCreditData } from "static";

const NobCredit = ()=> (
    <Page title="Nob Credit">
        <ProductPage {...nobCreditData} />
    </Page>
)


NobCredit.getLayout = getLayout;
export default NobCredit