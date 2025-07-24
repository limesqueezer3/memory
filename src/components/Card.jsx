import '../styles/Card.css'

export function Card ({id, guessed, handleCardChange}) {
    return (
        <>     
            <div onClick={() =>handleCardChange({id: id, guessed: true})} className='card'>{id}, {guessed ? <h1>guessed</h1> : <>notGuessed</>}</div>
        </>
    )
}
