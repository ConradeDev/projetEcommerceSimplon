import { Link } from "react-router-dom";


const AdminHomePage = () => {
  const orders=[
    {
      _id:123123,
      user:{
        firstName: "Conrade",
        lastName: "Boss"
      },
      totalPrice:10000,
      status:"En cours"
    },
       {
      _id:123123,
      user:{
        firstName: "Conrade",
        lastName: "Boss"
      },
      totalPrice:10000,
      status:"En cours"
    },
       {
      _id:123123,
      user:{
        firstName: "Conrade",
        lastName: "Boss"
      },
      totalPrice:10000,
      status:"En cours"
    },
       {
      _id:123123,
      user:{
        firstName: "Conrade",
        lastName: "Boss"
      },
      totalPrice:10000,
      status:"En cours"
    },
       {
      _id:123123,
      user:{
        firstName: "Conrade",
        lastName: "Boss"
      },
      totalPrice:10000,
      status:"En cours"
    },
       {
      _id:123123,
      user:{
        firstName: "Conrade",
        lastName: "Boss"
      },
      totalPrice:10000,
      status:"En cours"
    },
       {
      _id:123123,
      user:{
        firstName: "Conrade",
        lastName: "Boss"
      },
      totalPrice:10000,
      status:"En cours"
    },
       {
      _id:123123,
      user:{
        firstName: "Conrade",
        lastName: "Boss"
      },
      totalPrice:10000,
      status:"En cours"
    },
       {
      _id:123123,
      user:{
        firstName: "Conrade",
        lastName: "Boss"
      },
      totalPrice:10000,
      status:"En cours"
    },
       {
      _id:123123,
      user:{
        firstName: "Conrade",
        lastName: "Boss"
      },
      totalPrice:10000,
      status:"En cours"
    },
       {
      _id:123123,
      user:{
        firstName: "Conrade",
        lastName: "Boss"
      },
      totalPrice:10000,
      status:"En cours"
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Administrateur Tableau de Bord
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold hover:text-fist-color">Revenue</h2>
          <p className="text-2xl"> 
            <span className="text-xs hover:text-gray-800">XOF </span>
            <span className=" hover:text-fist-color">10000 </span>
            </p>
        </div>
      
        <div className="p-4 shadow-md rounded-lg ">
          <h2 className="text-xl font-semibold hover:text-fist-color">Commande Total</h2>
          <p className="text-xl hover:text-fist-color">200</p>
          <Link to="/admin/orders"
              className="text-blue-500 hover:underline"
          >
            Gérer les commandes
          </Link>
        </div>
      
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold hover:text-fist-color">Products Total</h2>
          <p className="text-xl hover:text-fist-color">100</p>
          <Link to="/admin/products"
              className="text-blue-500 hover:underline"
          >
            Gérer les Produits
          </Link>
        </div>

         <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold hover:text-fist-color">Utilisateur</h2>
          <p className="text-xl hover:text-fist-color">100</p>
          <Link to="/admin/users"
              className="text-blue-500 hover:underline"
          >
            Gérer les utilisateur
          </Link>
        </div>
      </div>


      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Commandes recentes</h2>
        <div className="overflow-auto h-96 overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr className="">
                <th className="py-3 px-4">Commande ID</th>
                <th className="py-3 px-4">Utilisateur</th>
                <th className="py-3 px-4 ">Prix Total</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="overflow-auto h-96 overflow-x-auto">
              {orders.length>0 ? (
                orders.map((order)=>(
                  <tr key={order._id}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-4">{order._id}</td>
                    <td className="p-4">{order.user.firstName}  {order.user.lastName}</td>
                    <td className="p-4">{order.totalPrice}</td>
                    <td className="p-4">{order.status}</td>
                    
                  </tr>
                ))
              ):(
                 <tr>
                    <td colSpan={4} className="py-4 text-center">
                      Aucune commande recente trouvée
                    </td>
                 </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminHomePage;
