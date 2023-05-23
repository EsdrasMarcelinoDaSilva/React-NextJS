interface ChacacterProps {
    characters: any[]
}

export default function Characters(props: ChacacterProps){
    
    return(
        <div>
            <ul>
            {props.characters.map((character: any) => (
                <li key={character.name}>{character.name}</li>
            ))}
            </ul>
        </div>
    )
}