import React, { useState } from "react";
import "./Login.css";
import loginImage from "../../../assets/images/Illustration.png";
import InputField from "../../../components/InputField/InputField";
import PasswordIcon from "../../../assets/images/key.png"
function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      {/* Left Side: Image */}
      <div className="login-image">
        <img src={loginImage} alt="Login Illustration" />
      </div>

      {/* Right Side: Login Box */}
      <div className="login-box">
        <h2>Login</h2>
        <button className="auth-button google">Sign in with Google</button>
        <button className="auth-button facebook">Sign in with Facebook</button>

        <div className="form-group">
          <InputField
            imageSrc={PasswordIcon}
            title="UserName"
            placeholder="Enter UserName"
            inputType="text"            
          />
        </div>

        <div className="form-group">
        <InputField
            imageSrc={PasswordIcon}
            title="Email"
            placeholder="Enter Email"
            inputType="email"
          />
          </div>

        <div className="form-group">
          <InputField
            imageSrc={PasswordIcon}
            title="Password"
            placeholder="Enter password"
            inputType="password"
            showPasswordIcon={true}
            onIconClick={(isVisible) =>
              console.log("Password visible:", isVisible)
            }
          />
        </div>

        

      

        <button className="login-button">Login</button>
      </div>
    </div>
  );
}

export default Login;
