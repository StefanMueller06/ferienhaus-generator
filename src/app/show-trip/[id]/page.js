'use client'
import {Box, Button, Card, CardContent, CardMedia, CircularProgress, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {useParams, useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import {getTripById, saveTripInLocalStorage} from "@/services/tripService";

const TripCard = () => {
    const theme = useTheme();
    const router = useRouter();
    const {id} = useParams();
    const [trip, setTrip] = useState(null);
    const [isSaved, setSaved] = useState(false);

    useEffect(() => {
        if (id) {
            const trip = getTripById(id);
            setTrip(trip);
        }
    }, [id]);

    const handleSave = () => {
        if (id) {
            saveTripInLocalStorage(id)
            setSaved(true)
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            {trip ? (
                <Card sx={{maxWidth: 345, boxShadow: 3, borderRadius: 2}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={trip.images[0].url}
                        alt={trip.images[0].description}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color={theme.palette.text.primary}>
                            {trip.title}
                        </Typography>
                        <Typography variant="body2">
                            {trip.description}
                        </Typography>
                        <Box mt={2}>
                            <Typography variant="body1" color={theme.palette.text.primary}>
                                <strong>Country:</strong> {trip.details.country}
                            </Typography>
                            <Typography variant="body1" color={theme.palette.text.primary}>
                                <strong>Price per
                                    Night:</strong> CHF {trip.details.price_per_night_in_chf_per_person} per person
                            </Typography>

                            <Typography variant="body1" color={theme.palette.text.primary}>
                                <strong>Climate:</strong> {trip.details.climate}
                            </Typography>
                            <Typography variant="body1" color={theme.palette.text.primary}>
                                <strong>Activities:</strong> {trip.details.activities.join(', ')}
                            </Typography>
                            <Typography variant="body1" color={theme.palette.text.primary}>
                                <strong>Transportation
                                    Options:</strong> {trip.details.transportation_options.join(', ')}
                            </Typography>
                            <Typography variant="body1" color={theme.palette.text.primary}>
                                <strong>WiFi Availability:</strong> {trip.details.wifi_availability}
                            </Typography>
                            <Typography variant="body1" color={theme.palette.text.primary}>
                                <strong>Pet Friendly:</strong> {trip.details.pet_friendly ? 'Yes' : 'No'}
                            </Typography>
                            <Typography variant="body1" color={theme.palette.text.primary}>
                                <strong>Family Friendly:</strong> {trip.details.family_friendly ? 'Yes' : 'No'}
                            </Typography>
                            <Typography variant="body1" color={theme.palette.text.primary}>
                                <strong>Safety Index:</strong> {trip.details.safety_index}
                            </Typography>

                            <Typography variant="body1" color={theme.palette.text.primary}>
                                <strong>Host
                                    Contact:</strong> {trip.details.host_contact.email}, {trip.details.host_contact.phone}
                            </Typography>
                        </Box>
                        <Box mt={2} display="flex" justifyContent="center">
                            <Button variant="contained" color="primary" disabled={isSaved} onClick={handleSave}>Save</Button>
                        </Box>
                    </CardContent>
                </Card>
            ) : (
                <CircularProgress color="secondary"/>
            )}
        </Box>
    );
}

export default TripCard;
