import ProductsItems from "./ProductsItems"
import { Product } from "@/model/Product"

interface ListProductsProps{
    products: Product[]
    addBuy:(product: Product) => void

}

export default function Promotions(props: ListProductsProps){
    return (
        <div>
            <div className="flex flex-wrap gap-4">
                {props.products.map((product) => {
                    return <ProductsItems key={product.id} 
                    product={product}
                    addBuy={props.addBuy}
                    />
                })}
            </div>
        </div>
    )
}