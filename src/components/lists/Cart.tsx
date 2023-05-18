import ItemCart from "@/model/ItemCart";
import ShoppingCart from "./ShoppingCart";
import EmptyCart from "./EmptyCart"
import Coin from "@/utilities/Coin";

interface CartProps{
    items: ItemCart[]
}

export default function Cart(props:CartProps){
    const total = props.items.reduce((sum, item) => {
        return sum + item.amount * item.product.price 
    },0)

    return (
        <div className="flex flex-col w-[100%] sticky top-0 left-0
            border border-zinc-600 rounded-md">
            <div className="flex justify-between bg-zinc-800 text-3xl 
            text-yellow-500 p-3">
                <span>Cart</span>
                <span>{Coin.FormatCoin(total)}</span>
            </div>
            <div className="flex flex-wrap gap-5 p-2 text-zinc-600">
                {props.items.length === 0 ? (
                    <EmptyCart/>
                ) : (
                    props.items.map((item, i) =>{
                        return(
                            <ShoppingCart key={i} {...item}/>
                        )
                    })
                )}
                {}
            </div>
        </div>
    )
}