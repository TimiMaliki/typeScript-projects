import ProductCard from "../component/ProductCard"
import { Products } from '../types'

type Props = {
     product: Products
}

const Checkout = ({product}: Props) => {
  return (
    <div className='flex container mt-12 border border-black/50'>
        <ProductCard product={product}/>
    </div>
  )
}

export default Checkout