import Characters from "@/components/starwars/Characters";
import useStarWars from "@/customHooks/useStarWars";
import Background from "@/components/starwars/Background";

export default function StarWarsPage(){ 
    const { processing, characters, getCharacters } = useStarWars() //<--hook personalizado-->//

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <Background />

            <button onClick={getCharacters} className="bg-blue-500 p-2">
                Obter
            </button>
            
            {processing ? (
                <div>Processing...</div>
            ) : characters.length > 0 ? (
                <Characters characters={characters}/>
            ) : (
                <h1>No characters found</h1>
            )}
        </div>
    )
}


// hooks é a forma de trabalhar a parte de estado ou de trazer alguns comportamentos que so estavam presentes em componentes baseados em classes para dentro de componentes baseados em funções

