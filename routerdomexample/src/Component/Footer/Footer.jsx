
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import "./Footer.css"; // Importing the CSS file

function Footer() {
  return (
    <Box className="footer-container">
      {/* Logos Section */}
      <Box className="footer-logos">
        <img src="Footer/f1.jpg" alt="NBA" />
        <img src="Footer/f2.jpg" alt="Forbes" />
        <img src="Footer/f3.jpg" alt="99%" />
        <img src="Footer/f4.jpg" alt="N1 worldwide" />
        <img src="Footer/f5.jpg" alt="FT 1000" />
        <img src="Footer/f6.jpg" alt="Global" />
        <img src="Footer/f7.jpg" alt="Google" />
      </Box>

      <Divider className="footer-divider" />

      {/* Footer Sections */}
      <Box className="footer-sections">
        <Box className="footer-column">
          <Typography variant="h6">Faculties</Typography>
          <Divider />
          <ul>
            <li>Sports Science</li>
            <li>Law</li>
            <li>Design</li>
            <li>Education</li>
            <li>Nursing</li>
            <li>School of Languages</li>
            <li>School of Business</li>
            <li>Pharmacy</li>
            <li>Physiotherapy</li>
            <li>Humanities</li>
            <li>Information Technology</li>
            <li>Engineering</li>
            <li>Artificial Intelligence</li>
            <li>Medicine</li>
            <li>Nutrition</li>
            <li>Dentistry</li>
            <li>Journalism and Communication</li>
            <li>Psychology</li>
            <li>Veterinary Medicine</li>
            <li>Video Games Design</li>
          </ul>
        </Box>

        <Box className="footer-column">
          <Typography variant="h6">Studies</Typography>
          <Divider />
          <ul>
            <li>Advanced Master’s Degrees</li>
            <li>Professional Master’s Degrees</li>
            <li>Hybrid Professional Master’s Degrees</li>
            <li>Internship Programs</li>
            <li>Postgraduate Diplomas</li>
            <li>Postgraduate Certificates</li>
            <li>Executive Development Programs</li>
            <li>Language Certificate Courses</li>
            <li>Online Language Classes (Individual)</li>
            <li>Online Language Classes (Group)</li>
            <li>Language Certification Exams</li>
          </ul>
        </Box>

        <Box className="footer-column">
          <Typography variant="h6">Links of Interest</Typography>
          <Divider />
          <ul>
            <li>Legal Notice</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Student Advocate</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Work With Us</li>
          </ul>
        </Box>

        <Box className="footer-column">
          <Typography variant="h6">Institutional Information</Typography>
          <Divider />
          <ul>
            <li>What is TECH</li>
            <li>Teaching Staff</li>
            <li>Pedagogical Methodology</li>
            <li>Frequently Asked Questions</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
