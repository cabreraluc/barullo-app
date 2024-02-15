import { useState } from "react";
import useRegister from "./useRegister";
import styles from "../../componentsCss/RegisterAndLogin/RegisterAndLogin.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    image: "",
    rol: "",
  });
  const { registerUser } = useRegister();

  const handleChange = ({ value, name }) => {
    setData({ ...data, [name]: value });
    console.log(value);
  };

  const HandleRegisterUser = () => {
    if (
      data.name === "" ||
      data.lastName === "" ||
      data.email === "" ||
      data.cellphone === "" ||
      data.password === "" ||
      data.rol === ""
    ) {
      alert("Complete the data");
    } else {
      registerUser(data);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Fill in the details to create your account</h1>
        <div className={styles.formItem}>
          <span>Name</span>
          <input
            type="text"
            name={"name"}
            value={data.name}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className={styles.formItem}>
          <span>Last name</span>
          <input
            type="text"
            name={"lastName"}
            value={data.lastName}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className={styles.formItem}>
          <span>Email</span>
          <input
            type="text"
            name={"email"}
            value={data.email}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className={styles.formItem}>
          <span>Cellphone</span>
          <input
            type="text"
            name={"cellphone"}
            value={data.cellphone}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className={styles.formItem}>
          <span>Password</span>
          <input
            type="password"
            name={"password"}
            value={data.password}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className={styles.formItem}>
          <span>Rol</span>
          <input
            type="text"
            name={"rol"}
            value={data.rol}
            onChange={(e) => handleChange(e.target)}
          />
        </div>

        <button onClick={HandleRegisterUser} className={styles.buttonRegister}>
          Register
        </button>
        <span>do you have an account?</span>
        <Link to="/login">
          <span> Click here</span>
        </Link>
      </div>
    </div>
  );
}
