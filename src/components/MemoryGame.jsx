import { useState } from 'react'
import '../styles/MemoryGame.css'
import {Card} from './Card.jsx'



export function MemoryGame () {
    const initCards = []
    for (let i = 1; i< 11; i++) {
            initCards.push({number: i, guessed: false});
        }
    const [cards, setCards] = useState(initCards)
    const guessedCount = cards.filter(card => card.guessed).length;

    return (
    <> 
    <h2>Counter: {guessedCount}</h2>
    <div className='card-holder'>
    {cards.map(card => (
        <Card 
        number={card.number}
        guessed={card.guessed} />
    ))}
    </div>
    </>
    )
}