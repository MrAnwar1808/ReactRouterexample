
import React, { useEffect } from "react";
import { Button, Typography, Container, Card, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./StaffStyles.css";


function StaffHomePage() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(sessionStorage.getItem("staffSession"));


  useEffect(() => {
    if (!storedUser) {
      alert("You must be logged in to access this page!");
      navigate("/staff/login");
    }
  }, [storedUser, navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("staffSession");
    alert("You have been logged out.");
    navigate("/staff/login");
  };

  return (
    <Container className="container">
      <Typography variant="h3" align="center" gutterBottom className="title">
        Welcome, {storedUser ? storedUser.name : "Staff Member"}!
      </Typography>

      <Grid container spacing={3}>

                                                {/* Manage Students */}
        <Grid item xs={12} sm={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h5">Manage Students</Typography>
              <Typography variant="body2">View, add, or remove student records.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/students")}>Go</Button>
            </CardContent>
          </Card>
        </Grid>

                                                   {/* Manage Staff */}
        <Grid item xs={12} sm={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h5">Manage Staff</Typography>
              <Typography variant="body2">Handle staff information and roles.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/staff")}>Go</Button>
            </CardContent>
          </Card>
        </Grid>

                                                     {/* View Reports */}
        <Grid item xs={12} sm={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h5">View Reports</Typography>
              <Typography variant="body2">Access various reports and analytics.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/reports")}>Go</Button>
            </CardContent>
          </Card>
        </Grid>

                                                       {/* Settings */}
        <Grid item xs={12} sm={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h5">Settings</Typography>
              <Typography variant="body2">Change preferences and system settings.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/settings")}>Go</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

                                                {/* Logout Button */}
      <Button variant="contained" color="secondary" fullWidth style={{ marginTop: "20px" }} onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}

export default StaffHomePage;
