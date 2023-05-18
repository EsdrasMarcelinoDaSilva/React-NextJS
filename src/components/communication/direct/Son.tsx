    
interface SonProps {
    name: string
    surname: string
}
export default function Son(props:  SonProps) {
    return (
        <div className={`
            flex justify-center items-center
            bg-green-500 rounded-md p-2
            border border-white
        `}>
             <div className="flex justify-center gap-2 text-xl">
                <span className="font-black text-black">Son</span>
                <span>{props.name}</span>
                <span>{props.surname}</span>
            </div>
        </div>
    )
}