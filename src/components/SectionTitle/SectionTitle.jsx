import styled from "styled-components";

export const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightGray;
  width: 100%;
  font-size: 3.2rem;
  font-weight: 300;
  text-align: center;
`;

export const TopTitle = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
  color: lightGray;
  width: 100%;
  font-size: 1rem;
  font-weight: 200;
  text-align: center;
`;

export const BottomTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightGray;
  width: 100%;
  font-size: 1rem;
  font-weight: 200;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  color: lightGray;
  width: 70%;
  line-height: 1;
  height: 15%;
  z-index: 100;
  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 15%;
  }
`;
const SectionTitle = ({ title, top, bottom }) => {
  return (
    <Container>
      <TopTitle>{top}</TopTitle>
      <Title>{title}</Title>
      <BottomTitle>{bottom}</BottomTitle>
    </Container>
  );
};

export default SectionTitle;
