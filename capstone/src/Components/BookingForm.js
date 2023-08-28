import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [guests, setGuests] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        props.SubmitForm(e)
    }

    const handleChangeDate = (e) => {
        setDate(e)
        props.dispatch(e)
    }

    const handleChangeFirstName = (e) => {
        setFirstName(e)
        props.dispatch(e)
    }

    const handleChangeLastName = (e) => {
        setLastName(e)
        props.dispatch(e)
    }

    const handleChangeGuests = (e) => {
        setGuests(e)
        props.dispatch(e)
    }

    const handleChangeEmail = (e) => {
        setEmail(e)
        props.dispatch(e)
    }
    const handleChangePhone = (e) => {
        setPhone(e)
        props.dispatch(e)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <div>
                        <label htmlFor="book-first-name">First Name :</label>
                        <input type="text" id="firstName" name="firstName" placeholder="John" value={firstName} onChange={(e) => handleChangeFirstName(e.target.value)} required />
                        <label className="required"> * </label>
                    </div>
                    <div>
                        <label htmlFor="book-last-name">Last Name :</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Smith" value={lastName} onChange={(e) => handleChangeLastName(e.target.value)} required />
                        <label className="required"> * </label>
                    </div>
                    <div>
                        <label htmlFor="book-date">Choose date :</label>
                        <input id="date" value={date} onChange={(e) => handleChangeDate(e.target.value)} type="date" required/>
                        <label className="required"> * </label>
                    </div>
                    <div>
                        <label htmlFor="book-time">Choose Time :</label>
                        <select id="time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                            <option value="">Select a time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        <label className="required"> * </label>
                    </div>
                    <div>
                        <label htmlFor="book-guests">Number of Guests :</label>
                        <input id="number" type="number" value={guests} min="1" max="10" onChange={(e) => handleChangeGuests(e.target.value)} />
                        <label className="required"> * </label>
                    </div>
                    <div>
                        <label htmlFor="book-email">Email Address :</label>
                        <input id="email" type="email" placeholder="JohnSmith@email.com" value={email} onChange={(e) => handleChangeEmail(e.target.value)} required/>
                        <label className="required"> * </label>
                    </div>
                    <div>
                        <label htmlFor="book-phone">Phone Number :</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-4567-8901"value={phone} onChange={(e) => handleChangePhone(e.target.value)} />
                        <label className="optional">(Optional)</label>
                    </div>
                    <div>
                        <input className="submitBtn" type="submit" value={"Make your reservation"} />
                    </div>
                </fieldset>
            </form>
        </>
    )

}


export default BookingForm
