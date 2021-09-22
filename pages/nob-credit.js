import { getLayout, Page, ProductPage } from "components"

const NobCredit = ()=> {

    return(
        <Page title="Nob Credit">
            <ProductPage />
        </Page>
    )
}


NobCredit.getLayout = getLayout;
export default NobCredit