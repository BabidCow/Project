function Card(props) {
    return (
        <div className="card2">
            <div>
                <img src="user.png" className="card2__image" alt="user photo"/>
                <h2 className="card2__reviewer">{props.reviewer}</h2>
                <p className="card2__quote">{props.quote}</p>
            </div>
        </div>
        )
    }

    function Specials() {
        return (
            <div className="wrapper">
                <Card reviewer="Nanci" quote="I cannot stop thinking about the greek salad from this place! I'll definitely be back" />
                <Card reviewer="Scott" quote="We came here for a night out but we were not expecting to be blown away by the food as much as we were" />
                <Card reviewer="Madeline" quote="This is the best place I've ever eaten at. The atmosphere and service were as good as the food. 10/10" />
                <Card reviewer="Phoebe" quote="Too Yummy. This is my new go-to spot" />
            </div>
        )
    }

    export default Specials