'use client'
import { createTheme } from '@mui/material/styles';

const primaryMain = '#dfdf8a';  // Light grey
const secondaryMain = '#d6d4cd';  // Light blue

const theme = createTheme({
    palette: {
        primary: {
            main: primaryMain,
        },
        secondary: {
            main: secondaryMain,
        },
        background: {
            default: '#d6c9a7',
        },
        text: {
            primary: '#000000',
            secondary: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'arial',  // Serif font
        h1: {
            fontSize: '3rem',  // Increased font size
            fontWeight: 400,
            color: '#352402',  // Title color
        },
        h4: {
            fontSize: '2rem',
            fontWeight: 400,
            color: '#3d0099',
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 400,
            color: '#000000',
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 400,
            color: '#000000',
        },
        body1: {
            fontSize: '1.25rem',
            color: '#000000',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: primaryMain,
                    color: '#000000',
                    '&:hover': {
                        backgroundColor: secondaryMain,
                    },
                },
                contained: {
                    fontSize: '1rem',
                    padding: '10px 20px',
                },
                outlined: {
                    fontSize: '1rem',
                    padding: '10px 20px',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: primaryMain,
                    color: '#000000',
                },
            },
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    padding: '24px 0',
                },
            },
        },
        MuiStepLabel: {
            styleOverrides: {
                label: {
                    fontSize: '1rem',
                },
            },
        },
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    color: '#000000',  // Apply the background color to the spinner
                },
            },
        },
    },
});

export default theme;
