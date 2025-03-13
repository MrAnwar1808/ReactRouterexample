
import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./StaffStyles.css";


function StaffLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const storedData = JSON.parse(sessionStorage.getItem("staffSession"));

    if (storedData && storedData.email === email && storedData.password === password) {
      alert("Login Successful!");
      navigate("/staff/home");
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <Container  className="container">
      <Typography variant="h4" gutterBottom className="title">Staff Login</Typography>

      <form onSubmit={handleLogin}>
        <TextField label="Email" type="email" fullWidth margin="normal" onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" color="primary" fullWidth type="submit">Login</Button>
      </form>

      <Typography variant="body1" style={{ marginTop: "10px" }}>
        Don't have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/staff/signup")}>Sign up here!</span>
      </Typography>
    </Container>
  );
}

export default StaffLogin;
