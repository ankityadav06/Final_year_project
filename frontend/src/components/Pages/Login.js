import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        const response = await fetch("http://127.0.0.1:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          setIsLogin(true);
        } else {
          alert(data.error);
        }
      } catch (error) {
        alert("Error registering. Please try again.");
      }
    } else {
      try {
        const response = await fetch("http://127.0.0.1:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          alert("Login Successful!");
          localStorage.setItem("user", JSON.stringify(data.user)); // Store user details
          navigate("/profile"); // Redirect to Profile Page
        } else {
          alert(data.error);
        }
      } catch (error) {
        alert("Error logging in. Please try again.");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="toggle-buttons">
        <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
        <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Register</button>
      </div>

      <div className="auth-box">
        <button className="cancel" onClick={() => navigate("/")}>X</button>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            </>
          )}

          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

          {!isLogin && (
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          )}

          <div className="buttons">
            <button type="submit">{isLogin ? "Login" : "Register"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
