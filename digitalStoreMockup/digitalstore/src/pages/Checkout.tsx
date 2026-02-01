import ProductCard from "../component/ProductCard"
import { Products } from '../types'

type Props = {
     product: Products
}

const Checkout = ({product}: Props) => {
  return (
    <div>
        <ProductCard product={product}/>
    </div>
  )
}

export default Checkout