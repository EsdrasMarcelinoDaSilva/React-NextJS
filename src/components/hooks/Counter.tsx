import React, {useCallback, useEffect, useState} from "react"

export default function Counter() {
    const[delta, setDelta] = useState(1)
    const [value, setValue] = useState(0)
    const [multiply, setMultiply] = useState(0)

    console.log("rendered...", value)

    // const multiply = value * 10

    const calculateValue = useCallback((value: number) => { //ou passando o value: number por parametro ou usando o value do estado para dentro do array de dependencias
        return value * 10
    },[])

    // console.log("function calculateValue was raised...")
    // function calculateValue(){  // terceira parte criando essa função
    //     return value * 10      // executando useEffect de forma desnecessaria para resolver isso criarei a useCallback na linha 12
    // }

    useEffect(() => {
        console.log("Executed useEffect...")
        const multiply = calculateValue(value)
        setMultiply(value * 10)
    },[value, calculateValue]) 

    // useEffect(() => {
    //     console.log(`multiply changed to ${multiply}`)// quarta comentando esse useEffect
    //     // setValue(value + 1)
    // },[multiply])

    return (
        <div className="flex flex-col items-center gap-5 bg-zinc-500 text-white p-3">
            <span className="text-5xl">{value}</span>
            <span className="text-xl text-zinc-700">{multiply}</span>
            <span className="text-sm text-zinc-700">{delta}</span>
            <div className="flex gap-5">
                <button className="button"
                onClick={() => setValue(value - delta)}// antes era 1
                >-1</button>
                <button className="button"
                onClick={() =>  setValue(newValue => newValue + delta)}// antes era 1
                >+1</button>
            </div>
            <input type="number"
            value={delta}
            onChange={e => setDelta(+e.target.value)}
            className="bg-zinc-700 px-2"
            />
        </div>
    )
}

/* line 6 uma nova renderização causa uma chama na funçãoou seja o estado mudou uma nova renderização acontece na tela

Line 42 uma closure (newValue) é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, closures são criadas toda vez que uma função é criada, em tempo de criação da função.

obs: se o valor do estado depende do estado anterior, é melhor usar a função de atualização do estado, pois ela recebe o valor anterior como parâmetro.

para mostrar um outro valor que deriva de uma estado que ja existe eu naõ preciso criar um novo estado para isso no caso seria na linha 5 eu posso simplesmente criar uma constante

as vezes um componente renderiza mais de uma vez e isso pode ser um problema, por exemplo se eu tiver uma requisição http e eu quiser que ela seja feita apenas uma vez, eu não quero que ela seja feita toda vez que o componente renderizar, eu quero que ela seja feita apenas uma vez, e para isso eu posso usar o useEffect
(tambem modifiquei no StrictMode para false para renderizar apenas uma vez) 

line 13 sem o array de dependencias o useEffect é executado toda vez que o componente renderiza(loop infinito), com o array de dependencias vazio o useEffect é executado apenas uma vez, quando o componente é montado
tambem se passar dentro do array de dependencias o valor do estado, o useEffect é executado toda vez que o valor do estado mudar(loop infinito)
-----------------------------------------------------------------------------------------------------
agora sim irei criar um outro estado para mostrar o uso do useEffect na linha 5

na line 16 estou criando um outro useEffect para monitorarpor exemplo as mudanças do estado multiply

outra cena de loop infinito aconteceria caso eu chamasse o setValue dentro do segundo useEffect com o array de dependecias com o multiply dentro dele

por ultimo a função calculateValue que estava sendo craida a cada nova renderização agora esta sendo armazenada no useCallback para que ela seja criada apenas uma vez e não a cada nova renderização

*/