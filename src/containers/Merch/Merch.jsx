import Merch1 from "../../merch1.png";
import Merch2 from "../../merch2.png";
import { MerchContainer, Card, Item, Container } from "./merchStyles";
import Divider from "@mui/material/Divider";

const Merch = () => {
  return (
    <MerchContainer>
      <Card>
        <Container>
          <Item>
            {" "}
            <img style={{ height: "100%" }} src={Merch2} alt="" />
          </Item>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "1rem",
              borderRadius: "20px",
            }}
          >
            COMPRAR
          </div>
          <Item>
            {" "}
            <img style={{ height: "100%" }} src={Merch1} alt="" />
          </Item>
        </Container>
      </Card>
    </MerchContainer>
  );
};

export default Merch;
