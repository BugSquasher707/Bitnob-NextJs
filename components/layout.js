import React from 'react';
import { Header, Footer } from '.';

const Layout = ({ children }) => {
  
  return(
    <React.Fragment>
      <Header />
      <main style={{minHeight:"500px"}}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
};

export const getLayout = page => <Layout>{page}</Layout>;
export default Layout;
