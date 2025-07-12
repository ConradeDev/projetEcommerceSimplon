import { RiDeleteBin3Line } from "react-icons/ri";
import cactus from "../../assets/cactus.jpg";
import calathea from "../../assets/calathea.jpg";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      title: "catus",
      description: "",
      price: 10,
      imageUrl: cactus,
      quantity: 1,
      size: 3,
    },
    {
      productId: 2,
      title: "catus",
      description: "",
      price: 10,
      imageUrl: calathea,
      quantity: 1,
    },
    {
      productId: 2,
      title: "catus",
      description: "",
      price: 10,
      imageUrl: calathea,
      quantity: 1,
    },
    {
      productId: 2,
      title: "catus",
      description: "",
      price: 10,
      imageUrl: calathea,
      quantity: 1,
    },
    {
      productId: 2,
      title: "catus",
      description: "",
      price: 10,
      imageUrl: calathea,
      quantity: 1,
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row  md:flex-row items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-24 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.title}</h3>
              <p className="text-sm text-gray-500"></p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium">${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
