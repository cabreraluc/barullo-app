import { useState } from "react";
import useLogin from "./useLogin";
import styles from "../../componentsCss/RegisterAndLogin/RegisterAndLogin.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { loginUser } = useLogin();

  const handleChange = ({ value, name }) => {
    setData({ ...data, [name]: value });
    console.log(value);
  };

  const HandleLoginUser = () => {
    if (data.email === "" || data.password === "") {
      alert("Complete the data");
    } else {
      loginUser(data);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link style={{ color: "white", textDecorationLine: "none" }} to={"/1"}>
          AllStore
        </Link>
      </div>
      <div className={styles.form}>
        <div className={styles.title}>
          <h1>Enter your AllStore email and password</h1>
        </div>
        <div className={styles.form_body}>
          <div className={styles.formItem}>
            <span>Email</span>
            <input
              type="text"
              placeholder="Email"
              name={"email"}
              value={data.email}
              onChange={(e) => handleChange(e.target)}
            />
          </div>
          <div className={styles.formItem}>
            <span>Password</span>
            <input
              type="text"
              placeholder="Password"
              name={"password"}
              value={data.password}
              onChange={(e) => handleChange(e.target)}
            />
          </div>

          <button className={styles.buttonRegister} onClick={HandleLoginUser}>
            Log In
          </button>
          <span>You don't have an account?</span>
          <Link to="/register">
            <span> Click here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
