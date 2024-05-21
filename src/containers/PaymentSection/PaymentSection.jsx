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
  LogoPSB,
  LogosSection,
  DateSection,
} from "./paymentStyles";
import logo from "../../assets/images/logobarullo-white.png";
import psbLogo from "../../assets/images/logoVerdePurple.png";
import usePayment from "./usePayment";
import CuerpoDelFormularioComponente from "../../components/PaymentSection/CuerpoDelFormularioComponente";
import GlosterLogo from "../../assets/images/Gloster logo blanco.png";
import trypLogo from "../../assets/images/trypUnit.png";
import MartinaHLogo from "../../assets/images/MartinaHobelarLogo.png";
import { useEffect, useState } from "react";

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
  initMercadoPago("APP_USR-8976b44f-b237-46ed-9fd2-e1bd184e8fbf");

  return (
    <PaymentSectionContainer>
      <Container>
        <img
          src={logo}
          style={{
            width: "80vw",
            maxWidth: "400px",
          }}
          alt=""
        />
        <DateSection>
          <Date>
            <h2>24/5 - 00:00hs</h2>
          </Date>
        </DateSection>
        <TandaTitle>
          <h2>SEGUNDA TANDA</h2>
        </TandaTitle>
        <LogosSection>
          <img
            style={{
              width: "25%",
              maxWidth: "200px",
            }}
            src={GlosterLogo}
          ></img>
          <img
            style={{
              width: "25%",
              maxWidth: "200px",
            }}
            src={trypLogo}
          ></img>
          <div
            style={{
              width: "25%",
              maxWidth: "150px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <img
              style={{
                width: "80%",
              }}
              src={MartinaHLogo}
            ></img>
          </div>
        </LogosSection>
        <div
          style={{
            height: "20%",
          }}
        >
          {!sale && (
            <CuerpoDelFormularioComponente
              handleSelectPromo={handleSelectPromo}
              handleCompleteForm={handleCompleteForm}
              errors={errors}
              orderData={orderData}
              loading={loading}
              sale={sale}
            />
          )}
          {sale ? (
            <Wallet
              initialization={{ preferenceId: preferenceId }}
              customization={{ texts: { valueProp: "smart_option" } }}
            />
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            height: "10%",
          }}
        >
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
        </div>
      </Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "1rem",
          height: "20%",
        }}
      >
        <MensajeDelFooter>
          Al comprar la entrada se te enviará por email un código QR para
          validar tu identidad en el evento, la dirección del evento será
          enviada en el mismo email. Ante cualquier problema por favor
          comunicate con los organizadores del evento.
        </MensajeDelFooter>
        <LogoPSB>
          <img
            src={psbLogo}
            alt="psb-logo"
            style={{
              width: "5rem",
            }}
          />
        </LogoPSB>
      </div>
    </PaymentSectionContainer>
  );
};

export default PaymentSection;
