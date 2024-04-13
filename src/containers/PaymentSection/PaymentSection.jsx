import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
import { Title, Time, Date, Promotion, Container } from "./paymentStyles";
import fetchFromApi from "../../utils/fetchFromapi";
initMercadoPago("APP_USR-d2507ba7-7653-4a45-9ae8-8a5a80411064");

const PaymentSection = () => {
  const [sale, setSale] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  const [orderData, setOrderData] = useState({
    quantity: "",
    price: "",
    amount: 0,
    description: "",
    completeName: "",
    email: "",
    cellphone: "",
  });

  const handleSelectPromo = (e) => {
    if (e === "promo1") {
      setOrderData((orderData) => {
        return {
          ...orderData,
          quantity: "1",
          price: "3000",
          amount: 1,
          description: "x1 tickets",
        };
      });
    } else if (e === "promo2") {
      setOrderData((orderData) => {
        return {
          ...orderData,
          quantity: "1",
          price: "4500",
          amount: 1,
          description: "x2 tickets",
        };
      });
    } else if (e === "promo3") {
      setOrderData((orderData) => {
        return {
          ...orderData,
          quantity: "1",
          price: "6000",
          amount: 1,
          description: "x3 tickets",
        };
      });
    }
  };

  const handleCompleteForm = (e) => {
    const { name, value } = e.target;

    setOrderData((orderData) => {
      return { ...orderData, [name]: value };
    });
  };

  const handleCreatePreference = async () => {
    try {
      const response = await fetchFromApi(
        `POST`,
        `payment/create-preference`,
        orderData
      );

      if (response) {
        console.log(response);
        setSale(true);
        setPreferenceId(response.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(orderData);
  }, [orderData]);
  return (
    <div
      style={{ backgroundColor: "transparent", width: "100%", height: "100%" }}
    >
      <Container>
        <Title>Barullo</Title>
        <Date>11/5</Date>
        <Time>00:30hs</Time>
        <Promotion onClick={() => handleSelectPromo("promo1")}>
          x1 Tickets $3000
        </Promotion>
        <Promotion onClick={() => handleSelectPromo("promo2")}>
          x2 Tickets $4500
        </Promotion>
        <Promotion onClick={() => handleSelectPromo("promo3")}>
          x3 Tickets $5500
        </Promotion>
        <input
          name="completeName"
          onChange={(e) => handleCompleteForm(e)}
          placeholder="nombre y apellido"
        ></input>
        <input
          name="email"
          onChange={(e) => handleCompleteForm(e)}
          placeholder="email"
        ></input>
        <input
          name="cellphone"
          onChange={(e) => handleCompleteForm(e)}
          placeholder="teléfono"
        ></input>
        <button onClick={handleCreatePreference}>COMPRAR</button>

        {sale ? (
          <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{ texts: { valueProp: "smart_option" } }}
          />
        ) : null}
      </Container>
    </div>
  );
};

export default PaymentSection;
