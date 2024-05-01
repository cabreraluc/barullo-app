import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import {
  PaymentSectionContainer,
  Title,
  Time,
  Date,
  Container,
  TandaTitle,
  BotonDeCompra,
  MensajeDelFooter,
} from "./paymentStyles";

import usePayment from "./usePayment";
import CuerpoDelFormularioComponente from "../../components/PaymentSection/CuerpoDelFormularioComponente";

const PaymentSection = () => {
  const {
    sale,
    setSale,
    preferenceId,
    loading,
    errors,
    orderData,
    handleSelectPromo,
    handleCompleteForm,
    handleCreatePreference,
  } = usePayment();
  initMercadoPago("APP_USR-8976b44f-b237-46ed-9fd2-e1bd184e8fbf");

  return (
    <PaymentSectionContainer>
      <Container>
        <Title>
          <h1 style={{ fontSize: "3rem" }}>Barullo</h1>
        </Title>
        <Date>
          <h2>24/5</h2>
        </Date>
        <Time>00:00hs</Time>
        <TandaTitle>
          <h2>PRIMERA TANDA</h2>
        </TandaTitle>

        <CuerpoDelFormularioComponente
          handleSelectPromo={handleSelectPromo}
          handleCompleteForm={handleCompleteForm}
          errors={errors}
          orderData={orderData}
          loading={loading}
          sale={sale}
        />

        {!sale ? (
          <BotonDeCompra onClick={handleCreatePreference} disabled={loading}>
            {loading ? "CARGANDO..." : "COMPRAR"}
          </BotonDeCompra>
        ) : null}

        {sale ? (
          <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{ texts: { valueProp: "smart_option" } }}
          />
        ) : null}

        {sale ? (
          <BotonDeCompra onClick={() => setSale(false)}>
            Editar compra
          </BotonDeCompra>
        ) : null}

        <MensajeDelFooter>
          Al comprar la entrada se te enviara por email un código QR para
          validar tu identidad en el evento, la dirección del evento sera
          enviada en el mismo email.
        </MensajeDelFooter>
      </Container>
    </PaymentSectionContainer>
  );
};

export default PaymentSection;
