import { Card } from '../card/card';
import './card-list.sass';

export const CardList = props => {
    return (
        <>
            {
                props.monsters.length === 0 ? (
                    <div className='card-notfound'>
                        <h2>☹️ No monster found</h2>
                    </div>
                ) : (
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
        </>
    )
}
