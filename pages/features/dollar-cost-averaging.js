import { getLayout, Page, ProductPage } from "components"
import { featureData } from "static";

const DollarCostAveraging = ()=> (
    <Page title={featureData.dollarCostData.heading}>
        <ProductPage adjust {...featureData.dollarCostData} />
    </Page>
)


DollarCostAveraging.getLayout = getLayout;
export default DollarCostAveraging