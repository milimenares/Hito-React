import './App.css'
import Swal from 'sweetalert2'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import RegisterPage from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'
import Pizza from './components/Pizza'

const App = () => {
  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    {/* <RegisterPage/> */}
    {/* <Login/> */}
    {/* <Cart/> */}
    <Pizza/>
    <Footer/>
    </>
  )
}

export default App