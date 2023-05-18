interface TableSerieProps {
    teams: string[]
}

export default function ListSerieA(props: TableSerieProps){
    
    // console.log(props.teams)

//<------------primeira forma de fazer------------>

    // const items: any[] = []

    // for(let i = 0; i < props.teams.length; i++){
    //     // console.log(props.teams[i])
    //     items.push((
    //         <li className="text-xl list-decimal" 
    //         key={props.teams[i]}>
    //             {props.teams[i]}
    //         </li>
    //     ))
    // }
//<-----------segunda forma de fazer--------------> 

    const items2 = props.teams.map((team, i ) =>{
        return (
            <li key={team} 
            className={`text-xl list-decimal 
            ${i % 2 === 0 ? 'text-blue-500' : 'text-yellow-500'}`}
            >
                {team}
            </li>
        )
    })

//<-----------terceira forma de fazer--------------> 

    return (          
        <ol>
            {/* {items2}  */}
            {props.teams.map((team, i) =>{
                return (
                    <li key={team} 
                        className={`text-xl list-decimal 
                        ${i % 2 === 0 ? 'text-blue-500' : 'text-yellow-500'}`}
                    >
                        {team}
                    </li>
                )
            })}
        </ol>
    )
}

