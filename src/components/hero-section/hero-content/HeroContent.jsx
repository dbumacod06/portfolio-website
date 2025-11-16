import "./HeroContent.css";
import DownloadIcon from "/logos/misc/personal-download.png"
import LinkedinIcon from "/logos/misc/personal-linkedin.png"
import EmailIcon from "/logos/misc/personal-email.png"
import PinIcon from "/logos/misc/pin.png"
import { useState } from 'react';


function HeroContent() {  
    const [displayedHero, setDisplayedHero] = useState("hero-introduction")
    const [pinned, setPinned] = useState(false)
    const handleMouseEnter = () => {
        setDisplayedHero("hero-details");
    };

    const handleMouseLeave = () => {
        if (!pinned) {
            setDisplayedHero("hero-introduction");
        }
    };
    const handleButtonClick = () => {
        setPinned(prev => !prev)
        setDisplayedHero("hero-details");
    }

    const getResume = () => {
        document.getElementById("downloadResume").click()
    }

    const linkedinRedirect = () => {
        // document.getElementById("linkedinRedirect").click()
        window.open("https://www.linkedin.com/in/dhoby-bumacod-2aa8411b3/", "_blank")
    }

    const copyEmail = () => {
        const text = "dsfbumacod06@gmail.com";
        const msgEl = document.getElementById("copy-msg")
        navigator.clipboard.writeText(text)
            .then(() => {
                msgEl.classList.add("show")
                setTimeout(() => {
                msgEl.classList.remove("show")
                }, 800); // match half the CSS transition
            })
            .catch(err => {
            console.error("Failed to copy: ", err);
            });
    }

    return (
        <div className={`hero-content ${pinned ? "locked" : ""}`}
        >
            <p className="intro">Hi, nice to meet you, I'm</p>
            <div className="toggling-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className={`hero-introduction  ${displayedHero === "hero-introduction" ? "show-content" : "hide-content"}`}
                            >
                    <p className="full-name">Dhoby Schon Fitz Bumacod</p>
                    <p className="one-liner">
                        Using problem-solving skills to achieve efficient and optimized software solutions that drive real business impact. 
                    </p>
                </div>
                <div className={`hero-details  ${displayedHero === "hero-details" ? "show-content" : "hide-content"}`}
                >
                    <p className="content">
                        Dhoby, feel free to address me as such. I've always considered myself as a passionate problem-solver, and I'd like to think being a Software Engineer is just an extension of it. I take pleasure in solving complex problems, overcoming challenges, and tinkering around all possible solutions, and  find fulfillment in finding out the best, and optimized approach for resolution. 
                        <br/><br/>
                        Feel free to connect with me through the resources below. I'm looking forward to knowing you!
                    </p>
                    <button 
                    className="pin-content"
                    onClick={handleButtonClick}
                    ><img src={PinIcon} alt="pin-icon" /></button>
                </div>
            </div>

            
            <div className="hero-connect">
                <a id="downloadResume" 
                    href="files/Bumacod_CV2025.pdf" 
                    download="Bumacod_CV2025.pdf" 
                    >    
                </a>
                <button 
                className="download-resume"
                onClick={getResume}
                >
                    Resume
                    <img src={DownloadIcon} alt="download" />
                </button>
                <button 
                className="redirect-linkedin"
                onClick={linkedinRedirect}
                >
                    <img src={LinkedinIcon} alt="linkedin" />
                </button>
                <button 
                className="copy-email"
                onClick={copyEmail}
                >
                    <img src={EmailIcon} alt="email" />
                </button>
                <p className="copy-message" id="copy-msg">
                    Email Copied!
                </p>
            </div>

        </div>
  );
}
export default HeroContent;