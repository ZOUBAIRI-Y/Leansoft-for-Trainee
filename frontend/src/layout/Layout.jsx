import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";

export default function Layout() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            <header>
                {(currentPath==='/')?<HeroSection />: <Header />}
                
            </header>
            <main><Outlet /></main>
            <footer>Footer</footer>
            
        </>
    )
}