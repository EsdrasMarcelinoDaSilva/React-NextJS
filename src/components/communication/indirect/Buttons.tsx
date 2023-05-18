interface ButtonsProps{
    inc: (value: number) => void
    dec: (value: number) => void
}
export default function Buttons(props: ButtonsProps) {
    return (
        <div className="flex justify-between pt-2 gap-2">
            <button className="button flex-1"
            onClick={() => props.dec(2)}>
                Dec: -2
            </button>
            <button className="button flex-1"
            onClick={() => props.inc(3)}>
                Inc: +3
            </button>
        </div>
    )
}