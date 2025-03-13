
import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, Button, FormControlLabel, 
  Switch, MenuItem, Select, InputLabel, FormControl, Divider, 
  Grid, Card, CardContent } from "@mui/material";
  import './Settings.css'

function Settings() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [theme, setTheme] = useState("light");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);


  useEffect(() => {
    const studentData = JSON.parse(sessionStorage.getItem("studentSession"));
    const staffData = JSON.parse(sessionStorage.getItem("staffSession"));
    
    if (studentData) {
      setUser(studentData);
    } else if (staffData) {
      setUser(staffData);
    }
  }, []);

  const handleSave = () => {
    sessionStorage.setItem("studentSession", JSON.stringify(user));
    sessionStorage.setItem("staffSession", JSON.stringify(user));
    alert("Settings updated successfully!");
  };

  const handleReset = () => {
    setUser({ name: "", email: "", password: "" });
    setTheme("light");
    setDarkMode(false);
    setNotifications({ email: true, sms: false, push: true });
    setTwoFactorAuth(false);
    alert("Settings have been reset to default!");
  };

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom className="title">Settings</Typography>

      <Grid container spacing={3}>
        
        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" gutterBottom>Profile Settings</Typography>
              <TextField
                label="Full Name"
                fullWidth
                margin="normal"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <TextField
                label="New Password"
                type="password"
                fullWidth
                margin="normal"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter new password"
              />
            </CardContent>
          </Card>
        </Grid>

 
        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" gutterBottom>Appearance</Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Theme</InputLabel>
                <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
                  <MenuItem value="light">Light Mode</MenuItem>
                  <MenuItem value="dark">Dark Mode</MenuItem>
                  <MenuItem value="system">Use System Setting</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
                label="Enable Dark Mode"
              />
            </CardContent>
          </Card>
        </Grid>

  
        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" gutterBottom>Notification Preferences</Typography>
              <FormControlLabel
                control={<Switch checked={notifications.email} onChange={() => setNotifications({ ...notifications, email: !notifications.email })} />}
                label="Email Notifications"
              />
              <FormControlLabel
                control={<Switch checked={notifications.sms} onChange={() => setNotifications({ ...notifications, sms: !notifications.sms })} />}
                label="SMS Notifications"
              />
              <FormControlLabel
                control={<Switch checked={notifications.push} onChange={() => setNotifications({ ...notifications, push: !notifications.push })} />}
                label="Push Notifications"
              />
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" gutterBottom>Security & Privacy</Typography>
              <FormControlLabel
                control={<Switch checked={twoFactorAuth} onChange={() => setTwoFactorAuth(!twoFactorAuth)} />}
                label="Enable Two-Factor Authentication (2FA)"
              />
              <Button variant="outlined" color="error" fullWidth style={{ marginTop: "10px" }}>
                Deactivate Account
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider style={{ margin: "20px 0" }} />

      
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
            Save Changes
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" color="secondary" fullWidth onClick={handleReset}>
            Reset to Default
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Settings;
