import { Link } from "react-router-dom";
import "../styles/landing.css";
const Landing = () => {
  return (
    <div className="backLanding">
      <div className="LandingPage">
        <h2 className="titleLanding">Breaking Bad Characters</h2>
        <Link to="/characters" className="aLanding">
          <button className="btnLanding">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
