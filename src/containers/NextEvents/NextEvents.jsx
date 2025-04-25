import {
  NextEventsContainer,
  Card,
  Title,
  Container,
  Body,
  ContainerEvent,
} from "./nextEventsStyles";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const NextEvents = ({ img }) => {
  return (
    <NextEventsContainer>
      <Card image={img}>
        <SectionTitle top={"PRÓXIMO"} title={"EVENTO"} />
        <Container>
          <ContainerEvent>
            <span
              style={{
                fontSize: "0.9rem",
                letterSpacing: "1px",
                fontWeight: "lighter",
              }}
            >
              {" Hipólito Yrigoyen 968 - CABA".toLocaleUpperCase()}
            </span>
            <span
              style={{
                fontSize: "2.5rem",
                letterSpacing: "1px",
                fontWeight: "lighter",
              }}
            >
              VOX
            </span>
            <span
              style={{
                fontSize: "2rem",
                letterSpacing: "1px",
                fontWeight: "lighter",
              }}
            >
              viernes 25/04
            </span>

            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                textTransform: "uppercase",
                fontFamily: "oswald",
              }}
            >
              HRDDMAT B2B ALI BVRGOS
            </span>
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                textTransform: "uppercase",
                fontFamily: "oswald",
              }}
            >
              PVR B2B XHAPPA
            </span>
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                textTransform: "uppercase",
                fontFamily: "oswald",
              }}
            >
              GLOSTER B2B GOYEN
            </span>
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                textTransform: "uppercase",
                fontFamily: "oswald",
              }}
            >
              RENKOR B2B JACKBOY
            </span>

            <span
              style={{
                marginTop: "14px",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                fontFamily: "oswald",
                color: "lime",
              }}
            >
              FREE hasta 01:30hs
            </span>
            <span
              style={{
                fontSize: "0.9rem",

                fontFamily: "oswald",
              }}
            >
              01:30 a 02:30 hs $6.000
            </span>
            <span
              style={{
                fontSize: "0.9rem",

                fontFamily: "oswald",
              }}
            >
              02:30 hs en adelante $8.000
            </span>

            <span
              style={{
                fontSize: "0.8rem",
                marginTop: "10px",
                letterSpacing: "1px",
                fontStyle: "italic",
                fontFamily: "oswald",
                fontWeight: "lighter",
              }}
            >
              Apertura 23:59hs, Ingreso Hasta 4am (+18)
            </span>
          </ContainerEvent>
        </Container>
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
