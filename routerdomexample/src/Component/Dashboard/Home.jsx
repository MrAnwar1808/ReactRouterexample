
import { Box } from "@mui/material";
import React from "react";
import HomeVideo from "./Video/Video";
import SearchComp from "./SearchComp/SearchComp";
import CourseCards from "./Course/CourseCard";
import StaffPortfolio from "./staffportfolio/Staffportfolio";
import ProgramsList from "./ProgramList/ProgramList";
import Footer from "../Footer/Footer";




const Homepage = () => {
  return (

    <Box>
        <HomeVideo/>
        <SearchComp/>
        <CourseCards/>
        <StaffPortfolio/>
        <ProgramsList/>
        <Footer/>
    </Box>
    
  )
}

export default Homepage;
