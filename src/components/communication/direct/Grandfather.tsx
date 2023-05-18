import Father from "./Father"

interface GrandfatherProps {
    name: string
    surname: string
}
export default function Grandfather(props: GrandfatherProps){
    return (
        <div className={`
            flex flex-col gap-5 p-5 bg-purple-500 rounded-md
            text-white border border-white
        `}>
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-black text-black">Grandfather</span>
                <span>{props.name}</span>
                <span>{props.surname}</span>
            </div>
            <div className="flex gap-5">
                <Father name="Tarciso" surname={props.surname} />
                <Father name="Tiba" surname={props.surname} />
                {/* <Father name="Tiozé" surname={props.surname} /> */}
            </div>
        </div>
    )
}