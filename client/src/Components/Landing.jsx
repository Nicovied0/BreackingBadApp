import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      <h2>Aguante BreakingBad</h2>
      <Link to="/characters">
        <button>WELCOME</button>
      </Link>
    </div>
  );
};

export default Landing;
