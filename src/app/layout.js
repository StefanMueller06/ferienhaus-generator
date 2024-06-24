import "./styles/globals.css";
import Header from "@/app/components/Header";

const Layout = ({children}) => {
    return (
        <html>
        <head>
            <title>Ferienhaus-Generator</title>
        </head>
        <body>
        <main className="container">
            <Header/>
            {children}
        </main>
        </body>
        </html>
    );
};

export default Layout;
