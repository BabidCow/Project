function Card(props) {
return (
    <div className="card">
        <div className="cardBody">
            <img className="cardImg" src={props.img} />
            <h2 className="cardTitle">{props.title}</h2>
            <p className="cardDescription">{props.desc}</p>
            <button className="cardBtn">Add to Order</button>
        </div>
    </div>
    )
}

function Specials() {
    return (
        <div className="wrapper">
            <Card img="greek salad.jpg" title="Greek Salad" />
            <Card img="bruchetta.svg" title="Bruchetta" />
            <Card img="lemon dessert.jpg" title="Lemon Dessert" />
        </div>
    )
}

export default Specials