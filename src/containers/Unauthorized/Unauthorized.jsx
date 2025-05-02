import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 10rem;
  background-color: #ffffff;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: 500;
`;

const Unauthorized = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
      <Card>Unauthorized. Redirecting...</Card>
    </Container>
  );
};

export default Unauthorized;
