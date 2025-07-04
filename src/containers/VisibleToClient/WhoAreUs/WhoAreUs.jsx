import ImageWe from "../../../assets/images/WhoAreWe.jpg";
import { WhoAreUsContainer, Card, Title, Body, Icons } from "./whoAreUsStyles";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaSoundcloud } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const NextEvents = () => {
  return (
    <WhoAreUsContainer>
      <SectionTitle top={"SOBRE"} title="NOSOTROS" />

      <Card image={ImageWe}>
        <Body>
          A través de BARULLO buscamos romper la grieta de los géneros,
          queriendo llegar a los escépticos de este mundo para que encuentren en
          sí lo que realmente los hace bailar y disfrutar de todos los matices
          de la electrónica.
        </Body>
        <Icons>
          <a
            style={{ color: "white" }}
            href={"https://on.soundcloud.com/uF6v8qNpeoSeDadV7"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSoundcloud size="40" />
          </a>
          <a
            style={{ color: "white" }}
            href={"https://www.instagram.com/barullo.rave/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </a>
          <a
            style={{ color: "white" }}
            href={"https://www.youtube.com/@Barullo_rave"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon fontSize="large" />
          </a>
        </Icons>
      </Card>
    </WhoAreUsContainer>
  );
};

export default NextEvents;
