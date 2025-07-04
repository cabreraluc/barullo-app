import Merch1 from "../../../assets/images/merch1.jpg";
import Merch2 from "../../../assets/images/merch2.jpg";
import { MerchContainer, Card, Item, MerchImage } from "./merchStyles";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Merch = () => {
  return (
    <MerchContainer>
      <SectionTitle title="MERCH" bottom={"PRÓXIMAMENTE"} />
      <Card image={Merch1}></Card>
    </MerchContainer>
  );
};

export default Merch;
