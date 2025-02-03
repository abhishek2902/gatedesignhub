import { Link } from "react-router-dom";
import DesignSection from "../components/DesignSection";
import gateImg from "../assets/gates/gate1.jpg";
import doorImg from "../assets/doors/door1.jpg";
import windowImg from "../assets/windows/window1.jpeg";
import ventilatorImg from "../assets/ventilators/vent1.jpeg";

const categories = [
  { title: "Boundary Gates", image: gateImg, link: "/gates" },
  { title: "Doors", image: doorImg, link: "/doors" },
  { title: "Windows", image: windowImg, link: "/windows" },
  { title: "Ventilators", image: ventilatorImg, link: "/ventilators" }
];
  

function Home(){
    return <>
    <div>
      <h1>Explore Our Designs</h1>
      {categories.map((category, index) => (
        <DesignSection key={index} title={category.title} image={category.image} link={category.link} />
      ))}
    </div>
    <Link to="/contact" className="btn mt-1 btn-warning w-100"> Contact</Link>

    </>
    
}

export default Home