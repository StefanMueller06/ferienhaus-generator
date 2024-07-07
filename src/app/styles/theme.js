'use client'
// styles/theme.js
import {createTheme} from '@mui/material/styles';

// Colors extracted from the screenshot
const primaryMain = '#f5f5dc';  // Light grey
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
            default: '#fafafa',  // Overall background
        },
        text: {
            primary: '#000000',  // Main text color
            secondary: '#ffffff',  // Light text color
        },
    },
    typography: {
        fontFamily: 'serif',  // Serif font
        h1: {
            fontSize: '2rem',
            fontWeight: 400,
            color: '#3d0099',  // Title color
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 400,
            color: '#000000',
        },
        body1: {
            fontSize: '1rem',
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
    },
});

export default theme;
