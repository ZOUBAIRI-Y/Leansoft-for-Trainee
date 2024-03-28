import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function Layout() {
    const location = useLocation();
    const currentPath = location.pathname;
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

export default Layout;