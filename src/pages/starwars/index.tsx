import Characters from "@/components/starwars/Characters";
import useStarWars from "@/customHooks/useStarWars";
import Background from "@/components/starwars/Background";
import Movies from "@/components/starwars/Movies";

export default function StarWarsPage(){ 
    const { processing, characters, selectedCharacter, movie, back } = useStarWars() //<--hook personalizado-->// 

    return (
        <div className="flex flex-col gap-5 justify-center 
        font-bold relative
        items-center h-screen">
            <Background />

            {/* <button onClick={getCharacters} className="bg-blue-500 p-2">
                Obter                
            </button> */}
            
            {processing ? (
                <div>Processing...</div>
            ) : movie.length > 0 ? (
                <Movies movies={movie} back={back}/>
            ) : characters.length > 0 ? (
                <Characters characters={characters} selected={selectedCharacter}/>
            ) : (
                <h1>No characters found</h1>
            )}
        </div>
    )
}


// hooks é a forma de trabalhar a parte de estado ou de trazer alguns comportamentos que so estavam presentes em componentes baseados em classes para dentro de componentes baseados em funções
// line 6 antes entre as chaves eu chamava a função getCharacters, mas agora eu chamo o hook personalizado que eu criei
// line 14-16 eliminei o botão para a função getCharacters, para a bubscar ser automática