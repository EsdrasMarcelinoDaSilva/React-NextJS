import { useCallback, useState } from "react"

export default function useProcessing(){
const [processing, setProcessing] = useState<boolean>(false)

    const startProcessing = useCallback(() => { //função deveria ser criada com useCallback
        setProcessing(true)
    },[])

    const endProcessing = useCallback(() =>{ //função deveria ser criada com useCallback <-- dia 30/05
        setProcessing(false)
    },[])

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

//dia 02/06 atualizei as funções para serem criadas com useCallback