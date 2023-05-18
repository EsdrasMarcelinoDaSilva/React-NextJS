import { useState } from "react"
import If from "./If"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import IfElse from "./IfElse"

interface TextProps {
    index: number
    question: string
    response: string
    open: boolean
    toggle: (index: number) => void

}

export default function Question(props: TextProps) {
    // const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={`border border-black rounded-md overflow-hidden`}>
            <div 
                className="bg-zinc-900 text-white 
                p-5 cursor-pointer select-none flex justify-between"
                onClick={() => props.toggle(props.index)}
            >
                <span>{props.question}</span>
                <IfElse test={props.open}>
                    <IconChevronUp />
                    <IconChevronDown/>
                </IfElse>
                {/* {open ? <IconChevronUp /> : <IconChevronDown />} */}
            </div>
            <If test={props.open}>
                <div className="p-5  select-none">
                    {props.response}
                </div>
            </If>
            {/* {open && (
                <div className="p-5  select-none">
                {props.response}
                </div>
            )} */}
            {/* {open && "open"} */}
            {/* {open ? "yes" : "no"} */}
        </div>
    )
}