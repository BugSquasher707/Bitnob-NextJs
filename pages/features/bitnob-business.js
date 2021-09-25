import { getLayout, Page, ProductPage } from "components"
import { featureData } from "static";

const BitnobBusiness = ()=> (
    <Page title={featureData.businessData.heading}>
        <ProductPage adjust {...featureData.businessData} />
    </Page>
)


BitnobBusiness.getLayout = getLayout;
export default BitnobBusiness