import TitleGeneral from "../Common/TitleGeneral";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import monsteraImg from "../../assets/monstera.jpg";
import pothosImg from "../../assets/pothos.jpg";
import olivierImg from "../../assets/olivier.jpg";

import { toast } from "sonner";

interface ProductImage {
  url: string;
  altText: string;
}

interface Product {
  _id: string;
  title: string;
  price: number;
  originalPrice: number;
  description?: string;
  colors: string[];
  images: ProductImage[];
}

interface ProductDetailsProps {
  titleGeneral: string;

}

  const selectProduct: Product = {
    _id: "1",
    title: "monstera",
    price: 120,
    originalPrice: 150,
    description:
      "This classic Oxford shirt is tailored for a polished yet casual look Crafted from high-quality cotton, it features a button-down collar",
    colors: ["Red", "Black"],
    images: [
      {
        url: monsteraImg,
        altText: "monstera",
      },
      {
        url: pothosImg,
        altText: "pothos",
      },
      {
        url: olivierImg,
        altText: "olivier",
      },
    ],
  };

const ProductDetails = ({ titleGeneral }: ProductDetailsProps) => {


  const [mainImage,setMainImage]=useState("");
  const [selectColor,setSelectColor]=useState("");
  const [quantity,setQuantity]=useState(1);
  const [isButtonDisabled,setIsButtonDisabled]=useState(false);
  useEffect(()=>{
    if (selectProduct?.images?.length>0) {
      setMainImage(selectProduct.images[0].url)
    }
  },[selectProduct]);

  const handleQuantityChange=(action: string)=>{
    if (action==="plus") setQuantity((prev)=>prev+1)
      if (action==="minus" && quantity>1) setQuantity((prev)=>prev-1)
  };
  
  const handleAddCart=()=>{
    if (!selectColor  ) {
      toast.error("Veuillez selectionnez la color et la quantité avant d'ajouter panier!.",{
        duration:2000,
      });
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(()=>{
      toast.success("Product ajouté au panier avec success",{
        duration:2000,
      });
      setIsButtonDisabled(false);
    },500)
  };

  return (
    <section className="p-6">
      <TitleGeneral title={titleGeneral} />
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnail (onglet de pouce gauche) */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border 
                  ${mainImage===image.url ? "border-black":"border-gray-300"}`}
                onClick={()=>setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Main image*/}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-96 h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile thumbnail (onglet de pouces mobile)*/}
          <div className="flex md:hidden overflow-x-scroll space-x-4 mb-4">
            {selectProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border 
                  ${mainImage===image.url ? "border-black":"border-gray-300"}`}
                onClick={()=>setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Right Side (cote droite)*/}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl">{selectProduct.title}</h1>

            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectProduct.originalPrice && `${selectProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              XOF {selectProduct.price}
            </p>
            <p className=" text-gray-600 mb-4">{selectProduct.description}</p>

            {/* Color product*/}
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex grap-2 mt-2">
                {selectProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={()=>setSelectColor(color)}
                    className={`w-8 h-8 rounded-full border 
                      ${selectColor===color ? "border-black":"border-gray-300"}`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            {/* size product*/}
            <div className="mb-4">
              <p className="text-gray-700"></p>
            </div>

            {/* Quantity product*/}
            <div className="mb-6">
              <p className="text-gray-700">Quantité:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button 
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                  onClick={()=>handleQuantityChange("minus")}
                >
                  -
                </button>
                <span className="text-lg">
                  {quantity}
                </span>
                <button 
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                  onClick={()=>handleQuantityChange("plus")}
                >
                  +
                </button>
              </div>
            </div>

            {/* add panier*/}
            <div className="flex top-2 shadow-md mb-2 mt-2 p-2 justify-between ">
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
                  ${isButtonDisabled? "cursor-not-allowed opacity-50":"hover:bg-gray-900"}`}
              >
                <p className="tracking-tighter text-nowrap 
                  hover:text-gray-300 flex justify-between items-center
                  ">
                    {isButtonDisabled ? "Panier Ajouté":"Ajoutez au panier"}
                  </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
