import { FaSignOutAlt } from "react-icons/fa";
import MyOrdersPage from "./MyOrdersPage";


const Profile = () => {
  return (
    <div className="overflow-y-auto flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {/* left section profile */}
            <div className="w-full md:w-1/3 lg:w-1/4  shadow-md rounded-lg max-h-96">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 p-3">
                Conrade Bossoudaho
            </h1>
            <p className=" flex text-sm sm:text-lg md:text-sm text-gray-600 mb-4 p-3 hover:text-gray-900 overflow-auto">
                conradebossoudaho@gmail.com
            </p>
             <div className="mt-6">
          <button
            className="w-full bg-fist-color hover:bg-red-600 text-white px-4 py-2 rounded flex
            items-center justify-center space-x-2"
          >
            <FaSignOutAlt/>
            <span>Déconnecté</span>
          </button>
        </div>
            </div>

            {/* right section profile */}
            <div className="w-full md:w-2/3 lg:w-3/4 md:overflow-y-auto">

             {/* composant react pour les commandes */}
              < MyOrdersPage/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
