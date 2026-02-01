import './App.css'
import Header from './component/Header'
import Product from './pages/Product'
import puzle from "./Images/joey-f-5dlPE_2DZMw-unsplash.jpg"



function App() {
 
  return (
    <>
      <Header title='XTEXT'/>
      <Product  title='Complete React Course' description='Learn to build with typeScript' images={[{src: puzle , alt:"tech Image"}]} price={12.34} />
    </>
  )
}

export default App
