import Footer from 'Component/Footer'
import Header from 'Component/Header'
import React from 'react'

const Layout = ({ children }) => {
    return (
      <div className='mainContainer'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;


