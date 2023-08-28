import React from "react";
import { Link } from "react-router-dom"

const ConfirmBooking = () => {
    return (
        <div className="confirm">
                <h1> Your booking has been confirmed!</h1>
                <p>We look forward to serving you!</p>
                <p>An email will be sent to you to confirm the details of your reservation</p>
                <Link to="/"><button className="reserve">Back to Home</button></Link>
        </div>
    )
}

export default ConfirmBooking