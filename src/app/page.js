import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const WelcomePage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#d6c9a7',
            textAlign: 'center',
            padding: 4,

        }}>
            <img src="/home.webp" alt="Warm Climate" style={{width: '512px', height: '288px', marginBottom: 30, marginTop: -200}}/>
            <Typography variant="h1" sx={{marginBottom: 2}}>
                Welcome to the Ferienhaus-Generator!
            </Typography>
            <Typography variant="body1" sx={{marginTop: 1, marginBottom: 5, marginLeft: 35, marginRight: 35}}>
                Discover the perfect vacation rental tailored to your preferences. Whether you seek a cozy cabin in the
                mountains, a beachfront villa, or a charming apartment in the city, we have something for everyone. Our
                app allows you to create new trips, view saved trips, and find your ideal getaway with ease.
            </Typography>
            <Box sx={{display: 'flex', gap: 2}}>
                <Link href="/my-trips" passHref>
                    <Button variant="contained" color="primary" sx={{padding: '10px 20px'}}>
                        Start
                    </Button>
                </Link>

            </Box>
        </Box>
    );
};

export default WelcomePage;
