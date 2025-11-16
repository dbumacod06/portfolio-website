import HeroContent from "./hero-content/HeroContent.jsx";
import HeroProfile from "./hero-profile/HeroProfile.jsx";
import "./Hero.css";

function Hero() {
    return( 
        <section className="hero-section">
            <HeroContent />
            <HeroProfile />
        </section>
    )
}

export default Hero