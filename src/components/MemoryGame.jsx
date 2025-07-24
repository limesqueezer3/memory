import { useState } from 'react'
import '../styles/MemoryGame.css'
import {Card} from './Card.jsx'

const initCards = []
for (let i = 1; i< 11; i++) {
        initCards.push({id: i, guessed: false});
    }

export function MemoryGame () {
    
    const [cards, setCards] = useState(initCards)
    const guessedCount = cards.filter(card => card.guessed).length;

    const handleCardChange = (nextCard) => {
        setCards(
            cards.map(card => {
                return card.id == nextCard.id ? nextCard : card;
            })
        )
    }

    return (
    <> 
    <h2>Counter: {guessedCount}</h2>
    <div className='card-holder'>
    {cards.map(card => (
        <Card 
        id={card.id}
        guessed={card.guessed}
        handleCardChange={handleCardChange}
        />
    ))}
    </div>
    </>
    )
}