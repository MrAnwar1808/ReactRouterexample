
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const courses = [
    {id: 1,
     image:"images/pic1.jpg",
     heading: "Information Technology",
     title: "Security and Auditing of Applications and Web Services",  
     para: "Nowadays, security in web applications and services is of vital importance, for this reason, the knowledge required for a correct execution of the process is becoming more and more demanding and rigorous. That is why, through studying this course, IT professionals will be able to perform system and network audits to protect web applications.",
     degree: "postgraduate Certificate",
     type: "Online",
     time: "300 hours",
     period: "Duration: 8 weeks",
     sduration: "Start: 10/03/2025",
     eduration:"End: 09/05/2025",
     fee: "₹57,990"
    },

    {id: 2,
        image:"images/pic2.jpg",
        heading: "Information Technology",
        title: "Web Application Development",  
        para: "With this complete program, the student will learn to assimilate the process of creating web content through HTML markup language, as well as to understand the basic, medium and advanced concepts of PHP language for the implementation of server-side applications.",
        degree: "postgraduate Certificate",
        type: "Online",
        time: "300 hours",
        period: "Duration: 8 weeks",
        sduration: "Start: 10/03/2025",
        eduration:"End: 09/05/2025",
        fee: "₹57,990"
    },

    {id: 3,
        image:"images/pic3.jpg",
        heading: "Information Technology",
        title: "Software Project Development and Management",  
        para: "With this high-level program, you will specialize in the Software Project Development and Management, under the guidance of professional experts in the field. Throughout these months, students will learn the Lean development methodology to discriminate the activities that do not add value in the process, in order to obtain a higher quality software, among other issues of interest that will be addressed in this program",
        degree: "postgraduate Certificate",
        type: "Online",
        time: "300 hours",
        period: "Duration: 8 weeks",
        sduration: "Start: 10/03/2025",
        eduration:"End: 09/05/2025",
        fee: "₹57,990"
       },

       {id: 4,
        image:"images/pic4.jpg",
        heading: "Information Technology",
        title: "Desktop Application Development",  
        para: "With this comprehensive program, the student will learn the Android mobile application development environments and the debugging and publishing processes, as well as the knowledge required for secure software coding and validation techniques, among other issues of interest that will be addressed throughout these months of intensive education.",
        degree: "postgraduate Certificate",
        type: "Online",
        time: "300 hours",
        period: "Duration: 8 weeks",
        sduration: "Start: 10/03/2025",
        eduration:"End: 09/05/2025",
        fee: "₹57,990"
       },

       {id: 5,
        image:"images/pic5.jpg",
        heading: "Information Technology",
        title: "Computer Structure and Technology",  
        para: "IT Engineers and other professionals who wish to work in this broad field need to know the basics to help them understand more complex situations. Understand the structure of computers is essential for delve into the IT field. This program will allow professionals to acquire the necessary knowledge to develop their work in the IT field.",
        degree: "postgraduate Certificate",
        type: "Online",
        time: "300 hours",
        period: "Duration: 8 weeks",
        sduration: "Start: 10/03/2025",
        eduration:"End: 09/05/2025",
        fee: "₹57,990"
       },
    
       {id: 6,
        image:"images/pic6.jpg",
        heading: "Information Technology",
        title: "Information Technology Servicest",  
        para: "Information and Communication Technologies (ICT) are an indispensable part of any company, as they are necessary to carry out different business processes. This program will enable professionals to acquire a broad vision of the technological services of organizations in order to develop quality work.",
        degree: "postgraduate Certificate",
        type: "Online",
        time: "300 hours",
        period: "Duration: 8 weeks",
        sduration: "Start: 10/03/2025",
        eduration:"End: 09/05/2025",
        fee: "₹57,990"
       },

       {id: 7,
        image:"images/pic7.jpg",
        heading: "Information Technology",
        title: "Software Reuse",  
        para: "The Software Reuse Program is intended to introduce students to main software design patterns. This program will allow them to acquire a wide vision in this field in order to develop quality work.",
        degree: "postgraduate Certificate",
        type: "Online",
        time: "300 hours",
        period: "Duration: 8 weeks",
        sduration: "Start: 10/03/2025",
        eduration:"End: 09/05/2025",
        fee: "₹57,990"
       },

       {id: 8,
        image:"images/pic8.jpg",
        heading: "Information Technology",
        title: "Security Management",  
        para: "Learn about the use of good security practices in the management of information technology services with this intensive program taught by experienced professionals. Throughout these weeks you will learn about the information security process, its implications on confidentiality, integrity, availability and economic costs.",
        degree: "postgraduate Certificate",
        type: "Online",
        time: "300 hours",
        period: "Duration: 8 weeks",
        sduration: "Start: 10/03/2025",
        eduration:"End: 09/05/2025",
        fee: "₹57,990"
       },

       {id: 9,
        image:"images/pic9.jpg",
        heading: "Information Technology",
        title: "Online Application Security",  
        para: "With this highly rigorous educational program, our students will acquire knowledge they need to assess and detect vulnerabilities in online applications, guided by experts in the field. A unique program that will allow them to achieve academic excellence and stand out in a field with a high demand for professionals.",
        degree: "postgraduate Certificate",
        type: "Online",
        time: "300 hours",
        period: "Duration: 8 weeks",
        sduration: "Start: 10/03/2025",
        eduration:"End: 09/05/2025",
        fee: "₹57,990"
       },

       {id: 10,
        image:"images/pic10.jpg",
        heading: "Information Technology",
        title: "Web Server Computing",  
        para: "Upgrade your knowledge in Web Server Computing with this prestigious program developed by industry experts with extensive experience in the field. You will have the most advanced teaching resources and the most innovative knowledge, in a highly scientifically rigorous program that stands out for its effective learning methodology; Relearning.",
        degree: "postgraduate Certificate",
        type: "Online",
        time: "300 hours",
        period: "Duration: 8 weeks",
        sduration: "Start: 10/03/2025",
        eduration:"End: 09/05/2025",
        fee: "₹57,990"
       },

       {id: 11,
        image:"images/pic11.jpg",
        heading: "Information Technology",
        title: "Security Audit",  
        para: "Specialize in Security Audit with this high-quality program taught by professionals with extensive experience in the field. Throughout these weeks of studying, the student will acquire the knowledge required for the correct execution of the audit process and internal computer control.",
        degree: "postgraduate Certificate",
        type: "Online",
        time: "300 hours",
        period: "Duration: 8 weeks",
        sduration: "Start: 10/03/2025",
        eduration:"End: 09/05/2025",
        fee: "₹57,990"
       },


]

