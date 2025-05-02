import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import {
  PaymentSectionContainer,
  Date,
  Container,
  TandaTitle,
  BotonDeCompra,
  MensajeDelFooter,
  LogoPSB,
  DateSection,
  ContentWrapper,
  WalletContainer,
  ActionButtons,
  FooterContainer,
  LogoImage,
} from "./paymentStyles";
import psbLogo from "../../../assets/images/logoVerdePurple.png";
import usePayment from "./usePayment";
import CuerpoDelFormularioComponente from "../../../components/PaymentSection/CuerpoDelFormularioComponente";

const PaymentSection = () => {
  const {
    sale,
    setSale,
    preferenceId,
    loading,
    errors,
    orderData,
    setOrderData,
    handleSelectPromo,
    handleCompleteForm,
    handleCreatePreference,
  } = usePayment();

  initMercadoPago(process.env.MP_INIT);

  const [codigoDeDescuento, setCodigoDeDescuento] = useState("");
  const [estadoDeCodigoIngresado, setEstadoDeCodigoIntegrado] = useState("-");

  const codigos = ["D8H6X", "59OPL", "E2TH9"];

  const handleChangeCodigoDeDescuento = (e) => {
    setCodigoDeDescuento(e.target.value);
  };

  const ValidarCodigoDeDescuento = () => {
    if (codigos.includes(codigoDeDescuento)) {
      setEstadoDeCodigoIntegrado({
        label: "Validación exitosa",
        color: "green",
      });
    } else {
      if (codigoDeDescuento !== "") {
        setEstadoDeCodigoIntegrado({ label: "Código invalido", color: "red" });
      } else {
        setEstadoDeCodigoIntegrado("-");
      }
    }
  };

  return (
    <PaymentSectionContainer>
      <Container>
        <DateSection>
          <Date>
            <h2>Fecha - Hora</h2>
          </Date>
        </DateSection>
        <TandaTitle>Tanda</TandaTitle>

        <ContentWrapper>
          <WalletContainer>
            {orderData.price ? null : <div />}
            {!sale && (
              <CuerpoDelFormularioComponente
                codigoDeDescuento={codigoDeDescuento}
                estadoDeCodigoIngresado={estadoDeCodigoIngresado}
                handleSelectPromo={handleSelectPromo}
                handleCompleteForm={handleCompleteForm}
                errors={errors}
                orderData={orderData}
                loading={loading}
                sale={sale}
                key={codigoDeDescuento}
              />
            )}
            {sale ? (
              <Wallet
                initialization={{ preferenceId: preferenceId }}
                customization={{ texts: { valueProp: "smart_option" } }}
              />
            ) : null}
          </WalletContainer>
        </ContentWrapper>

        <ActionButtons>
          {sale ||
          orderData.number ||
          orderData.email !== "" ||
          orderData.name !== "" ? (
            <BotonDeCompra
              onClick={() => {
                setSale(false);
                setOrderData({
                  quantity: "",
                  price: "",
                  amount: 0,
                  description: "",
                  name: "",
                  email: "",
                });
              }}
            >
              EDITAR
            </BotonDeCompra>
          ) : null}
          {!sale && orderData.number && orderData.email && orderData.name ? (
            <BotonDeCompra onClick={handleCreatePreference} disabled={loading}>
              {loading ? "CARGANDO..." : "COMPRAR"}
            </BotonDeCompra>
          ) : null}
        </ActionButtons>
      </Container>

      <FooterContainer>
        <MensajeDelFooter>
          Al comprar la entrada se te enviará por email un código QR para
          validar tu identidad en el evento, la dirección del evento será
          enviada en el mismo email. Ante cualquier problema por favor
          comunicate con los organizadores del evento.
        </MensajeDelFooter>
        <LogoPSB>
          <LogoImage src={psbLogo} alt="psb-logo" />
        </LogoPSB>
      </FooterContainer>
    </PaymentSectionContainer>
  );
};

export default PaymentSection;
