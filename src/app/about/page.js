import React from 'react';
import {Box, Typography, Card, CardContent, CardMedia} from '@mui/material';

const AboutPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#d6c9a7',
            textAlign: 'center',
            padding: 4
        }}>
            <Typography variant="h1" sx={{marginBottom: 2}}>
                About Us
            </Typography>
            <Typography variant="body1" sx={{marginBottom: 4, maxWidth: '800px'}}>
                Welcome to Ferienhaus-Generator, your ultimate travel companion in finding the perfect vacation rental.
                Our mission is to simplify the process of discovering and booking vacation homes that cater to your
                unique preferences and needs. Whether you're seeking a tranquil retreat, an adventurous getaway, or a
                family-friendly destination, we've got you covered.
            </Typography>
            <Card sx={{maxWidth: 800, marginBottom: 4}}>
                <CardMedia
                    component="img"
                    alt="Team photo"
                    height="400"
                    src={"/about/team.png"}
                    title="Team photo"
                />
                <CardContent>
                    <Typography variant="h5" component="div" sx={{marginBottom: 2}}>
                        Our Story
                    </Typography>
                    <Typography variant="body1">
                        Founded in 2023, Ferienhaus-Generator was created by a group of travel enthusiasts who
                        recognized the challenges of finding the ideal vacation rental. Our team is dedicated to
                        providing a seamless and enjoyable experience for travelers worldwide. With a diverse selection
                        of properties and user-friendly tools, we aim to make your vacation planning stress-free and
                        exciting.
                    </Typography>
                </CardContent>
            </Card>
            <Typography variant="h4" sx={{marginBottom: 2}}>
                Meet the Team
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap'}}>
                <Card sx={{maxWidth: 300}}>
                    <CardMedia
                        component="img"
                        alt="Séverin Fux"
                        height="300"
                        src={"about/severin.png"}
                        title="Séverin Fux"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Séverin Fux
                        </Typography>
                        <Typography variant="body2">
                            Co-Founder & CEO
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{maxWidth: 300}}>
                    <CardMedia
                        component="img"
                        alt="Jonas Züst"
                        height="300"
                        src={"about/jonas.png"}
                        title="Jonas Züst"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Jonas Züst
                        </Typography>
                        <Typography variant="body2">
                            Co-Founder & CTO
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{maxWidth: 300}}>
                    <CardMedia
                        component="img"
                        alt="Aaron Rhyner"
                        height="300"
                        src={"about/aaron.png"}
                        title="Aarony Rhyner"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Aaron Rhyner
                        </Typography>
                        <Typography variant="body2">
                            Head of Marketing
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{maxWidth: 300}}>
                    <CardMedia
                        component="img"
                        alt="Stefan Müller"
                        height="300"
                        image="about/stefan.jpg"
                        title="Stefan Müller"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Stefan Müller
                        </Typography>
                        <Typography variant="body2">
                            Co-Head of Marketing
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default AboutPage;
