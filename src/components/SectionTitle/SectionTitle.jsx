import styled from "styled-components";

export const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightGray;
  width: 100%;
  font-size: 4rem;
  font-weight: 300;
  text-align: center;
`;

export const TopTitle = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
  color: lightGray;
  width: 100%;
  font-size: 1.5rem;
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
  height: 20%;
  z-index: 100;
  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1200px) {
    width: 20%;
  }
`;
const SectionTitle = ({ title, top }) => {
  return (
    <Container>
      <TopTitle>{top}</TopTitle>
      <Title>{title}</Title>
    </Container>
  );
};

export default SectionTitle;
