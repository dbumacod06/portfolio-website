import "./MainMenu.css";

function MainMenu()   {
    return (
        <section className="main-menu">
            <div className="author-name">
                <span className="fname">dhoby</span> 
                <span className="lname">bumacod</span>
            </div>
            <nav className="main-nav">
                <ul className="main-options">
                    <li className="option"><a href="index.html">Home</a></li>
                    <li className="option"><a href="#">Projects</a></li>
                    <li className="option" id="chronicles-option"><a href="colleage-page.html">
                        <span className="fword">Colleague</span>
                        <span className="lword">Chronicles</span>
                    </a></li>
                    <li className="option"><a href="#">Resume</a></li>
                </ul>
            </nav>
        </section>
    
    )
}

export default MainMenu;