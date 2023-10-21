import Navbar from './Navbar'
import Footer from './Footer'
import Topbar from './Topbar'

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
