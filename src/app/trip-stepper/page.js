"use client"
import React, {useState} from 'react';
import {
    Box,
    Button,
    Checkbox,
    CircularProgress,
    FormControlLabel,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography
} from '@mui/material';
import {calculateBestTrip} from "@/services/tripService";
import {ThemeProvider} from '@mui/material/styles';
import theme from '../styles/theme';
import Link from 'next/link';

const steps = ['Select Climate', 'Set Budget', 'Family Friendly', 'Pet Friendly', 'Transportation Options', 'Wifi Availability', 'Safety Index', 'Preferred Activities'];

export default function TripStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [preferences, setPreferences] = useState({
        climate: '',
        budget: 0,
        familyFriendly: false,
        petFriendly: false,
        transportationOptions: [],
        wifiAvailability: false,
        safetyIndex: 0,
        activities: [],
    });
    const [bestTrip, setBestTrip] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            setLoading(true);
            setTimeout(() => {
                const trip = calculateBestTrip(preferences);
                setBestTrip(trip);
                setLoading(false);
            }, 2000);
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setPreferences({
            climate: '',
            budget: 0,
            familyFriendly: false,
            petFriendly: false,
            transportationOptions: [],
            wifiAvailability: false,
            sightseeingIndex: 0,
            safetyIndex: 0,
            activities: [],
        });
        setBestTrip(null);
    };

    const handlePreferenceChange = (key, value) => {
        setPreferences({
            ...preferences,
            [key]: value,
        });
    };

    const handleCheckboxChange = (key, value) => {
        const currentValues = preferences[key];
        const newValues = currentValues.includes(value) ? currentValues.filter(v => v !== value) : [...currentValues, value];
        setPreferences({
            ...preferences,
            [key]: newValues,
        });
    };

    const isSelected = (key, value) => {
        return preferences[key] === value;
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{width: '100%', maxWidth: '600px', mx: 'auto', mt: 4}}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{mt: 4}}>
                    {activeStep === steps.length ? (
                        <Box sx={{textAlign: 'center',}}>
                            <Typography variant="h4" sx={{marginBottom: 2}}>Best Trip</Typography>
                            {loading ? (
                                <CircularProgress/>
                            ) : bestTrip ? (
                                <Box>
                                    <Typography variant="h5">{bestTrip.title}</Typography>
                                    <Typography>{bestTrip.description}</Typography>
                                    <Link href={`/show-trip/${bestTrip.id}`} passHref>
                                        <Button variant="contained" color="primary" sx={{mt: 2}}>
                                            View Trip
                                        </Button>
                                    </Link>
                                </Box>
                            ) : (
                                <Typography>No trip matches your preferences.</Typography>
                            )}
                            {!loading && <Button onClick={handleReset} sx={{mt: 2}}>Reset</Button>}
                        </Box>
                    ) : (
                        <Box sx={{textAlign: 'center'}}>
                            {activeStep === 0 && (
                                <Box>
                                    <Typography variant="h5">Select Climate</Typography>
                                    <Box sx={{display: 'flex', justifyContent: 'center', gap: 2, mt: 2}}>
                                        <Box
                                            sx={{
                                                cursor: 'pointer',
                                                border: isSelected('climate', 'warm') ? '3px solid #dfdf8a' : 'none'
                                            }}
                                            onClick={() => handlePreferenceChange('climate', 'warm')}
                                        >
                                            <img src="/stepper/climate/warm.jpg" alt="Warm Climate"
                                                 style={{width: '300px', height: '200px'}}/>
                                        </Box>
                                        <Box
                                            sx={{
                                                cursor: 'pointer',
                                                border: isSelected('climate', 'cold') ? '3px solid #dfdf8a' : 'none'
                                            }}
                                            onClick={() => handlePreferenceChange('climate', 'cold')}
                                        >
                                            <img src="/stepper/climate/cold.jpg" alt="Cold Climate"
                                                 style={{width: '300px', height: '200px'}}/>
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                            {activeStep === 1 && (
                                <Box>
                                    <Typography variant="h5">Set Budget</Typography>
                                    <TextField
                                        type="number"
                                        value={preferences.budget}
                                        onChange={(e) => handlePreferenceChange('budget', parseInt(e.target.value))}
                                        variant="outlined"
                                        sx={{mt: 2, backgroundColor: 'white'}}
                                    />
                                </Box>
                            )}
                            {activeStep === 2 && (
                                <Box>
                                    <Typography variant="h5">Family Friendly</Typography>
                                    <Box sx={{display: 'flex', justifyContent: 'center', gap: 2, mt: 2}}>
                                        <Button
                                            variant={isSelected('familyFriendly', true) ? 'contained' : 'outlined'}
                                            onClick={() => handlePreferenceChange('familyFriendly', true)}
                                        >
                                            Yes
                                        </Button>
                                        <Button
                                            variant={isSelected('familyFriendly', false) ? 'contained' : 'outlined'}
                                            onClick={() => handlePreferenceChange('familyFriendly', false)}
                                        >
                                            No
                                        </Button>
                                    </Box>
                                </Box>
                            )}
                            {activeStep === 3 && (
                                <Box>
                                    <Typography variant="h5">Pet Friendly</Typography>
                                    <Box sx={{display: 'flex', justifyContent: 'center', gap: 2, mt: 2}}>
                                        <Button
                                            variant={isSelected('petFriendly', true) ? 'contained' : 'outlined'}
                                            onClick={() => handlePreferenceChange('petFriendly', true)}
                                        >
                                            Yes
                                        </Button>
                                        <Button
                                            variant={isSelected('petFriendly', false) ? 'contained' : 'outlined'}
                                            onClick={() => handlePreferenceChange('petFriendly', false)}
                                        >
                                            No
                                        </Button>
                                    </Box>
                                </Box>
                            )}
                            {activeStep === 4 && (
                                <Box>
                                    <Typography variant="h5">Transportation Options</Typography>
                                    <Box sx={{display: 'flex', justifyContent: 'center', gap: 2, mt: 2}}>
                                        {['Subway', 'Bus', 'Bike rental', 'Boat', 'Taxi', 'Scooter rental'].map(option => (
                                            <FormControlLabel
                                                key={option}
                                                control={
                                                    <Checkbox
                                                        checked={preferences.transportationOptions.includes(option)}
                                                        onChange={() => handleCheckboxChange('transportationOptions', option)}
                                                    />
                                                }
                                                label={option}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            )}
                            {activeStep === 5 && (
                                <Box>
                                    <Typography variant="h5">Wifi Availability</Typography>
                                    <Box sx={{display: 'flex', justifyContent: 'center', gap: 2, mt: 2}}>
                                        <Button
                                            variant={isSelected('wifiAvailability', true) ? 'contained' : 'outlined'}
                                            onClick={() => handlePreferenceChange('wifiAvailability', true)}
                                        >
                                            Yes
                                        </Button>
                                        <Button
                                            variant={isSelected('wifiAvailability', false) ? 'contained' : 'outlined'}
                                            onClick={() => handlePreferenceChange('wifiAvailability', false)}
                                        >
                                            No
                                        </Button>
                                    </Box>
                                </Box>
                            )}
                            {activeStep === 6 && (
                                <Box>
                                    <Typography variant="h5">Safety Index</Typography>
                                    <TextField
                                        type="number"
                                        inputProps={{min: 0, max: 1, step: 0.1}}
                                        value={preferences.safetyIndex}
                                        onChange={(e) => handlePreferenceChange('safetyIndex', parseFloat(e.target.value))}
                                        variant="outlined"
                                        sx={{mt: 2, backgroundColor: "white"}}
                                    />
                                </Box>
                            )}
                            {activeStep === 7 && (
                                <Box>
                                    <Typography variant="h5">Preferred Activities</Typography>
                                    <Box sx={{display: 'flex', justifyContent: 'center', gap: 2, mt: 2}}>
                                        {['Museum Tours', 'Historical Walks', 'Cycling', 'Snorkeling', 'Beach Volleyball', 'Island Tours', 'Temple Visits', 'Street Food Tours', 'Cultural Shows'].map(activity => (
                                            <FormControlLabel
                                                key={activity}
                                                control={
                                                    <Checkbox
                                                        checked={preferences.activities.includes(activity)}
                                                        onChange={() => handleCheckboxChange('activities', activity)}
                                                    />
                                                }
                                                label={activity}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            )}
                            <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 4}}>
                                <Button disabled={activeStep === 0} onClick={handleBack}>
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </ThemeProvider>
    );
}
