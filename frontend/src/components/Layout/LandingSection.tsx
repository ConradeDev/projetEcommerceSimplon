import { Link } from "react-router-dom";
import TitleLanding from "./TitleLanding";

const LandingSection = ({
  landingImg,
  titleLandingSection1,
  titleLandingSection2,
}) => {
  return (
    <section
    id="Accueil"
      className={` w-full h-[500px] md:h-[400px] lg:h-[500px] bg-cover bg-no-repeat bg-center overflow-hidden `}
      style={{ backgroundImage: `url(${landingImg})` }}
    >
      <div className=" relative w-full h-[500px] md:h-[400px] lg:h-[500px] inset-0 flex items-center bg-black bg-opacity-60   justify-center pt-2 ">
        <div className="  mt-4 pt-8 text-center text-white p-6">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tighter mb-4 hover:text-gray-100">
            <TitleLanding title={titleLandingSection1} />
            <br />
          </h1>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-gray-200 hover:text-gray-300">
            Es-tu prêt ?
          </h3>
          <p className="text-lg tracking-tighter md:text-lg mb-6">
            {/* <TitleLanding title={titleLandingSection2} /> */}
          </p>
          <Link
            to={"#"}
            className="text-gray-950 bg-white px-6 py-2 rounded-lg text-lg
              hover:text-white hover:bg-gray-950 tracking-tighter"
          >
            Achete maintenant
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
