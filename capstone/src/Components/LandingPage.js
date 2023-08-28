import React from "react"
import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <div className="landing">
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <p className='description'>We are a family owned Mediterranean restaurant,<br/>
        focused on traditional recipes served <br/> with a modern twist<br/></p>
    <Link to="/booking"><button className="reserve">Reserve a table</button></Link>
    <img src="restauranfood.jpg" height="500px" width="380" alt="food"/>
    </div>
    )
}

export default LandingPage