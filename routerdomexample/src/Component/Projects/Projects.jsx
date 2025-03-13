
import React from "react";
import { Container, Typography, Card, CardContent, Grid, LinearProgress } from "@mui/material";

const projects = [
  { id: 1, title: "Network Security Upgrade", progress: 75, description: "Enhancing security measures in the corporate network." },
  { id: 2, title: "Data Center Migration", progress: 50, description: "Moving infrastructure to a new cloud-based environment." },
  { id: 3, title: "Automation Project", progress: 90, description: "Implementing automation scripts for IT operations." }
];

function Projects() {
  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom className="title">Ongoing Projects</Typography>
      <Grid container spacing={3}>
        {projects.map(project => (
          <Grid item xs={12} sm={6} key={project.id}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2" style={{ marginTop: "10px" }}>{project.description}</Typography>
                <LinearProgress variant="determinate" value={project.progress} style={{ marginTop: "10px" }} />
                <Typography variant="subtitle2" align="right">{project.progress}% Completed</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
