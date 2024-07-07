import Header from "@/components/Header";
import { ThemeProvider } from "@mui/material";
import theme from "@/app/styles/theme";

const Layout = ({ children }) => {
    return (
        <html lang={'de'}>
        <head>
            <title>Ferienhaus-Generator</title>
        </head>
        <body style={{ margin: 0, backgroundColor: '#d6c9a7' }}>
        <ThemeProvider theme={theme}>
            <Header />
            <main className="container">
                {children}
            </main>
        </ThemeProvider>
        </body>
        </html>
    );
};

export default Layout;
