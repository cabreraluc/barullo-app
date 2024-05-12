import Merch1 from "../../assets/images/merch1.jpg";
import Merch2 from "../../assets/images/merch2.jpg";
import { MerchContainer, Card, Item, Container } from "./merchStyles";
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
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            PROXIMAMENTE
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
