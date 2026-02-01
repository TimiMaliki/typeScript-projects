import './App.css'
import Header from './component/Header'
import Product from './pages/Product'
import puzle from "./Images/joey-f-5dlPE_2DZMw-unsplash.jpg"
import { Routes, Route, Outlet,} from 'react-router-dom'
import Checkout from './pages/Checkout'


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
    <Route path="/" element={<Layout />}> </Route>
       <Route index path="/" element={
          <Product title='Complete Web Development Bundle' description='Learn to build websites with HTML, CSS, Javascript, React, Node, and Mongo' images={[{ src: puzle, alt: 'image' }]} price={12.99}/>
        } >
        </Route>
        <Route path="checkout" element={<Checkout />} />
        {/* <Route path="success" element={<Success />} /> */}
    </Routes>
  )
}

export default App
