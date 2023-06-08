import { useCallback, useEffect, useState } from 'react'
import useProcessing from './useProcessing'

export default function useStarWars(){
    const { processing, startProcessing, endProcessing } = useProcessing()
    const [characters, setCharacters] = useState<any[]>([])
    const [character, setCharacter] = useState<any>([])
    const [movie, setMovie] = useState<any>([])
    
    const getMovies = useCallback(async function (character: any) {
        if(!character?.films?.length) return
        try {
            startProcessing()
            const requests = character.films.map(async (film: string) => {
                const response = await fetch(film)
                return response.json()
            })
            const movies = await Promise.all(requests)
            setMovie(movies)
            console.log(movies)
        }finally {
            endProcessing()
        }
    
    }, [startProcessing, endProcessing])

    const getCharacters = useCallback(async function () {
        try {
            // console.log('getCharacters') DDOS na api
            startProcessing()
            const response = await fetch('https://swapi.dev/api/people')
            const data = await response.json()
            setCharacters(data.results)
        } finally {
            endProcessing()
        }    
    }, [startProcessing, endProcessing])

    function selectedCharacter(character: any){
        setCharacter(character)
        console.log(character.name)
    }

    function back(){
        setCharacter(null)
        setMovie([])
    }

    useEffect(() => {
        getCharacters()
    },[getCharacters])

    useEffect(() => {
        getMovies(character)
    }, [character, getMovies])

    return {
        characters,
        // getCharacters,
        processing,
        movie,
        selectedCharacter,
        back
    }
}
//dependecias exaurtivas...
/* no modo build imprime um warning sobre o array de dependencias do useEffect dizendo que esse useEffect depende de uma função chamada getCharacters, mas essa função não é definida como dependencia do useEffect, então o useEffect não será atualizado quando getCharacters mudar, 
(DAI PASSEI A FUNÇÃO PARA DENTRO DO ARRAY DE DEPENDENCIAS ) - SURGIU OUTRO ERRO
para resolver isso, basta adicionar getCharacters como dependencia do useEffect, mas isso não é uma boa prática, pois o useEffect vai ser executado toda vez que getCharacters mudar, e isso não é o que queremos, pois getCharacters não muda, então não precisamos executar o useEffect toda vez que getCharacters mudar, para resolver isso, basta usar o useCallback, que vai retornar uma função que não muda, e essa função é a getCharacters, então o useEffect vai ser executado apenas uma vez, quando o componente for montado, e não toda vez que getCharacters mudar, pois getCharacters não muda, e o useCallback vai retornar a mesma função sempre, então o useEffect não vai ser executado toda vez que getCharacters mudar, pois getCharacters não muda 
*/