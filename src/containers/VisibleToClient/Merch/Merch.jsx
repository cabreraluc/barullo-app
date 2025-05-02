import Merch1 from "../../../assets/images/merch1.jpg";
import Merch2 from "../../../assets/images/merch2.jpg";
import {
  MerchContainer,
  Card,
  Item,
  Container,
  MerchLabel,
  MerchImage,
} from "./merchStyles";

const Merch = () => {
  return (
    <MerchContainer>
      <Card>
        <Container>
          <Item>
            <MerchImage src={Merch2} alt="merch 2" />
          </Item>
          <MerchLabel>PRÓXIMAMENTE</MerchLabel>
          <Item>
            <MerchImage src={Merch1} alt="merch 1" />
          </Item>
        </Container>
      </Card>
    </MerchContainer>
  );
};

export default Merch;
