import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import CartProvider from './context/CartContext'
import UserProvider from './context/UserContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Home from './pages/Home'
import RegisterPage from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './components/Profile'

const AppRoutes = () => {

  const { token, user } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={token && user.email === "test@test.com" ? <Profile/> : <Navigate to="/login"/>}/>
        <Route path='/pizza/:id' element={<Pizza/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )

}

const App = () => {

  return (
    <>
      <UserProvider>
        <CartProvider>
          <AppRoutes/>
        </CartProvider>
      </UserProvider>
    </>
  )
}

export default App