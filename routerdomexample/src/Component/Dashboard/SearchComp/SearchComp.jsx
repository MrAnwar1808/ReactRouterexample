
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import './SearchComp.css'



function SearchComp(){

    const [search, setSearch] = useState("")

    return(

        <Box sx={{textAlign:"center", padding:"40px"}}>
            <Typography variant="h4" sx={{padding:"20px", margin:"10px"}}>
            "The world's largest faculty of information technology”
            </Typography>

            <Box sx={{display:"flex", gap:"300px",  padding:"20px"}}>

                <Typography variant="h4" sx={{marginLeft:"100px"}}>What would you like to <br></br>
                learn?</Typography>

                <Box className="search-container" sx={{padding:"20px",margin:"10px"}}>
                    <input  type="text"
                            className="search-input"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                    />

                    <Button className="search-button" sx={{backgroundColor:"blue"}}>
                            <img src="images/search.png" alt="search" />
                    </Button>
                </Box>


            </Box>
        </Box>

    )
}

export default  SearchComp