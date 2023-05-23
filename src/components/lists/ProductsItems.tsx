import { Product } from "@/model/Product"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"
import Coin from "@/utilities/Coin"

interface ProductItemProps{
    product: Product
    addBuy: (product: Product) => void
}

export default function ProductsItems(props: ProductItemProps){
    const {product} = props
    return (
        <div className={`
            flex flex-col rounded-md 
            border border-zinc-600 p-1
        `}>
            <Image src={props.product.image}
            width={250} height={200} alt="product image"
            className="rounded-md"
            />
            <div className="flex flex-col p-2 gap-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl">{product.name}</div>
                    <div className="text-green-600 font-bold">{Coin.formatCoin(product.price)}</div>
                </div>
                <div>
                    <div className="">{product.describe}</div>
                </div>
                <div>
                    <button className="button flex justify-center gap-2 w-full"
                        onClick={() => props.addBuy(product)}>
                        <IconShoppingCart />
                        Buy
                    </button>
                </div>
            </div>
        </div>
    )
}