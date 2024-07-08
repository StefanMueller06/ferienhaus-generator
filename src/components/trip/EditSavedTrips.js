'use client'
import React, {useEffect, useState} from 'react';
import {Card, CardContent, IconButton, Link, List, ListItem, ListItemText, Typography} from '@mui/material';
import {deleteSavedTrip, getSavedTrips} from "@/services/tripService";
import DeleteIcon from '@mui/icons-material/Delete';

const EditSavedTrips = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const savedTrips = getSavedTrips();
        setTrips(savedTrips);
    }, []);

    const handleDelete = (id) => {
        deleteSavedTrip(id);
        setTrips(getSavedTrips());
    };

    return (
        <Card variant="outlined" sx={{borderRadius: 2, width: 300, padding: 2, marginRight: 50, border: '1px solid #000000'}}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Edit last trips
                </Typography>
                <List>
                    {trips.length > 0 ? (
                        trips.map(trip => (
                            <ListItem key={trip.id} sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <ListItemText primary={trip.title}/>
                                <div>
                                    <Link href={`/show-trip/${trip.id}`} style={{marginLeft: 10, color: '#e3a960'}}>
                                        Details
                                    </Link>
                                    <IconButton aria-label="delete" onClick={() => handleDelete(trip.id)}
                                                style={{marginLeft: 10}}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </div>
                            </ListItem>
                        ))
                    ) : (
                        <Typography variant="body1" component="div">
                            No saved trips found.
                        </Typography>
                    )}
                </List>
            </CardContent>
        </Card>
    );
};

export default EditSavedTrips;