import { Link } from "react-router-dom";
import "../styles/landing.css";
import Footer from "./Footer";
const Landing = () => {
  return (
    <div className="backLanding">
      <div className="LandingPage">
        <h2 className="titleLanding">Breaking Bad Characters</h2>
        <Link to="/characters" className="aLanding">
          <button className="btnLanding">Home</button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;
