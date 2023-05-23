import { useState } from 'react'
import useProcessing from './useProcessing'

export default function useStarWars(){
    const { processing, startProcessing, endProcessing } = useProcessing()
    const [characters, setCharacters] = useState<any>([])

    async function getCharacters(){
        try {
            startProcessing()
            const response = await fetch('https://swapi.dev/api/people')
            const data = await response.json()
            setCharacters(data.results)
        } finally {
            endProcessing()
        }    
    }
    return {
        characters,
        getCharacters,
        processing,
    }
}