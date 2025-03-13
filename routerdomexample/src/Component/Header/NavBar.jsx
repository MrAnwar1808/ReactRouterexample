
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="Toolbar">
        <div className="left-section">
          <IconButton edge="start" className="menu-icon" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="logo" onClick={() => navigate("/")}>
            <div className="logo-container">
              <img src="/images/vector.jpg" alt="logo" className="logo-image" />
              <p>Abstract Technology</p>
            </div>
          </Typography>
        </div>

        <div className="right-section">
          <div className="nav-links">
            <Button onClick={() =>  navigate("/")}>Home</Button>
            <Button onClick={() =>  navigate("/staff/login")}>Staff</Button>
            <Button onClick={() =>  navigate("/student/login")}>Student</Button>
            <Button onClick={() => navigate("/projects/project")}>Projects</Button>
            <Button onClick={() => navigate("/reports/report")}>Reports</Button>
            <Button onClick={() => navigate("/settings/setting")}>Settings</Button>
          </div>

          <IconButton className="profile-icon" onClick={handleMenuOpen}>
            <AccountCircle />
          </IconButton>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
            <MenuItem onClick={() => navigate("/dashboard/home")}>Dashboard</MenuItem>
            <MenuItem onClick={() => navigate("/settings")}>Settings</MenuItem>
            <MenuItem onClick={() => navigate("/logout")}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
