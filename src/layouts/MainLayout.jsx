import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
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
