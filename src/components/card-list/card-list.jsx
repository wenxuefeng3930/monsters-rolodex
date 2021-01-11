import { Card } from '../card/card';
import './card-list.sass';

export const CardList = props => {
    return (
        <div className='card-list'>
            {props.monsters.map(monster =>
                <Card
                    key={monster.id}
                    monster={monster}
                />
            )}
        </div>
    )
}
