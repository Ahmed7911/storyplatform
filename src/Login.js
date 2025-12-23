
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  TextBox  from "./components/TextBox";
import Button from "./components/Button";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with your auth logic / API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/Levels");
    }, 700);
  };

  return (
    <div className="login-page">
      {/* Decorative Gradient Blobs */}
      <div className="bg-blob bg-blob-1" aria-hidden="true" />
      <div className="bg-blob bg-blob-2" aria-hidden="true" />

      <div className="login-card">
        {/* Left side: Image (hidden on small screens) */}
        <div className="login-visual">
          <img
            src={require("./assets/images/Ahmed_Mostaaf.png")}
            alt="Stories and imagination illustration"
            className="hero-image"
            loading="eager"
          />
        </div>

        {/* Right side: Form */}
        <div className="login-form-side">
          <header className="header-wrap">
            <h1 className="login-title">Welcome to Story Platform</h1>
            <p className="subheading">By Mr. Ahmed Mostafa</p>
          </header>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <TextBox
                value={formData.email}
                onChange={handleChange("email")}
                labelText="Enter Email"
                inputType="email"
                placeholder="you@example.com"
                required
                aria-label="Email"
              />
            </div>

            <div className="form-group">
              <TextBox
                value={formData.password}
                onChange={handleChange("password")}
                labelText="Enter Password"
                inputType="password"
                placeholder="••••••••"
                required
                aria-label="Password"
              />
            </div>

            <div className="actions">
              <Button
                label={isSubmitting ? "Logging in..." : "Log in"}
                backgroundColor={"#2563eb"} // blue-600
                fontColor={"#ffffff"}
                hoverColor_btn={"#1e40af"} // blue-800
                alighnment={"center"}
                type="submit"
                disabled={isSubmitting}
              />
            </div>

            <p className="signup-text">
              Don&apos;t have an account?{" "}
              <a className="signup-link" href="/SignUp">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
