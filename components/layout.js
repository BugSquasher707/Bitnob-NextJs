import React from 'react';
import { Header, Footer } from '.';
import { Circles } from '../public';


const Layout = ({ children }) => {
  
  return(
    <React.Fragment>
      <Circles className="absolute max-w-5xl right-0 -top-32" />
      <Header />
      <main className="relative" style={{minHeight:"500px"}}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
};

export const getLayout = page => <Layout>{page}</Layout>;
export default Layout;
