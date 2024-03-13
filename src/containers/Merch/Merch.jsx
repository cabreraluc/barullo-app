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
          </Item>
          <Divider
            component="li"
            sx={{
              py: 0,
              width: "100%",
              maxWidth: 360,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
            }}
          />
          <Item>
            {" "}
            <img style={{ height: "100%" }} src={Merch1} alt="" />
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
          </Item>
        </Container>
      </Card>
    </MerchContainer>
  );
};

export default Merch;
