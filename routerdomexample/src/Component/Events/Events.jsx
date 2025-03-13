
import React from "react";
import { Container, Typography, Card, CardContent, Grid, Button } from "@mui/material";

const events = [
  { id: 1, title: "Annual Staff Meeting", date: "2025-04-15", description: "Discuss the yearly progress and upcoming goals." },
  { id: 2, title: "Technical Workshop", date: "2025-05-10", description: "Hands-on training on the latest networking technologies." },
  { id: 3, title: "Team Building Activity", date: "2025-06-05", description: "A day of fun activities to enhance teamwork and collaboration." }
];

function Events() {
  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom className="title">Upcoming Events</Typography>
      <Grid container spacing={3}>
        {events.map(event => (
          <Grid item xs={12} sm={6} key={event.id}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5">{event.title}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{event.date}</Typography>
                <Typography variant="body2" style={{ marginTop: "10px" }}>{event.description}</Typography>
                <Button variant="contained" color="primary" style={{ marginTop: "10px" }}>View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Events;
