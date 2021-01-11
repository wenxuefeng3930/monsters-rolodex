import './card.sass';

export const Card = props => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set5`} alt={`Monster-${props.monster.id}`}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}
