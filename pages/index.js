import { 
  getLayout, 
  Page,

  Landing,
  Solution,
  HowItWorks,
  Exhibition,
  Reviews,
  SeeInAction,
  PreFooter
} from '../components';


const Home = ()=> (
  <Page title="Welcome to BitNob">
    <Landing />
    <Solution />
    <HowItWorks />
    <Exhibition />
    <Reviews />
    <SeeInAction />
    <PreFooter />
  </Page>
)

Home.getLayout = getLayout;
export default Home;
