function Card(props) {
return (
    <div className="card">
        <div className="cardBody">
            <img src={props.img} className="card__image"/>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.desc}</p>
            <button className="card__btn">Add to Order</button>
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