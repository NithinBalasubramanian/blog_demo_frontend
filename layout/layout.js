import Navbar from '../include/navbar'
import Footer from '../include/footer'

const Layout = ({ children }) => {
    return(
        <div>
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}

export default Layout;