import { useState } from "react";
import api from "../services/api";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      await api.post("register/", formData);
      alert("Registration Successful");
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>

      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;