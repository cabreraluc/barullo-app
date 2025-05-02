import {
  NextEventsContainer,
  Card,
  Container,
  ContainerEvent,
  Address,
  TitleBig,
  TitleMedium,
  LineupText,
  FreeText,
  PriceText,
  DisclaimerText,
} from "./nextEventsStyles";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const NextEvents = ({ img }) => {
  return (
    <NextEventsContainer>
      <Card image={img}>
        <SectionTitle top={"PRÓXIMO"} title={"EVENTO"} />
        <Container>
          <ContainerEvent>
            <Address>
              {" Hipólito Yrigoyen 968 - CABA".toLocaleUpperCase()}
            </Address>
            <TitleBig>VOX</TitleBig>
            <TitleMedium>viernes 25/04</TitleMedium>

            <LineupText>HRDDMAT B2B ALI BVRGOS</LineupText>
            <LineupText>PVR B2B XHAPPA</LineupText>
            <LineupText>GLOSTER B2B GOYEN</LineupText>
            <LineupText>RENKOR B2B JACKBOY</LineupText>

            <FreeText>FREE hasta 01:30hs</FreeText>
            <PriceText>01:30 a 02:30 hs $6.000</PriceText>
            <PriceText>02:30 hs en adelante $8.000</PriceText>

            <DisclaimerText>
              Apertura 23:59hs, Ingreso Hasta 4am (+18)
            </DisclaimerText>
          </ContainerEvent>
        </Container>
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
