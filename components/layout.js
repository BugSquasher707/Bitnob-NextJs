import React from 'react';
import Header from './shared/Header';

const Layout = ({ children }) => {
  
  return(
    <React.Fragment>
      <Header />
      <main>
        {children}
      </main>
    </React.Fragment>
  )
};

export const getLayout = page => <Layout>{page}</Layout>;
export default Layout;
