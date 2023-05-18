import ItemCart from "@/model/ItemCart"
import Coin from "@/utilities/Coin"
export default function ShoppingCart(props: ItemCart){

    return  (
        <div className={`
            flex items-center gap-2 rounded-full 
            text-white bg-blue-500
        `}>
            <span className={`flex justify-center items-center
            w-7 h-7 rounded-full p-2 bg-blue-700`}>
                {props.amount}
            </span>
            <span>
                {props.product.name}
            </span>
            <span className="pr-5">
                {Coin.FormatCoin(props.product.price * props.amount)}
                {/* {props.product.price * props.amount}  */}
            </span>
        </div>
    )
}