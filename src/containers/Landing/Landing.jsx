import Header from "../Layout/Header/Header";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/home")}>Home</button>
    </div>
  );
};

export default Landing;
