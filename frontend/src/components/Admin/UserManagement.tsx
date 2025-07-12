import { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      firstName: "Conrade",
      lastName: "BOSS",
      email: "conradebossoudaho@gmail.com",
      roleUser: "admin",
    },
  ];

  const [fromData, setFromData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    roleUser: "custermer", // Default role
  });

  const handleChange = (e) => {
    setFromData({
      ...fromData,
      [e.target.firstName]: e.target.value,
    });
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Gérer les Utilisateurs</h2>

      {/* Add new user */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-xs font-bold mb-4">
          Ajoutez un nouveau utilisateur
        </h3>

        <form>
          <div className="mb-4 border-fist-color hover:text-fist-color">
            <label htmlFor="firstName" className="block text-gray-700">
              Prénoms
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              
              required
              className="w-full h-9 p-2 border border-b rounded-lg  outline-none
                      text-black"
            />
          </div>

          <div className="mb-4 hover:border-fist-color hover:text-fist-color text-gray-700 ">
            <label htmlFor="lastName" className="block ">
              Nom
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={fromData.lastName}
              onChange={handleChange}
              required 
              className="w-full p-2 h-9  border-b-4 rounded-lg  outline-none
                  text-black"
            />
          </div>

          <div className="mb-4 border-fist-color hover:text-fist-color">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={fromData.email}
              onChange={handleChange}
              required
              className="w-full h-9 p-2 border border-b rounded-lg border-fist-color outline-none
                   hover:border-green-500  text-black"
            />
          </div>

          <div className="mb-4 border-fist-color hover:text-fist-color">
            <label htmlFor="password" className="block text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={fromData.password}
              onChange={handleChange}
              required
              className="w-full h-9 p-2 border border-b rounded-lg outline-none
                    text-black"
            />
          </div>

          <div className="mb-4 border-fist-color hover:text-fist-color">
            <label htmlFor="role" className="block text-gray-700">
              Rôle user
            </label>
            <select
              name="password"
              id="role"
              value={fromData.password}
              onChange={handleChange}
              required
              className="w-full h-9 p-2 border border-b rounded-lg outline-none
                   text-black"
            >
                <option value="custormer">Client</option>
                <option value="admin">Administrateur</option>
            </select>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            type="submit"
          >
            Ajoutez user
          </button>
        </form>
        <div className="mt-4">
          <h2 className="p-4">Utilisateur</h2>
          <div>
            <table>
              <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                <tr className="">
                  <th className="py-3 px-4"> ID user</th>
                  <th className="py-3 px-4">Prénoms</th>
                  <th className="py-3 px-4 ">Nom</th>
                  <th className="py-3 px-4">role</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
