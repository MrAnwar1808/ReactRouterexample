
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Header/NavBar";
import Sidebar from "./Component/Aside/Aside";
import Homepage from "./Component/Dashboard/Home";
import StaffLogin from "./Component/Staff/StaffLogin";
import StaffSignup from "./Component/Staff/StaffSignup";
import StudentLogin from "./Component/Student/StudentLogin";
import StudentSignup from "./Component/Student/StudentSignup";
import StaffHomePage from "./Component/Staff/Staffhomepage";
import StudentHomePage from "./Component/Student/StudentHomepage";
import Events from "./Component/Events/Events";
import Projects from "./Component/Projects/Projects";
import Settings from "./Component/Settings/Settings";
import Reports from "./Component/Reports/Reports";



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <div style={{ display: "flex", marginTop: "64px" }}>
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="content" >
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/staff/login" element={<StaffLogin />} />
            <Route path="/staff/signup" element={<StaffSignup />} />
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/student/signup" element={<StudentSignup />} />
            <Route path="/staff/home" element={<StaffHomePage/>} />
            <Route path="/Student/home" element={<StudentHomePage/>} />
            <Route path="/events/event" element={<Events/>} />
            <Route path="/projects/project" element={<Projects/>} />
            <Route path="/settings/setting" element={<Settings/>} />
            <Route path="/reports/report" element={<Reports/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
