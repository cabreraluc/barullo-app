import Header from "../Layout/Header/Header";
import { useNavigate } from "react-router-dom";
import { FirstSectionContainer } from "./landingStyles";
const Landing = () => {
  const navigate = useNavigate();
  return <FirstSectionContainer></FirstSectionContainer>;
};

export default Landing;
