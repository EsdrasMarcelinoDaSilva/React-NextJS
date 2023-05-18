import Image from "next/image"
import { useState } from "react"

// GERAR ESTADO PARA COMPONENTE

export default function RandomImage(){
    const [search, setSearch] = useState<string>('abstract') // 1° estado
    const [size, setSize] = useState<number>(300) // 2° estado
    const url = 'https://source.unsplash.com/featured/'

    function renderButton(value: string){
        return (
        <button className={`
            bg-blue-500 px-4 py-2 rounded-md text-white
        `} onClick={() => {
            setSearch(value)
            console.log(value)
        }}>
            {value}
        </button>
        )
    }

    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
            <div className="flex justify-center gap-7 mb-5 text-fuchsia-900 font-semibold">
                <span>{search}</span>
                <span>{size}x{size}</span>
            </div>
            <Image src={`${url}${size}x${size}?${search}`} width={300} height={300} alt="Image" />
            <div className="flex justify-between gap-5">
                {renderButton('abstract')}
                {renderButton('city')}
                {renderButton('person')}
            </div>
            <div>
                <input type="number" value={size} 
                className="bg-zinc-400 p-2 rounded-md text-emerald-800 outline-none font-semibold w-full"
                onChange={e =>{
                    setSize(+e.target.value) // com o sinal + convertendo para number 
                }}
                />
            </div>
            {/* Random image */}
        </div>
    )
}