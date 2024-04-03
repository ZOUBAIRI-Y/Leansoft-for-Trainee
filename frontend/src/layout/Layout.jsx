import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import HeroSecCompany from "./HeroSecCompany";

function Layout() {
    const location = useLocation();
    const currentPath = location.pathname;
    switch (currentPath) {
        case '/home-leansoft':
           return (
            <>
                <header className="leansoft_header">
                    <HeroSecCompany />
                </header>
                <main ><Outlet /></main>
                <footer className="page_footer"><Footer /></footer>
            </>
           )
    
        default:
            return (
                <>
                    <header className="page_header">
                        {(currentPath==='/')?<HeroSection />: <Header />}
                        
                    </header>
                    <main className="page_main"><Outlet /></main>
                    <footer className="page_footer"><Footer /></footer>
                    
                </>
            )
    }
}

export default Layout;