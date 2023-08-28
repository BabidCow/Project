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
            <Card img="greek salad.jpg" alt="greek salad photo" title="Greek Salad - 7.99" desc='Our Salads are made with the top quality vegetables and in house dressings. Served with our homemade dressings.' />
            <Card img="bruchetta.svg" alt="bruchetta photo" title="Bruchetta -7.99" desc="Garlic herb crostinis topped with ripe, diced Roma tomatoes, fresh sweet basil and extra virgin olive oil." />
            <Card img="lemon dessert.jpg" alt="lemon dessert photo" title="Lemon Dessert -15.99" desc="A thick, creamy lemon cheesecake filling baked into a Graham cracker crust, topped with homemade lemon curd." />
        </div>
    )
}

export default Specials