import { useState } from "react";
import useRegister from "./useRegister";
import styles from "../../componentsCss/RegisterAndLogin/RegisterAndLogin.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });
  const { registerUser } = useRegister();

  const handleChange = ({ value, name }) => {
    setData({ ...data, [name]: value });
    console.log(value);
  };

  const HandleRegisterUser = () => {
    if (
      data.name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.image === ""
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
          <span>Username</span>
          <input
            type="text"
            name={"name"}
            value={data.name}
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
          <span>Password</span>
          <input
            type="password"
            name={"password"}
            value={data.password}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className={styles.formItem}>
          <span>Photo</span>
          <input
            type="text"
            placeholder="URL"
            name={"image"}
            value={data.image}
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
