import "./HeroProfile.css";


function HeroProfile() {  return (
    <div className="hero-photos">
        <img src="/images/profiles/p1-square.jpeg" alt="professional" className="professional"/>
        <img src="/images/profiles/p2-square.jpeg" alt="casual" className="casual"/>
        <img src="/images/profiles/p3-square.jpeg" alt="sporty" className="sporty"/>
        <img src="/logos/misc/splat.png" alt="splat-bg" className="background" />
    </div>
  );
}
export default HeroProfile;