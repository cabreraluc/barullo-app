import React from "react";
import styled, { keyframes } from "styled-components";
import Marciano from "../../assets/images/marciano.png";
// Definimos la animación de levitación
const levitation = keyframes`
  0% {
    transform: translateY(0); 
  }
  50% {
    transform: translateY(-20px); /* Se eleva ligeramente */
  }
  100% {
    transform: translateY(0); 
  }
`;

// Estilo del contenedor principal
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

// Estilo de la imagen de la nave espacial
const Spaceship = styled.img`
  width: 150px;
  animation: ${levitation} 2s ease-in-out infinite; /* Animación constante */
`;

// Componente funcional
const SpaceshipLoader = () => {
  return (
    <LoaderContainer>
      <Spaceship src={Marciano} alt="Cargando..." />
      <h1 style={{ fontFamily: "Oswald" }}>...</h1>
    </LoaderContainer>
  );
};

export default SpaceshipLoader;
