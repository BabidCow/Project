
function Footer() {

    return(
        <footer className="footer">
            <div className="container">
        <div className="column">
        <img src="Logo copy-cropped.png" alt="logo"/>
        <p>We are a family owned Mediterranean restaurant,<br/> focused on traditional recipes served with a modern twist.</p>
    </div>
    <div className="column">
        <h3>Important Links</h3>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </div>
    <div className="column" >
        <h3>Contact</h3>
        <ul>
            <li>Address: <br/> 111 Cityplace, USA</li>
            <li>Phone: <br/> +1 123 456 7890</li>
            <li>Email: <br/> littlelemon@email.com</li>
        </ul>
    </div>
    <div className="column">
        <h3>Socials</h3>
        <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">X</a></li>
        </ul>
    </div>
    </div>
</footer>
    )
}


export default Footer