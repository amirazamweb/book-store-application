import React from 'react'
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast'
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, children }) => {
    return (
        <>
            <Toaster />
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout