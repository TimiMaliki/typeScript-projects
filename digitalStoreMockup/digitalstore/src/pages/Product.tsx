import { useNavigate } from "react-router-dom" 


 type Image = {
    src : string,
    alt : string
 }

type Props = {
    title: string,
    description : string,
    images: Image[] ,
    price?: number,
}


const Product = ({title,description,images}: Props) => {
    const navigate = useNavigate()

const handlePayClick = () => {
    navigate('./pages/Checkout')
}
  return (
     <div className="grid place-content-center">
        <div className='container  mt-10 border-l border-r border-b rounded grid grid-cols-3 place-content-center '>
      <img className="col-span-2" src={images[0].src} alt={images[0].alt} />
      <div className='col-span-2'>
        <h1 className='text-4xl font-bold border-b p-6'>{title}</h1>
        <div className="p-6">
          <p className='text-gray-900 pb-3'>{description}</p>
          <br></br>
        
        </div>
      </div>
      <div className='border-l p-6 flex flex-col'>
        <button  onClick={handlePayClick} className='bg-indigo-500 text-white hover:bg-indigo-600 font-bold rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] focus:outline-none border-gray-900 hover:border-gray-900 border-2 cursor-pointer p-3'>Buy now</button>
      </div>
    </div>
     </div>
  )
}

export default Product
