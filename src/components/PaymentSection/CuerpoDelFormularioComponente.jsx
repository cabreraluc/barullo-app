import {
  ButtonsContainer,
  BotonDeTickets,
  BotonDeTicketsActive,
  TextoDelBoton,
  MensajeDeError,
  ContenedorDeInputs,
  InputCargaDeInfo,
} from "../../containers/PaymentSection/paymentStyles";
import {
  BotonesPaymentSection,
  InputsDePaymentSection,
} from "../../utils/constants";

const CuerpoDelFormularioComponente = ({
  handleCompleteForm,
  handleSelectPromo,
  errors,
  orderData,
  sale,
  loading,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",

        height: "100%",
        width: "100%",
      }}
    >
      {!orderData.number && (
        <ButtonsContainer>
          {BotonesPaymentSection.map((item) => {
            return orderData?.number === item.promo ? (
              <BotonDeTicketsActive key={item.promo}>
                <TextoDelBoton onClick={() => handleSelectPromo(item.promo)}>
                  {item.text}
                </TextoDelBoton>
              </BotonDeTicketsActive>
            ) : (
              <BotonDeTickets key={item.promo}>
                <TextoDelBoton onClick={() => handleSelectPromo(item.promo)}>
                  {item.text}
                </TextoDelBoton>
              </BotonDeTickets>
            );
          })}
          {errors?.ticket ? (
            <MensajeDeError>Tenés que seleccionar una opción</MensajeDeError>
          ) : null}
        </ButtonsContainer>
      )}
      {orderData?.number && (
        <ContenedorDeInputs>
          {InputsDePaymentSection.map((elemento, index) => {
            return (
              <InputCargaDeInfo
                key={index}
                name={elemento.name}
                disabled={sale || loading ? true : false}
                onChange={(e) => handleCompleteForm(e)}
                placeholder={`${elemento.placeHolder}`}
              />
            );
          })}
        </ContenedorDeInputs>
      )}
      {errors?.email || errors?.name ? (
        <MensajeDeError>Te falta completar el nombre o el email</MensajeDeError>
      ) : null}
    </div>
  );
};

export default CuerpoDelFormularioComponente;
