import Footer from 'Component/Footer'
import Header from 'Component/Header'
import React from 'react'


const Layout = ({Children}) => {
    return (
        <div className='maincontainer'>
        <Header />
        <main>{Children}</main>
        <Footer />
    </div>
    )
}

export default Layout


