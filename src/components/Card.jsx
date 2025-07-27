import '../styles/Card.css'

export function Card ({id, guessed, imgUrl, handleCardChange}) {
    return (
        <>   
            <div onClick={() => handleCardChange({id: id, guessed: guessed})} className='card'>
                <div >{id}, {guessed ? <>guessed</> : <>notGuessed</>}</div>
                <img src={imgUrl} />
            </div>  
        </>
    )
}
