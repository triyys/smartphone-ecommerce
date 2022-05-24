import Header from '../components/Header'
import Footer from '../components/Footer'
// import ProductViewModal from '../components/Product/ProductViewModal'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="main">
                    {children}
                </div>
            </div>
            <Footer />
            {/* <ProductViewModal /> */}
        </div>
    )
}

export default MainLayout
