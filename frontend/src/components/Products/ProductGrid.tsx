import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

import TitleGeneral from "../Common/TitleGeneral";

import monsteraImg from "../../assets/monstera.jpg";
import cactusImg from "../../assets/cactus.jpg";
import calatheaImg from "../../assets/calathea.jpg";
import lyrataImg from "../../assets/lyrata.jpg";
import { useState } from "react";
import { toast } from "sonner";

interface ProductGridProps {
  titleGeneral: string;
}

const ProductGrid = ({ titleGeneral }: ProductGridProps) => {
  const products = [
    {
      _id: "1",
      title: "monstera",
      price: 120,
      description:
        "This classic Oxford shirt is tailored for a polished yet casual look Crafted from high-quality cotton, it features a button-down collar",

      images: [
        {
          url: monsteraImg,
          altText: "monstera",
        },
      ],
    },
    {
      _id: "2",
      title: "cactus",
      price: 120,
      images: [
        {
          url: cactusImg,
          altText: "cactus",
        },
      ],
    },
    {
      _id: "3",
      title: "calathea",
      price: 120,
      images: [
        {
          url: calatheaImg,
          altText: "calathea",
        },
      ],
    },
    {
      _id: "4",
      title: "lyrata",
      price: 120,
      images: [
        {
          url: lyrataImg,
          altText: "lyrata",
        },
      ],
    },
  ];
  
  const [isButtonDisabled,setIsButtonDisabled]=useState(false);
  const handleAddCart=()=>{
    // if (!selectColor  ) {
    //   toast.error("Veuillez selectionnez la color et la quantité avant d'ajouter panier!.",{
    //     duration:2000,
    //   });
    //   return;
    // }
    // setIsButtonDisabled(true);
    setTimeout(()=>{
      toast.success("Product ajouté au panier avec success",{
        duration:2000,
      });
      setIsButtonDisabled(false);
    },500)
  };
  return (
    <section className="py-16 px-4 lg:px-0" id="Promotion">
      <TitleGeneral title={titleGeneral} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-8  space-y-8 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <div className="relative min-w-[90%] sm:min-w-[40%] lg:min-w-[20%]">
              <Link to={`/product/${product._id}`} className="block">
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText || product.title}
                  className="object-cover w-full h-96 rounded-lg"
                />
              </Link>
              <div className="absolute w-full h-full flex flex-col justify-between top-2 text-white text-sm tracking-tighter">
                <p className=" text-fist-color rounded-lg mr-2 p-1 left-0 w-1/4 shadow-lg justify-center items-center">
                  En vedette
                </p>
                <div className=" hover:hidden   cursor-pointer relative flex justify-between bg-black bg-opacity-5 ml-2 mr-2 p-1">
                  <p className=" bg-green-500 flex shadow-lg justify-center items-center bottom-0">
                    Disponible
                  </p>
                  <p className=" bg-fist-color p-1 flex ml-4 shadow-lg justify-center items-center bottom-0">
                    XOF {product.price}
                  </p>
                </div>
              </div>
            </div>
            {product.description && (
              <div className="border-b mb-4 mt-2">
                <p className="p-2 text-sm">{product.description}</p>
              </div>
            )}
            <div className="flex top-2 shadow-md mb-2  mt-2 p-2 justify-between ">
              <button className="  text-green-500 border border-green-500 shadow-lg justify-between p-2 text-sm items-center">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-black flex justify-between items-center"
                >
                  <IoLogoWhatsapp className="w-5 h-5 mr-2" />
                  <p className="tracking-tighter ">WhatSapp</p>
                </a>
              </button>
              <button className="text-fist-color border border-fist-color   shadow-lg justify-between p-2 text-sm items-center">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  hover:text-black flex justify-between items-center"
                >
                  <IoMdMail className="w-5 h-5 mr-2" />
                  <p className="tracking-tighter">Email</p>
                </a>
              </button>

              <button
                onClick={handleAddCart}
                disabled={isButtonDisabled}
                className={`text-white border bg-black shadow-lg justify-between p-2 text-sm items-center
                  ${
                    isButtonDisabled
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-900"
                  }`}
              >
                <p
                  className="tracking-tighter text-nowrap 
                  hover:text-gray-300 flex justify-between items-center
                  "
                >
                  {isButtonDisabled ? "Panier Ajouté" : "Ajoutez au panier"}
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
