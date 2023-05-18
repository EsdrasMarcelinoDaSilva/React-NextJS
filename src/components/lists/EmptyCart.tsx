import { IconCircleX } from "@tabler/icons-react"

export default function EmptyCart(){
    return (
        <div className="flex gap-2 justify-center">
            <IconCircleX />
            <span>No items in cart</span>
        </div>

    )
}