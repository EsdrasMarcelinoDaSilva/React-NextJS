import Son from "./Son"

interface FatherProps {
    name: string
    surname: string
}

export default function Father(props: FatherProps) {
    return (
        <div className={`
            flex flex-col gap-5 bg-blue-500 text-white border border-white
            rounded-md p-5
        `}>
            <div className="flex justify-center gap-2 text-xl">
                <span className="font-black text-black">Father</span>
                <span>{props.name}</span>
                <span>{props.surname}</span>
            </div>
            <div className="flex gap-5">
                <Son name="Esdras" surname={props.surname} />
                <Son name="Elielton" surname={props.surname} />
                <Son name="Carlinhos" surname={props.surname} /> 
            </div>
        </div>
    )
}