interface DisplayProps{
    value: number
}
export default function Display(props: DisplayProps) {
    return (
        <div className={`
        flex justify-center items-center flex-1
        bg-zinc-800 text-5xl font-black rounded-md text-white p-5
        `}>
            {props.value}
        </div>
    )
}