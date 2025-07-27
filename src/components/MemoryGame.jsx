import { useEffect, useState } from 'react'
import '../styles/MemoryGame.css'
import {Card} from './Card.jsx'
import { randomIntSet } from '../randomNumber.jsx'


const POKEMONAMOUNT = 7;
const MAXPOKEMONID = 493;
const initPokemonIdSet = randomIntSet(POKEMONAMOUNT, MAXPOKEMONID)
const initPokemonId = Array.from(initPokemonIdSet)
const initCards = []
for (let i = 0; i< POKEMONAMOUNT; i++) {
        initCards.push({id: initPokemonId[i], guessed: false, imgUrl: null});
    }

const getPokemonArt = async (entry) => {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(`${baseUrl}${entry}`, {mode: "cors"})
    const responseJson = await response.json()
    const artURL = responseJson["sprites"]["other"]["official-artwork"]["front_default"]
    return artURL
}     

export function MemoryGame () {
    useEffect(() => {
        const assignImageUrls = async () => {
            const updatedCards = await Promise.all(
                cards.map(async (card) => {
                    const artURL = await getPokemonArt(card.id);
                    return { ...card, imgUrl: artURL };
                })
            );
            setCards(updatedCards);
        };
        assignImageUrls();
    }, [])
    const [cards, setCards] = useState(initCards)
    const [bestScore, setBestScore] = useState(0)
    console.log(cards)
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
                    return card.id == id ? {...card, guessed: true} : card;
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
        imgUrl={card.imgUrl}
        handleCardChange={handleCardChange}
        />
    ))}
    </div>
    </>
    )
}