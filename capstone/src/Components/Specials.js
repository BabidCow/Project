function Card(props) {
return (
    <div className="card">
        <div className="cardBody">
            <img src={props.img} alt={props.alt} className="card__image"/>
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
            <Card img="greek salad.jpg" alt="greek salad photo" title="Greek Salad" />
            <Card img="bruchetta.svg" alt="bruchetta photo" title="Bruchetta" />
            <Card img="lemon dessert.jpg" alt="lemon dessert photo" title="Lemon Dessert" />
        </div>
    )
}

export default Specials