import Topbar from "../Layout/Topbar"
import Navbar from "./Navbar"


const Header = () => {
  return (
    <header className="border-b border-gray-200 shadow-md">
      {/* TopBar */}
      <Topbar/>
      {/* Navbar */}
      <Navbar/>
    </header>
  )
}

export default Header;
