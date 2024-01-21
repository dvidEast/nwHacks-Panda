import { Link } from "react-router-dom"

import "../styles/Landing.css"

export default function Landing() {
    return(
        <div> 
            {/* <video>
                <source src="/nwHacks-Panda/frontend/public/video720.mp4" type="video/mp4" />
            </video> */}
            <nav className="navbar">
                <p className="nav-logo">pandAI</p>
                <div className='nav-links'>
                    <a href="section1">Section 1</a>
                    <a href="section2">Section 2</a>
                    <video id="video"></video>
                </div>
            </nav>

            <section id="landing-body"> 
                <h2>Boost Productivity +<br />Reduce Anxiety =<br />Opportunity.</h2>
                <p>using hand tracking computer vision technology, we created an artificially intelligent
                   study companion to help reduce the amount of time spent on our phones, and away from 
                   building our future careers!
                </p>
                <div>
                    <Link className="starting-link" to="/home">Starting Studying Now</Link>
                </div>
            </section>
        </div>
    )
}