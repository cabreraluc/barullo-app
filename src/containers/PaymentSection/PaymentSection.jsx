import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
import {
  Title,
  Time,
  Date,
  Promotion,
  Container,
  TandaTitle,
} from "./paymentStyles";
import fetchFromApi from "../../utils/fetchFromapi";
initMercadoPago("APP_USR-d2507ba7-7653-4a45-9ae8-8a5a80411064");

const PaymentSection = () => {
  const [sale, setSale] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState({
    quantity: "",
    price: "",
    amount: 0,
    description: "",
    name: "",
    lastName: "",
    email: "",
    cellphone: "",
  });

  const handleSelectPromo = (e) => {
    if (e === "promo1") {
      setOrderData((orderData) => {
        return {
          ...orderData,
          quantity: "1",
          price: "10",
          amount: 1,
          description: "x1 tickets",
        };
      });
    } else if (e === "promo2") {
      setOrderData((orderData) => {
        return {
          ...orderData,
          quantity: "1",
          price: "15",
          amount: 1,
          description: "x2 tickets",
        };
      });
    } else if (e === "promo3") {
      setOrderData((orderData) => {
        return {
          ...orderData,
          quantity: "1",
          price: "20",
          amount: 1,
          description: "x5 tickets",
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
    setLoading(true);
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
    setLoading(false);
  };

  useEffect(() => {
    console.log(orderData);
  }, [orderData]);
  return (
    <div
      style={{
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Title>
          <h1 style={{ fontSize: "3rem" }}>Barullo</h1>
        </Title>
        <Date>
          <h2>11/5</h2>
        </Date>
        <Time>00:30hs</Time>
        <TandaTitle>
          <h2>PRIMERA TANDA:</h2>
        </TandaTitle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            margin: "1rem 0",
          }}
        >
          <div
            style={
              orderData.description === "x1 tickets"
                ? {
                    border: "solid 1px white",
                    padding: "1rem",
                    borderRadius: "10px",
                  }
                : {
                    padding: "1rem",
                    borderRadius: "10px",
                  }
            }
          >
            <Promotion onClick={() => handleSelectPromo("promo1")}>
              x1 Tickets $3500
            </Promotion>
          </div>
          <div
            style={
              orderData.description === "x2 tickets"
                ? {
                    border: "solid 1px white",
                    padding: "1rem",
                    borderRadius: "10px",
                  }
                : {
                    padding: "1rem",
                    borderRadius: "10px",
                  }
            }
          >
            <Promotion onClick={() => handleSelectPromo("promo2")}>
              x2 Tickets $6000
            </Promotion>
          </div>
          <div
            style={
              orderData.description === "x3 tickets"
                ? {
                    border: "solid 1px white",
                    padding: "1rem",
                    borderRadius: "10px",
                  }
                : {
                    padding: "1rem",
                    borderRadius: "10px",
                  }
            }
          >
            <Promotion onClick={() => handleSelectPromo("promo3")}>
              x5 Tickets $12000
            </Promotion>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
            margin: "1rem 0rem",
          }}
        >
          <input
            style={{
              color: "white",
              backgroundColor: "transparent",
              border: "1px solid white",
              height: "2rem",
              paddingLeft: "0.5rem",
            }}
            name="name"
            onChange={(e) => handleCompleteForm(e)}
            placeholder="nombre..."
          ></input>
          <input
            style={{
              color: "white",
              backgroundColor: "transparent",
              border: "1px solid white",
              height: "2rem",
              paddingLeft: "0.5rem",
            }}
            name="email"
            onChange={(e) => handleCompleteForm(e)}
            placeholder="email..."
          ></input>
        </div>
        {!preferenceId ? (
          <button
            style={{
              color: "white",
              backgroundColor: "transparent",
              border: "1px solid white",
              height: "2rem",
              width: "7rem",
              paddingLeft: "0.5rem",
              marginTop: "1rem",
            }}
            onClick={handleCreatePreference}
            disabled={loading}
          >
            {loading ? "CARGANDO..." : "COMPRAR"}
          </button>
        ) : null}

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
