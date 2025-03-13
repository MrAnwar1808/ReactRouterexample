
import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './StudentStyle.css'

function StudentSignup() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    localStorage.setItem("studentData", JSON.stringify(student));
    alert("Signup successful! You can now log in.");
    navigate("/student/login");
  };

  return (
    <Container className="container">
      <Typography variant="h4" align="center">Student Signup</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Name" name="name" margin="normal" required onChange={handleChange} />
        <TextField fullWidth label="Email" name="email" margin="normal" required onChange={handleChange} />
        <TextField fullWidth label="Password" type="password" name="password" margin="normal" required onChange={handleChange} />
        <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: "10px" }}>Sign Up</Button>
      </form>
        <Typography variant="body1" style={{ marginTop: "10px" }}>
             Already have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={() =>  navigate("/student/login")}>Login here!</span>
        </Typography>
    </Container>
  );
}

export default StudentSignup;
