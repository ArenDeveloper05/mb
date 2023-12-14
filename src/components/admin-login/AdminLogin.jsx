import { useRef, useState } from "react";
import "./AdminLogin.scss";
import { sendAdminValues } from "../../api/api";

const AdminLogin = () => {
  const [loginValues, setLoginValues] = useState({
    login: "",
    password: "",
  });

  const loginInput = useRef(null);
  const passwordInput = useRef(null);

  const handleInputsOnChange = (evt) => {
    setLoginValues((prev) => {
      return {
        ...prev,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  const clearInputVals = () => {
    setLoginValues({
      login: "",
      password: "",
    });
  };

  const sendValues = async () => {
    try {
      const response = await sendAdminValues(loginValues);
      console.log(response);
    } catch (error) {
      //   throw new Error(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="admin-login">
      <p className="admin-login-title">Login</p>
      <div className="admin-login-form">
        <input
          type="text"
          name="login"
          ref={loginInput}
          placeholder="login"
          value={loginValues.login}
          onChange={handleInputsOnChange}
        />
        <input
          type="password"
          name="password"
          ref={passwordInput}
          placeholder="password"
          value={loginValues.password}
          onChange={handleInputsOnChange}
        />
        <button
          onClick={() => {
            if (loginValues.login.trim()) {
              loginInput.current.style.border = "solid";
            } else {
              loginInput.current.style.border = "solid red";
            }
            if (loginValues.password.trim()) {
              passwordInput.current.style.border = "solid";
            } else {
              passwordInput.current.style.border = "solid red";
            }

            if (loginValues.login.trim() && loginValues.password.trim()) {
              console.log(loginValues);
              sendValues();
              clearInputVals();
            }
          }}
        >
          send
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
