import TitleGeneral from "../Common/TitleGeneral";
import monsteraImg from "../../assets/monstera.jpg";
import cactusImg from "../../assets/cactus.jpg";
import calatheaImg from "../../assets/calathea.jpg";
import lyrataImg from "../../assets/lyrata.jpg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { Link } from "react-router-dom";
import { IoLogoWhatsapp} from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import ScrollToHash from "../Common/ScrollToHash";
import { IoMdMail } from "react-icons/io";
import { toast } from "sonner";

interface ProductImage {
  url: string;
  altText: string;
}

interface Product {
  _id: string;
  title: string;
  price: number;
  description?: string;
  images: ProductImage[];
}

interface NewArrivalsProps {
  titleGeneral: string;
}

const NewArrivals = ({ titleGeneral }: NewArrivalsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals: Product[] = [
    {
      _id: "1",
      title: "monstera",
      price: 120,
      description: "This classic Oxford shirt is tailored for a polished yet casual look Crafted from high-quality cotton, it features a button-down collar",
      images: [{ url: monsteraImg, altText: "monstera" }],
    },
    {
      _id: "2",
      title: "cactus",
      price: 120,
      images: [{ url: cactusImg, altText: "cactus" }],
    },
    {
      _id: "3",
      title: "calathea",
      price: 120,
      images: [{ url: calatheaImg, altText: "calathea" }],
    },
    {
      _id: "4",
      title: "lyrata",
      price: 120,
      images: [{ url: lyrataImg, altText: "lyrata" }],
    },
  ];

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const leftScroll = container.scrollLeft;
    const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;
    setCanScrollLeft(leftScroll > 0);
    setCanScrollRight(rightScrollable);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    
    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

    const [isButtonDisabled,setIsButtonDisabled]=useState(false);

const handleAddCart=()=>{
  
    setIsButtonDisabled(true);
    setTimeout(()=>{
      toast.success("Product ajouté au panier avec success",{
        duration:2000,
      });
      setIsButtonDisabled(false);
    },500)
  };

  return (
    <section className="py-16 px-4 lg:px-0" id="Nouveaute">
      <ScrollToHash />
      <TitleGeneral title={titleGeneral} />
      <div className="container mx-auto text-center mb-10 relative" >
        <h3 className="text-2xl font-bold mb-4">Explorer Nouveaux arrivage</h3>
        <p className="text-lg text-gray-600 mb-8">
          Découvre les nouveaux arrivage pour acheté ce que tu desire
        </p>

        {/* scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] mt-4 flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${
              canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* scrollable content */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`container mx-auto overflow-x-scroll flex space-x-8 border-b shadow-lg 
          ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <div className="relative min-w-[90%] sm:min-w-[40%] lg:min-w-[20%]">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.title}
                draggable="false"
                className="object-scale-down  w-full h-full rounded-lg"
              />
              <div className=" absolute w-full h-full flex flex-col justify-between top-2 text-white text-sm tracking-tighter">
                <p className=" text-fist-color rounded-lg mr-2 p-1 left-0 w-1/4 shadow-lg justify-center items-center">
                  En vedette
                </p>
                <div className="relative flex justify-between bg-black bg-opacity-5 ml-2 mr-2 p-1">
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
            <div className="flex top-2 shadow-md mb-2 mt-2 p-2 justify-between ">
              <button className="  text-green-500 border border-green-500 shadow-lg justify-between p-2 text-sm items-center">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-gray-black flex justify-between items-center"
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
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;