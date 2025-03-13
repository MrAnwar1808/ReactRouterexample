import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {  People, BarChart, Settings, ExitToApp, Home, Event } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css"; 

const Sidebar = ({ open, toggleSidebar }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Staff Portal", icon: <People />, path: "/staff/login" },
    { text: "Student Portal", icon: <People />, path: "/student/login" },
    { text: "Events", icon: <Event />, path: "/events/event" },
    { text: "Projects", icon: <BarChart />, path: "/projects/project" },
    { text: "Settings", icon: <Settings />, path: "/settings/setting" },
    { text: "Logout", icon: <ExitToApp />, path: "/logout" },
  ];
  

  return (
    <Drawer
      variant="persistent"
      open={open}
      onClose={toggleSidebar}
      className="sidebar"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "85px",
          width: open ? "240px" : "0px",
          transition: "width 0.3s",
          overflowX: "hidden",
        },
      }}
    >
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem button key={text} onClick={() => navigate(path)}>
            <ListItemIcon className="sidebar-icon">{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
