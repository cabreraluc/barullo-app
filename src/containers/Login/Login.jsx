import { useState } from "react";
import useLogin from "./useLogin";
import styles from "../../componentsCss/RegisterAndLogin/RegisterAndLogin.module.css";
import { Link } from "react-router-dom";
import useNotistack from "../../components/Notistack/useNotistack";

export default function Login() {
  const { showNotification } = useNotistack();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { loginUser } = useLogin();

  const handleChange = ({ value, name }) => {
    setData({ ...data, [name]: value });
  };

  const HandleLoginUser = () => {
    if (data.email === "" || data.password === "") {
      showNotification("Complete the data");
    } else {
      loginUser(data);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.title}>
          <h1>Enter your Lejos email and password</h1>
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
          <span>I do not remember my password</span>
          <Link to="/register">
            <span> Click here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