function CourseCards(){

    return(

        <Box sx={{ padding: 4, backgroundColor:"rgb(211, 208, 208)" }}>
            <Typography variant="h5" gutterBottom sx={{marginBottom:"50px", padding:"20px", }}>Featured Courses</Typography>
            <Grid container spacing={3}>
                {courses.map((course) => (
                    <Grid item xs={12} sm={6} md={4} key={course.id}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3, display: "flex", flexDirection: "column", height: "100%" }}>
                            <Box sx={{ position: "relative" }}>
                                <CardMedia component="img" height="180" image={course.image} alt={course.title} />
                                <Box sx={{
                                    position: "absolute", left: "50%", bottom: -16,
                                    transform: "translateX(-50%)", backgroundColor: "#29b6f6", color: "white",
                                    padding: "6px 16px", borderRadius: "16px", fontSize: "14px", fontWeight: "bold",
                                    boxShadow: 2
                                }}>
                                    {course.heading}
                                </Box>
                            </Box>
                            <CardContent sx={{ flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
                                <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>{course.title}</Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mt: 1, flexGrow: 1 }}>{course.para}</Typography>
                                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                                    <Box sx={{ border: "1px solid black", padding: "2px 6px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold", marginRight: "8px" }}>{course.degree}</Box>
                                    <Typography variant="body2">{course.type}</Typography>
                                    <Typography variant="body2" sx={{ ml: "auto", fontWeight: "bold" }}>{course.time}</Typography>
                                </Box>
                                <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant="body2">{course.sduration}</Typography>
                                    <Typography variant="body2">{course.eduration}</Typography>
                                </Box>
                            </CardContent>
                            <Box sx={{ backgroundColor: "#29b6f6", color: "white", textAlign: "center", padding: "10px", fontSize: "18px", fontWeight: "bold", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px" }}>{course.fee}</Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default CourseCards