import { IconCheck } from "@tabler/icons-react"

interface ChacacterProps {
    characters: any[]
    selected: (character: any) => void
}

export default function Characters(props: ChacacterProps){

    return (
        <table className="w-3/5 text-xl opacity-80 rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-zinc-700">
                    <th className="p-2 font-black">Heigth</th>
                    <th className="p-2 font-black">Weight</th>
                    <th className="p-2 font-black">Name</th>
                    <th className="p-2 font-black">Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.characters.map((character: any, indice: number) => (
                    <tr key={character.name}
                        className={`
                        ${indice % 2 === 0 ? 'bg-zinc-500' : 'bg-zinc-600'}
                        `}
                    >
                        <td className="text-center" style={{fontSize: "1.125rem"}}>{character.name}</td> 
                        <td className="text-center" style={{fontSize: "1.125rem"}}>{character.height}</td> 
                        <td className="text-center" style={{fontSize: "1.125rem"}}>{character.mass}</td> 
                        <td className="text-center" style={{fontSize: "1.125rem"}}>
                            <button className="button" onClick={() => props.selected(character)}>
                                <IconCheck size={20} />
                            </button> 
                        </td> 
                    </tr>
                ))}
            </tbody>
        </table>
    )
}