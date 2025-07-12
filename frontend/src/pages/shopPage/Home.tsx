import LandingSection from "../../components/Layout/LandingSection";
import NewArrivals from "../../components/Products/NewArrivals";
import ProductDetails from "../../components/Products/ProductDetails";

import landingImg from "../../assets/monstera.jpg";
import ProductGrid from "../../components/Products/ProductGrid";
// import ScrollToHash from "../components/Common/ScrollToHash";
const Home = () => {
    const titleLandingSection1="Bienvenue sur notre plateforme de boutique en ligne";
    const titleLandingSection2="Explore notre univers de boutique en intégralité sur ce site"
  return (
    <div>
      {/* <ScrollToHash /> */}
        {/* section landing page acceuil */}
      <LandingSection landingImg={landingImg} titleLandingSection1={titleLandingSection1}
      titleLandingSection2={titleLandingSection2}
      />
      {/* section New arrivals */} 
      <NewArrivals titleGeneral={"New Arrivals"}  />

      {/* section Best seller */}
      <ProductDetails titleGeneral={"Best Seller"}/>

       {/* section Product Grid */}
      <ProductGrid titleGeneral={"Product"}/>

    </div>
  )
}

export default Home;
