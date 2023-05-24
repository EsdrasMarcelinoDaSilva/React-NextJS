import { useState } from "react"

export default function useProcessing(){
const [processing, setProcessing] = useState<boolean>(false)

    function startProcessing(){ //função deveria ser criada com useCallback
        setProcessing(true)
    }
    function endProcessing(){ //função deveria ser criada com useCallback
        setProcessing(false)
    }

    return {
        processing,
        startProcessing,
        endProcessing
    }
}
//toda vez que meu hook é chamado essas funções são recriadas!
//por isso o use correto delas seria com useCallback ou seja o useCallback
//vai armazenar minhas funções e não deixara ela ser recriada a cada chamada
//do meu hook. 