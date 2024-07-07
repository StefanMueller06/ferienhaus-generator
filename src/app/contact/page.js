import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactPage = () => {
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
            <Typography variant="h1" sx={{ marginBottom: 2 }}>
                Contact Us
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 4, maxWidth: '800px' }}>
                We'd love to hear from you! Whether you have a question about our services, need assistance with your booking, or just want to give us feedback, feel free to reach out. Fill out the form below, and our team will get back to you as soon as possible.
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: '100%',
                    maxWidth: '600px'
                }}
            >
                <TextField
                    required
                    label="Name"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    required
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                />
                <TextField
                    required
                    label="Subject"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    required
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ padding: '10px 20px' }}
                >
                    Send Message
                </Button>
            </Box>
            <Typography variant="h4" sx={{ marginTop: 4, marginBottom: 2 }}>
                Or Reach Us At
            </Typography>
            <Typography variant="body1">
                Email: support@ferienhaus-generator.com
            </Typography>
            <Typography variant="body1">
                Phone: +41 123 456 789
            </Typography>
            <Typography variant="body1">
                Address: Ferienhaus-Generator, 123 Holiday St, Vacation City, CH
            </Typography>
        </Box>
    );
};

export default ContactPage;
