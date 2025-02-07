import './App.css'
import Swal from 'sweetalert2'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import RegisterPage from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    <RegisterPage/>
    <Login/>
    <Footer/>
    </>
  )
}

export default App