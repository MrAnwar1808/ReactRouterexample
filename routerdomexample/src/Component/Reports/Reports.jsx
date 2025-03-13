
import React from "react";
import { Container, Typography, Card, CardContent, Button, Grid } from "@mui/material";

function Reports() {
  const reports = [
    { title: "Student Performance", description: "View academic records and attendance reports." },
    { title: "Staff Activity", description: "Monitor staff performance and activity logs." },
    { title: "Financial Reports", description: "Check the institution’s financial transactions and budgets." },
    { title: "System Logs", description: "Track system activities, logins, and error reports." },
  ];

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom className="title" align="center">
        Reports Dashboard
      </Typography>

      <Grid container spacing={3}>
        {reports.map((report, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="report-card">
              <CardContent>
                <Typography variant="h6">{report.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {report.description}
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: "10px" }}>
                  View Report
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Reports;
