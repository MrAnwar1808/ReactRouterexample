
import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './StudentStyle.css'

function StudentLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const storedStudent = JSON.parse(localStorage.getItem("studentData"));
    
    if (storedStudent && storedStudent.email === credentials.email && storedStudent.password === credentials.password) {

      sessionStorage.setItem("studentSession", JSON.stringify(storedStudent));
      alert("Login successful!");
      navigate("/student/home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <Container className="container">
      <Typography variant="h4" align="center">Student Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Email" name="email" margin="normal" required onChange={handleChange} />
        <TextField fullWidth label="Password" type="password" name="password" margin="normal" required onChange={handleChange} />
        <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: "10px" }} >Login</Button>
      </form>
      <Typography align="center" style={{ marginTop: "10px" }} >
      Don't have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/student/signup")}>Sign up here!</span>
      </Typography>
    </Container>
  );
}

export default StudentLogin;
