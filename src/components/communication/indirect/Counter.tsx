import Display from "./Display";
import Buttons from "./Buttons";
import { useState } from "react";

export default function Counter(){
    const [num, setNum] = useState<number>(0)

    function increment(value: number){
        setNum(num + value)
    }
    function decrement(value: number){
        setNum(num - value)
    }
    return (
        <div className={`
            flex flex-col border w-64 h-64
            border-zinc-400 rounded-lg p-2
        `}>
            <Display value={num}/>
            <Buttons inc={increment} dec={decrement}/>
        </div>
    )
}