import React from 'react';
import {AppBar, Box, Grid, IconButton, Toolbar, Typography} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";

const Header = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <Link href="/" style={{textDecoration: 'none', color: 'inherit'}}>
                                        <Typography variant="body1">Ferienhaus-Generator</Typography>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/overview" style={{textDecoration: 'none', color: 'inherit'}}>
                                        <Typography variant="body1">My Overview</Typography>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/about" style={{textDecoration: 'none', color: 'inherit'}}>
                                        <Typography variant="body1">About Us</Typography>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/contact" style={{textDecoration: 'none', color: 'inherit'}}>
                                        <Typography variant="body1">Contact</Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit">
                                <AccountCircleIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
