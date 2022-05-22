import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import ProductViewModal from './ProductViewModal'

import MyRoutes from '../routes/Routes'

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={props => (
                    <div>
                        <Header {...props}/>
                        <div className="container">
                            <div className="main">
                                <MyRoutes/>
                            </div>
                        </div>
                        <Footer/>
                        <ProductViewModal/>
                    </div>
                )}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Layout
