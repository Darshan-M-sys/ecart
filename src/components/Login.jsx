import React, { useState } from 'react';
import './login.css';
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const styles = { textDecoration: 'none' };

  return (
    <div className="login">
      <div className="login-card">
        <div className="text">
          <h1>DARZAR CART</h1>
        </div>

        <form className="login-form">
          <div className="input-group">
            <div className="user-icon-container">
              <span className="user-icon"><FaUser /></span>
              <input
                type="text"
                className="login-input"
                placeholder="Username"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="user-icon-container">
              <span
                className="user-icon"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: 'pointer' }}
              >
                {showPassword ? <BiSolidShow /> :<BiSolidHide /> }
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="login-input"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <Link to="/" style={styles}>
            <button type="submit" className="login-button">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;
