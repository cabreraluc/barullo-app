import ImageWe from "../../WhoAreWe.jpg";
import { WhoAreUsContainer, Card, Title, Body, Icons } from "./whoAreUsStyles";
import InstagramIcon from "@mui/icons-material/Instagram";

const NextEvents = () => {
  return (
    <WhoAreUsContainer>
      <Card image={ImageWe}>
        <Title>Sobre nosotros</Title>
        <Body>
          A través de BARULLO buscamos romper la grieta de los géneros,
          queriendo llegar a los escépticos de este mundo para que encuentren en
          sí lo que realmente los hace bailar y disfrutar de todos los matices
          de la electrónica.
        </Body>
        <Icons>
          <a
            style={{ color: "white" }}
            href={"https://www.instagram.com/barullo.inc/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </Icons>
      </Card>
    </WhoAreUsContainer>
  );
};

export default NextEvents;
