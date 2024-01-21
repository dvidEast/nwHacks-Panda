import { Link } from "react-router-dom"

import "../styles/Landing.css"
import redPanda from "../assets/red_panda.png"

export default function Landing() {
    return(
        <>
            <nav className="navbar">
                <p className="nav-logo">pandAI</p>
                <div className='nav-links'>
                    <a href="section1">Section 1</a>
                    <a href="section2">Section 2</a>
                </div>
            </nav>

            <section id="landing-body"> 
                <div className="left-side">
                    <h2 id='slide'>Boost Productivity +<br />Reduce Anxiety =<br />Opportunity.</h2>
                    <p id='slide'>using hand tracking computer vision technology, we created an artificially intelligent
                    study companion to help reduce the amount of time spent on our phones, and work towards
                    building our future careers!
                    </p>

                    <p id='slide'>Input your phone number and start today!</p>
                    <div id='slide' className="start-container">
                        <input placeholder='xxx  xxx  xxxx'className="starting-input" type="text" />
                        <Link className="starting-link" to="/home">Starting Studying Now</Link>
                    </div>
                </div>

                <div className="right-side">
                    <img src={redPanda} alt="Logo" />
                </div>
            </section>
        </>
    )
}