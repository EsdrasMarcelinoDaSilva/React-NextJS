interface CircleProps {
    text: string
    almostPerfect?: boolean  // interrogação para não obrigatorio
}

export default function Circle(props: CircleProps){
    console.log(props)
    return (
        <div className={`
            flex justify-center items-center
            h-64 w-64 bg-cyan-500 
            text-3xl font-black
            ${props.almostPerfect ? 'rounded-2xl' : 'rounded-full'}
        `}>
            {props.text}
        </div>
    )
}