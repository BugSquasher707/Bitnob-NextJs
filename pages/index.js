import { 
  getLayout, 
  Page,

  Landing,
  Solution,
  HowItWorks,
  Exhibition,
  Reviews,
  SeeInAction,
  BusinessSection,
  PreFooter,
} from 'components';


const Home = ()=> (
  <Page title="Welcome to Bitnob">
    <Landing />
    <Solution />
    <HowItWorks />
    <Exhibition />
    <SeeInAction />
    <Reviews />
    <BusinessSection />
    <PreFooter />
  </Page>
)

Home.getLayout = getLayout;
export default Home;
