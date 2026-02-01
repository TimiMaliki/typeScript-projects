import { Products } from '../types'
type Props = {
  product: Products
}

const ProductCard = ({product}: Props) => {
  return (
    <div className='border rounded px-6 py-8 flex items-start h-min'>
      <div className='w-25 h-17.5'><img src={product.image} alt={`${product.title} image`} /></div>
      <div className='grow flex flex-col'>
        <div className='pl-4'>
          <h3 className='text-2xl font-bold'>{product.title}</h3>
          <p className='text-gray-900'>{product.description}</p>
        </div>
      </div>
      <div><p>${product.price}</p></div>
    </div>
  )
}

export default ProductCard