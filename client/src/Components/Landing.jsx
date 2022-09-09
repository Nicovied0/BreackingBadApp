import { Link } from "react-router-dom";
import "../styles/landing.css";
const Landing = () => {
  return (
    <div className="backLanding">
      <div className="LandingPage">
        <h2>Breaking Bad Characters</h2>
        <Link to="/characters">
          <button className="btnLanding">WELCOME</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
