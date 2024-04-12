import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20rem",
          height: "10rem",
          backgroundColor: "rgb(256,256,256)",
          borderRadius: "15px",
        }}
      >
        Unauthorized. Redirecting...
      </div>
    </div>
  );
};

export default Unauthorized;
