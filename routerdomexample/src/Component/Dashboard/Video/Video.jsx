
import { Box } from "@mui/material";
import React from "react";

function HomeVideo(){
    return(

        <Box
      sx={{
        position: "relative",
        width: "100vw", 
        height: "100vh", 
        overflow: "hidden",
      }}
    >
     
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", 
        }}
      >
        <source src="/images/informatica.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

    
     
    </Box>

    )
}

export default HomeVideo
