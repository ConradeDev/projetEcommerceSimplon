import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate} from "react-router-dom";


const AdminSidebar = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
    navigate("/")
  }
  return (
    <div>
      <div className="p-6 ">
        <div className="mb-6 hover:text-fist-color">
            <Link to="/admin" className="text-xl font-medium">
              Conra shopping
            </Link>
        </div>
        <h2 className="text-lg hover:text-fist-color font-medium text-center mb-6">
          Page Administrateur
        </h2>

        {/* navigation des utilisateur de ma plateforme */}
        <nav className="flex flex-col space-y-2">
          <NavLink to="/admin/users"
            className={({isActive})=>
              isActive 
                ? "bg-gray-700 text-fist-color py-3 px-4 rounded flex items-center space-x-2"
                : "text-gray-300 hover:bg-gray-700 hover:text-fist-color py-3 px-4 rounded flex items-center space-x-2"
            }
          >
            <FaUser/>
            <span>Utilisateur</span>
          </NavLink>
        
        {/* navigation des Product de ma plateforme */}
          <NavLink to="/admin/products"
            className={({isActive})=>
              isActive 
                ? "bg-gray-700 text-fist-color py-3 px-4 rounded flex items-center space-x-2"
                : "text-gray-300 hover:bg-gray-700 hover:text-fist-color py-3 px-4 rounded flex items-center space-x-2"
            }
          >
            <FaBoxOpen/>
            <span>Produire</span>
          </NavLink>    
        
        
        {/* navigation des commandes de ma plateforme */}
          <NavLink to="/admin/orders"
            className={({isActive})=>
              isActive 
                ? "bg-gray-700 text-fist-color py-3 px-4 rounded flex items-center space-x-2"
                : "text-gray-300 hover:bg-gray-700 hover:text-fist-color py-3 px-4 rounded flex items-center space-x-2"
            }
          >
            <FaClipboardList/>
            <span>Commandes</span>
          </NavLink>    
        

        {/* navigation vers ma boutique de la plateforme */}
          <NavLink to="/"
            className={({isActive})=>
              isActive 
                ? "bg-gray-700 text-fist-color py-3 px-4 rounded flex items-center space-x-2"
                : "text-gray-300 hover:bg-gray-700 hover:text-fist-color py-3 px-4 rounded flex items-center space-x-2"
            }
          >
            <FaStore/>
            <span>Boutique</span>
          </NavLink>    
        </nav>

        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="w-full bg-fist-color hover:bg-red-600 text-white px-4 py-2 rounded flex
            items-center justify-center space-x-2"
          >
            <FaSignOutAlt/>
            <span>Déconnecté</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar;
