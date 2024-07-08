import EditSavedTrips from "@/components/trip/EditSavedTrips";
import Link from "next/link";
import {Typography, Box} from "@mui/material";
import React from "react";

const MyTrips = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#d6c9a7',
            minHeight: '100vh',}}>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', width: '30%', marginTop: 15}}>
            <Link href="/trip-stepper" style={{textDecoration: 'none', color: 'inherit'}}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #000000',
                    borderRadius: '5px'
                }}>
                    <Typography variant="body1" sx={{marginRight: '10px'}}>Create New Trip</Typography>
                    <Box sx={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#d6c9a7',
                        border: '1px solid #000000'
                    }}/>
                </Box>
            </Link>
        </Box>
            <Box sx={{display: 'flex', justifyContent: 'flex-start', width: 700, marginTop: 15, height: 400, }}>
                <EditSavedTrips/>
            </Box>

        </Box>
    );
};

export default MyTrips;
