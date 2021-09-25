import { getLayout, Page, ProductPage } from "components"
import { featureData } from "static";

const GroupSaving = ()=> (
    <Page title={featureData.groupSavingData.heading}>
        <ProductPage {...featureData.groupSavingData} />
    </Page>
)


GroupSaving.getLayout = getLayout;
export default GroupSaving