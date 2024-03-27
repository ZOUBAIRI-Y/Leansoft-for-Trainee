import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function Layout() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            <header>
                {(currentPath==='/')?<HeroSection />: <Header />}
                
            </header>
            <main><Outlet /></main>
            <footer><Footer /></footer>
            
        </>
    )
}

export default Layout;