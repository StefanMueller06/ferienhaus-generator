'use client'
import React, { useState } from 'react';
import { AppBar, Box, Grid, IconButton, Toolbar, Typography, Divider, Popover, Paper, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'profile-popover' : undefined;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography variant="body1">Ferienhaus-Generator</Typography>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/my-trips" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography variant="body1">My Trips</Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography variant="body1">About Us</Typography>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography variant="body1">Contact</Typography>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white' }} />
                                </Grid>
                                <Grid item>
                                    <IconButton color="inherit" onClick={handleProfileClick}>
                                        <AccountCircleIcon />
                                    </IconButton>
                                    <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleProfileClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        PaperProps={{
                                            sx: {
                                                width: 300,
                                                p: 2,
                                                mt: 1,
                                                mr: 2
                                            }
                                        }}
                                    >
                                        <Paper sx={{ p: 2 }}>
                                            <Grid container spacing={2}>
                                                <Grid item>
                                                    <Avatar src="/path/to/profile.jpg" alt="Profile Picture" />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1">Séverin Fux</Typography>
                                                    <Typography variant="body2" color="textSecondary">Level: 3 (Advanced User)</Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider sx={{ my: 2 }} />
                                            <Typography variant="body2">+41 739 72 71</Typography>
                                            <Typography variant="body2">séverin.fux@lerneende.bbw.ch</Typography>
                                            <Typography variant="body2">Eglisau 8193, Steig 13</Typography>
                                            <Typography variant="body2">Schweiz CH</Typography>
                                            <Typography variant="body2" sx={{ mt: 1 }}>sent data to iPhone</Typography>
                                            <Typography variant="body2">invite other with discount!</Typography>
                                        </Paper>
                                    </Popover>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
