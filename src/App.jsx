import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Home from './pages/Home'
import RegisterPage from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './components/Profile'
import CartProvider from './context/CartContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/pizza/p001' element={<Pizza/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App