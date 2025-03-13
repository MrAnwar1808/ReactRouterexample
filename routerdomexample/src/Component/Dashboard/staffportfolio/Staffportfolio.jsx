
import { Avatar, Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Facebook, Twitter, LinkedIn,  } from "@mui/icons-material";
import React from "react";

const staffMembers = [
    {
        avatar: "images/staff1.jpg",
        image: "picture/timeline1.jpg", 
        name: "Gauthier, Rick",
        school: "School of Business",
        department: "Journalism and Communication",
        position: "Regional IT Director at Amazon, Seattle, United States",
        
      },
      {
        avatar: "images/staff2.jpg",
        image: "picture/timeline2.jpg",
        name: "Arens, Manuel",
        school: "School of Business",
        department: "Journalism and Communication",
        position: "Global Procurement Manager at Google, California, United States",
        
      },
      {
        avatar: "images/staff3.jpg",
        image: "picture/timeline3.jpg",
        name: "Lemieux, Frederic",
        school: "School of Business",
        department: "Information Technology",
        position: "Researcher in Intelligence, Cybersecurity and Disruptive Technologies",
       
      },
      {
        avatar: "images/staff4.jpg",
        image: "picture/timeline4.jpg",
        name: "Gram, Mick",
        school: "School of Business",
        department: "Journalism and Communication",
        position: "Director of Business Intelligence and Analytics at Red Bull, Los Angeles, United States",
      
      },
      {
        avatar: "images/staff5.jpg",
        image: "picture/timeline5.jpg",
        name: "Lee, Colin",
        school: "School of Business",
        department: "Senior Andriod Engineer for Meetup",
        position: "Senior Andriod Engineer for Meetup",
      
      },
      {
        avatar: "images/staff6.jpg",
        image: "picture/timeline6.jpg",
        name: "Stevenson, Scott",
        school: "School of Business",
        department: "Journalism and Communication",
        position: "Director of Digital Marketing at Warner Bros. Discovery, Burbank, United States",
      
      },
      {
        avatar: "images/staff7.jpg",
        image: "picture/timeline7.jpg",
        name: "La Sala, Andrea",
        school: "School of Business",
        department: "Artificial intelligence",
        position: "Global Brand and Merchandising Director of Armani Exchange at Giorgio Armani, Milan, Italy",
      
      },
      {
        avatar: "images/staff8.jpg",
        image: "picture/timeline8.jpg",
        name: "Sutton, Chris",
        school: "Law",
        department: "information technology",
        position: "Director of Blockchain and Digital Assets at Mastercard, Miami, United States",
      
      },

      {
        avatar: "images/staff9.jpg",
        image: "picture/timeline9.jpg",
        name: "Singh, Joshua",
        school: "Design",
        department: "video games design",
        position: "Art Direct at Marvel Entertainment California, USA",
      
      },

      {
        avatar: "images/staff10.jpg",
        image: "picture/timeline10.jpg",
        name: "DeAngelis,J. Michael",
        school: "School of Business",
        department: "Information Technology",
        position: "Director of Communications and Technology at the University of pennsylvania, United States",
      
      },

]

function StaffPortfolio(){
    
    return(
         
    <Box>
           
        <Typography variant="h3" sx={{padding:"20px", margin:"10px"}}>Teachers</Typography>
            
        <Grid container spacing={3} justifyContent="center">
    
            {staffMembers.map((staff, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
  
            <CardMedia component="img" height="100" image={staff.image} alt={staff.name} />
            
           
            <Box display="flex" justifyContent="center" sx={{ mt: -5 }}>
              <Avatar src={staff.avatar} sx={{ width: 80, height: 80, border: "3px solid white" }} />
            </Box>
            
            <CardContent sx={{ textAlign: "center", minHeight: 180 }}>
              <Typography variant="h6" fontWeight="bold">
                {staff.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span style={{ color: "#8a2be2" }}>{staff.school}</span> |{" "}
                <span style={{ color: "#d2691e" }}>{staff.department}</span>
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {staff.position}
              </Typography>
            </CardContent>

        
            <Box display="flex" justifyContent="center" gap={2} sx={{ pb: 2 }}>
              <Facebook sx={{ color: "#3b5998", cursor: "pointer" }} />
              <Twitter sx={{ color: "#00acee", cursor: "pointer" }} />
              <LinkedIn sx={{ color: "#0077b5", cursor: "pointer" }} />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>

    )
}

export default StaffPortfolio