
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

const UserLayout = () => {
  return (
    <>
    {/* Header */}
      <Header/>
    {/* Main content */}
    <main>
      <Outlet/>
    </main>

    {/* Footer content */}
    <Footer/>
    </>
  )
}

export default UserLayout
