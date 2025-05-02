import { useEffect, useState } from "react";
import fetchFromApi from "../../../utils/fetchFromapi";

const usePayment = () => {
  const [sale, setSale] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    ticket: false,
    name: false,
    emali: false,
  });
  const [orderData, setOrderData] = useState({
    quantity: "",
    price: "",
    amount: 0,
    description: "",
    name: "",
    email: "",
  });

  // Suggested code may be subject to a license. Learn more: ~LicenseLog:3678236757.
  useEffect(() => {
    console.log(orderData);
  }, [orderData]);

  const handleSelectPromo = (e, estadoDeCodigoconDescuento) => {
    let primeraOpcion = 5500;
    let segundaOpcion = 9000;
    let terceraOpcion = 20000;
    let cuartaOpcion = 1;

    if (
      estadoDeCodigoconDescuento !== "-" &&
      estadoDeCodigoconDescuento.label === "Validación exitosa"
    ) {
      primeraOpcion = Math.round(primeraOpcion * 0.7)
        .toString()
        .replace(".", "");
      segundaOpcion = Math.round(segundaOpcion * 0.6)
        .toString()
        .replace(".", "");
      terceraOpcion = Math.round(terceraOpcion * 0.5)
        .toString()
        .replace(".", "");

      cuartaOpcion = cuartaOpcion.toString();
    } else {
      primeraOpcion = primeraOpcion.toString();
      segundaOpcion = segundaOpcion.toString();
      terceraOpcion = terceraOpcion.toString();
      cuartaOpcion = cuartaOpcion.toString();
    }

    if (!sale && !loading) {
      if (e === 1) {
        setOrderData((orderData) => {
          return {
            ...orderData,
            number: 1,
            quantity: "1",
            price: primeraOpcion,
            amount: 1,
            description: "x1 tickets",
          };
        });
      } else if (e === 2) {
        setOrderData((orderData) => {
          return {
            ...orderData,
            number: 2,
            quantity: "1",
            price: segundaOpcion,
            amount: 1,
            description: "x2 tickets",
          };
        });
      } else if (e === 3) {
        setOrderData((orderData) => {
          return {
            ...orderData,
            number: 3,
            quantity: "1",
            price: terceraOpcion,
            amount: 1,
            description: "x5 tickets",
          };
        });
      } else if (e === 4) {
        setOrderData((orderData) => {
          return {
            ...orderData,
            number: 4,
            quantity: "1",
            price: "1",
            amount: 1,
            description: "x10 tickets",
          };
        });
      }
    }
  };

  const handleCompleteForm = (e) => {
    const { name, value } = e.target;

    setOrderData((orderData) => {
      return { ...orderData, [name]: value };
    });
  };

  const handleCreatePreference = async () => {
    let err = false;
    if (orderData.quantity === "") {
      setErrors((errors) => {
        return { ...errors, ticket: true };
      });
      err = true;
    } else {
      setErrors((errors) => {
        return { ...errors, ticket: false };
      });
    }

    if (orderData.name === "") {
      setErrors((errors) => {
        return { ...errors, name: true };
      });
      err = true;
    } else {
      setErrors((errors) => {
        return { ...errors, name: false };
      });
    }

    if (orderData.email === "") {
      setErrors((errors) => {
        return { ...errors, email: true };
      });
      err = true;
    } else {
      setErrors((errors) => {
        return { ...errors, email: false };
      });
    }

    if (!err) {
      setLoading(true);
      try {
        const response = await fetchFromApi(
          `POST`,
          `payment/create-preference`,
          orderData
        );

        if (response) {
          setSale(true);
          setPreferenceId(response.id);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  return {
    sale,
    setSale,
    preferenceId,
    setPreferenceId,
    loading,
    setLoading,
    errors,
    setErrors,
    orderData,
    setOrderData,
    handleSelectPromo,
    handleCreatePreference,
    handleCompleteForm,
  };
};

export default usePayment;
