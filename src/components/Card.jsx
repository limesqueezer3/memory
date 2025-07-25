import '../styles/Card.css'

export function Card ({id, guessed, handleCardChange}) {
    return (
        <>     
            <div onClick={() => handleCardChange({id: id, guessed: guessed})} className='card'>{id}, {guessed ? <>guessed</> : <>notGuessed</>}</div>
        </>
    )
}
