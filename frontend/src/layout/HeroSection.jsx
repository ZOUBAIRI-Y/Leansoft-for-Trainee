import Header from "./Header";
import heroImg from "../assets/herosection-1920X1080-.png";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className="heroSection_home">
            <Header />
            <div className="row m-0 hero_main">
                <div className="heading_container center-heading-content col-lg-4 offset-lg-1 d-flex flex-column justify-content-center">
                    <h1 className="text-primary fw-bold">Internship</h1>
                    <h2 className="text-primary">Career opportunities</h2>
                    <p>
                        Create your profile, seek for your training cours with
                        Leansoft for trainee online
                    </p>
                    <Link to={'create-profile'}>
                        <button className="btn rounded-5">
                            Create profile
                        </button>
                    </Link>
                </div>
                <div className="bg_container center-heroBG col">
                    {/* <img src={heroImg} alt="Hero section backgound"/> */}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
