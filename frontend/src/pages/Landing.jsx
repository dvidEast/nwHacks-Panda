import { Link } from "react-router-dom"
import "../styles/Landing.css"

export default function Landing() {
    return(
        <div id="landing-body"> 
            <video autoPlay loop>
                <source src='frontend/public/home.mp4'/>
            </video>
            <nav className="navbar">
                <h1>This is the landing page</h1>
                <img src="" alt="" />
                <a href="section1">Section 1</a>
                <a href="section2">Section 2</a>
            </nav>
            <Link to="/home">Get Started</Link>
        </div>
    )
}