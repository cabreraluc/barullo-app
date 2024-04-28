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
    <>
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
      <ContenedorDeInputs>
        {InputsDePaymentSection.map((elemento, index) => {
          return (
            <InputCargaDeInfo
              key={index}
              name={elemento}
              disabled={sale || loading ? true : false}
              onChange={(e) => handleCompleteForm(e)}
              placeholder={`${elemento}...`}
            />
          );
        })}
      </ContenedorDeInputs>
      {errors?.email || errors?.name ? (
        <MensajeDeError>Te falta completar el nombre o el email</MensajeDeError>
      ) : null}
    </>
  );
};

export default CuerpoDelFormularioComponente;
