import Merch1 from "../../merch1.png";
import Merch2 from "../../merch2.png";
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
