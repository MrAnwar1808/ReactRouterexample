
import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./StaffStyles.css";


function StaffSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }

    const staffData = { name, email, password };
    localStorage.setItem("staffData", JSON.stringify(staffData)); 
    sessionStorage.setItem("staffSession", JSON.stringify(staffData)); 
    
    alert("Signup successful! Redirecting to login...");
    navigate("/staff/login");
  };

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom className="title">Staff Signup</Typography>
      <form onSubmit={handleSignup}>
        <TextField label="Full Name" fullWidth margin="normal" onChange={(e) => setName(e.target.value)} />
        <TextField label="Email" type="email" fullWidth margin="normal" onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" color="primary" fullWidth type="submit">Sign Up</Button>
      </form>
      <Typography variant="body1" style={{ marginTop: "10px" }}>
        Already have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={() =>  navigate("/staff/login")}>Login here!</span>
      </Typography>
    </Container>
  );
}

export default StaffSignup;
