
import React, { useEffect } from "react";
import { Button, Typography, Container, Card, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './StudentStyle.css'

function StudentHomePage() {
  const navigate = useNavigate();
  const storedStudent = JSON.parse(sessionStorage.getItem("studentSession"));


  useEffect(() => {
    if (!storedStudent) {
      alert("You must be logged in to access this page!");
      navigate("/student/login");
    }
  }, [storedStudent, navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("studentSession");
    alert("You have been logged out.");
    navigate("/student/login");
  };

  return (
    <Container className="container">
      <Typography variant="h3" align="center" gutterBottom>
        Welcome, {storedStudent ? storedStudent.name : "Student"}!
      </Typography>

      <Grid container spacing={3}>
                                           {/* View Courses */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">View Courses</Typography>
              <Typography variant="body2">Explore your enrolled courses.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/courses")}>Go</Button>
            </CardContent>
          </Card>
        </Grid>

                                               {/* Assignments */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Assignments</Typography>
              <Typography variant="body2">Submit and track assignments.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/assignments")}>Go</Button>
            </CardContent>
          </Card>
        </Grid>

                                             {/* Exam Results */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Exam Results</Typography>
              <Typography variant="body2">Check your latest exam scores.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => navigate("/results")}>Go</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Settings */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Settings</Typography>
              <Typography variant="body2">Change your preferences.</Typography>
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

export default StudentHomePage;
