import '../styles/Card.css'

export function Card ({number, guessed}) {
    const onClick = ()

    return (
        <>     
            <div className='card'>{number}, {guessed ? <h1>guessed</h1> : <>notGuessed</>}</div>
        </>
    )
}
