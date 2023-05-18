import Circle from "@/components/basics/Circle";

export default function CirclePage(){
    return (
        <div className="flex justify-around items-center h-screen"> 
            <Circle text="Cicle #1" almostPerfect={false}/>   
            <Circle text="Cicle #2"/>
            <Circle text="Cicle #3" almostPerfect/>
            <Circle text="Cicle #4"/>
        </div>
    )
}
// text é obrigatorio 