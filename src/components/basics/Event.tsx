console.log('EVENTOS')
console.log('CADA COMPONENTE EVOLUINDO DE FORMA DIFERENTE')
export default function Event(){
    let counter = 0
    function increment(){
        console.log(counter++)
    }
    return (         
        <button className={`
            flex justify-center items-center
                h-64 w-64 bg-lime-600 text-4xl text-white
            `} onClick={increment}> 
                Event
        </button>
    )
}
// comecei com a tag <div> troquei para button nada alterou tailwind zera conf default 
