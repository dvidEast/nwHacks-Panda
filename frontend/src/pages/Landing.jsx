import { useState } from 'react'
import { Link } from "react-router-dom"

import "../styles/Landing.css"
import redPanda from "../assets/red_panda.png"

export default function Landing() {
    const [inputValue, setInputValue] = useState(0);
    
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
                    <h2 id='slide'>Boost Productivity + <br />Reduce Anxiety =<br />Opportunity.</h2>
                    <p id='slide'>An innovative solution to screen time and procrastination, using camera-tracking technology
                    to keep you focused on the task at hand.

                    </p>

                    <p id='slide'>Input your phone number and get started today!</p>
                    <div id='slide' className="start-container">
                        <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='xxx  xxx  xxxx'className="starting-input" />
                        <Link 
                        // onClick={()=>sendNumberToMotion(Number(inputValue))} 
                        className="starting-link" to={`/home?number=${inputValue}`}>Starting Studying Now</Link>
                    </div>
                </div>

                <div className="right-side">
                    <img src={redPanda} alt="Logo" />
                </div>
            </section>
        </>
    )
}