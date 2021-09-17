import { getLayout, Page } from '../components';

const Home = ()=> {
  return (
    <Page title="Welcome to BitNob">
      <div className="">
        Hello Bitob
      </div>
    </Page>
  )
}

Home.getLayout = getLayout;
export default Home;
