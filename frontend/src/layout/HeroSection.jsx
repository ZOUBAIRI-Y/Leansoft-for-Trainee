import Header from "./Header";
import heroImg from "../assets/herosection-1920X1080-.png";

function HeroSection() {
    return (
        <section className="heroSection_home">
            <Header />
            <div className="row m-0 hero_main">
                <div className="heading_container col-lg-4">
                    <h1 className="text-primary fw-bold text-center d-flex flex-column align-items-start ">
                        {/* Create your profile, seek for your training cours with
                        Leansoft company online */}
                        Internship
                    </h1>
                </div>
                <div className="bg_container col-lg-8">
                    {/* <img src={heroImg} alt="Hero section backgound"/> */}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
