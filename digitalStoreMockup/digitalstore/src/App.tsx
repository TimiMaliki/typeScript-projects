import './App.css'
import Header from './component/Header'
import Product from './pages/Product'
import puzle from "./Images/joey-f-5dlPE_2DZMw-unsplash.jpg"
import { Routes, Route, Outlet,} from 'react-router-dom'
import Checkout from './pages/Checkout'
import PRODUCT from './productInfo'


function Layout() {
  return (
    <>
       <Header title='XTEXT'/>
      <Outlet />
    </>
  )
}
function App() {
 
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
       <Route index path="/" element={
          <Product title='Complete Web Development Bundle' description='Learn to build websites with HTML, CSS, Javascript, React, Node, and Mongo' images={[{ src: puzle, alt: 'image' }]} price={12.99}/>
        } >
        </Route>
        <Route path="/checkout" element={<Checkout product={PRODUCT}/>} />
        {/* <Route path="success" element={<Success />} /> */}
         </Route>
    </Routes>
  )
}

export default App
