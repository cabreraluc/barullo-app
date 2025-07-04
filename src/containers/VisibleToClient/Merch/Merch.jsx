import Merch1 from "../../../assets/images/merch1.jpg";
import Merch2 from "../../../assets/images/merch2.jpg";
import { MerchContainer, Item, MerchImage } from "./merchStyles";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Merch = () => {
  return (
    <MerchContainer image={Merch1}>
      <SectionTitle title="MERCH" bottom={"PRÓXIMAMENTE"} />
    </MerchContainer>
  );
};

export default Merch;
