import Promotions from "@/components/lists/Promotion"
import products from "@/constants/Products"
import ItemCart from "@/model/ItemCart"
import { useState } from "react"
import { Product } from "@/model/Product"
import Cart from "@/components/lists/Cart"


export default function ProductsPage(){
    
    const [items, setItems] = useState<ItemCart[]>([])

    function addProduct(product: Product){                                    //<----item setado---->
        const currentItem = items.find((item) => item.product.id === product.id) ?? {amount:0, product}
        // manipulação dentro do proprio item (não muito interessante)-> currentItem.amount++
        //clonado o item adicionando a quantidade
        const newItem = {...currentItem, amount: currentItem.amount+1}
        const othersItems = items.filter((item) => item.product.id !== product.id)
        setItems([...othersItems, newItem])   //setando outros itens
        // console.log(product)
    }

    return (
        <div className="">
            <div className={`flex flex-wrap flex-col gap-2 p-2
                justify-center items-center`}>
                <Cart items={items}/>
                <Promotions products={products} addBuy={addProduct}/>
            </div>
        </div>
    )
}