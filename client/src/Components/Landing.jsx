import { Link } from "react-router-dom";
import '../styles/landing.css';
const Landing = () => {
  return (
    <div className="LandingPage">
      <h2>Aguante BreakingBad</h2>
      <Link to="/characters">
        <button>WELCOME</button>
      </Link>
    </div>
  );
};

export default Landing;
