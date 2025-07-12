import { useEffect, useState } from "react";
import montrea from "../../assets/monstera.jpg"

interface OrderImage {
  name: string;
  image: string;
}

interface OrderShipping {
  city: string;
  country: string;
}

interface OrderType {
  _id: number;
  createdAt: Date;
  totalPrice: number;
  shippingAddress: OrderShipping;
  orderItems: OrderImage[];
  isPaid: boolean;
}

const MyOrdersPage = () => {
    const [orders, setOrders] = useState<OrderType[]>([]); // Initialisé comme tableau vide

    useEffect(() => {
        // Simulate fetching orders
        setTimeout(() => {
            const mockOrders: OrderType[] = [
                {
                    _id: 1,
                    createdAt: new Date(),
                    shippingAddress: { city: "Cotonou", country: "Bénin" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: montrea,
                        },
                    ],
                    totalPrice: 10000,
                    isPaid: true,
                },
                {
                    _id: 1,
                    createdAt: new Date(),
                    shippingAddress: { city: "Cotonou", country: "Bénin" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: montrea,
                        },
                    ],
                    totalPrice: 10000,
                    isPaid: true,
                },
                {
                    _id: 1,
                    createdAt: new Date(),
                    shippingAddress: { city: "Cotonou", country: "Bénin" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: montrea,
                        },
                    ],
                    totalPrice: 10000,
                    isPaid: true,
                },
                {
                    _id: 1,
                    createdAt: new Date(),
                    shippingAddress: { city: "Cotonou", country: "Bénin" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: montrea,
                        },
                    ],
                    totalPrice: 10000,
                    isPaid: true,
                },
                {
                    _id: 1,
                    createdAt: new Date(),
                    shippingAddress: { city: "Cotonou", country: "Bénin" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: montrea,
                        },
                    ],
                    totalPrice: 10000,
                    isPaid: true,
                },
                {
                    _id: 1,
                    createdAt: new Date(),
                    shippingAddress: { city: "Cotonou", country: "Bénin" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: montrea,
                        },
                    ],
                    totalPrice: 10000,
                    isPaid: true,
                },
                {
                    _id: 1,
                    createdAt: new Date(),
                    shippingAddress: { city: "Cotonou", country: "Bénin" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: montrea,
                        },
                    ],
                    totalPrice: 10000,
                    isPaid: true,
                },
                {
                    _id: 1,
                    createdAt: new Date(),
                    shippingAddress: { city: "Cotonou", country: "Bénin" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: montrea,
                        },
                    ],
                    totalPrice: 10000,
                    isPaid: true,
                },
            ];
            setOrders(mockOrders);
        }, 2000);
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
                Mes Commandes
            </h2>
            <div className="relative shadow-md sm:rounded-lg  overflow-auto">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="py-6 px-4 sm:py-3">Image</th>
                            <th className="py-6 px-4 sm:py-3">Commande ID</th>
                            <th className="py-6 px-4 sm:py-3">Date</th>
                            <th className="py-6 px-4 sm:py-3">Expédition address</th>
                            <th className="py-6 px-4 sm:py-3">Prix total</th>
                            <th className="py-6 px-4 sm:py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr
                                    key={order._id}
                                    className="border-b hover:border-gray-50 cursor-pointer"
                                >
                                    <td className="py-2 px-2 sm:py-4 sm:px-4">
                                        <img 
                                            src={order.orderItems[0].image} 
                                            alt={order.orderItems[0].name} 
                                            className="w-10 h-10 sm:h-10 object-cover rounded-lg" 
                                        />
                                    </td>
                                    <td className="py-2 px-2 sm:py-4 sm:px-4">
                                        {order._id}
                                    </td>
                                    <td className="py-2 px-2 sm:py-4 sm:px-4">
                                        {order.createdAt.toLocaleDateString()}
                                    </td>
                                    <td className="py-2 px-2 sm:py-4 sm:px-4">
                                        {order.shippingAddress.city}, {order.shippingAddress.country}
                                    </td>
                                    <td className="py-2 px-2 sm:py-4 sm:px-4">
                                        {order.totalPrice}
                                    </td>
                                    <td className={`py-2 px-2 sm:py-4 sm:px-4
                                        ${order.isPaid ? "bg-green-500" : "bg-red-700"}`
                                    }>
                                        {order.isPaid ? "Payé" : "En attente"}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="py-4 text-center">
                                    Aucune commande trouvée
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyOrdersPage;