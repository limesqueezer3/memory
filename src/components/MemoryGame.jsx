import { useState } from 'react'
import '../styles/MemoryGame.css'
import {Card} from './Card.jsx'

const initCards = []
for (let i = 1; i< 11; i++) {
        initCards.push({id: i, guessed: false});
    }

export function MemoryGame () {
    
    const [cards, setCards] = useState(initCards)
    const [bestScore, setBestScore] = useState(0)

    const guessedCount = cards.filter(card => card.guessed).length;

    const shuffleList = (array) => {
        array.sort(() => Math.random() - 0.5);
    };
    shuffleList(cards)

    const handleCardChange = ({id, guessed}) => {
        if (guessed) {
            if (bestScore < guessedCount) {
                setBestScore(guessedCount)
            }
            setCards(
                cards.map(card => {
                    return {...card, guessed: false}
                    }
                )
            )
        } else {
            setCards(
                cards.map(card => {
                    return card.id == id ? {id: id, guessed: true} : card;
                   }
                )
            )
        }
    }

    return (
    <> 
    <h2>Counter: {guessedCount}, Best Score: {bestScore}</h2>
    <div className='card-holder'>
    {cards.map(card => (
        <Card 
        key={card.id}
        id={card.id}
        guessed={card.guessed}
        handleCardChange={handleCardChange}
        />
    ))}
    </div>
    </>
    )
}