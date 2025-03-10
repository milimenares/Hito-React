import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.png'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Navigation = () => {

  const { calcularTotal } = useContext(CartContext)

    const token = false;

    return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/' className='brand'>Pizzería<Image src={Logo} className='img-fluid logo ms-2 mb-xxl-1'/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            { token ? (
                <>
                <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                </>
            ) : (
                <>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                </>
            )}
            <Link to='/cart' className='ms-lg-3 mt-lg-0 mt-3'>
                <Button variant='outline-warning'>🛒 Total: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(calcularTotal())}</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation



//CODIGO ANTERIOR

// const Navbar = () => {

//     const total = 25000;
//     const token = false;

//   return (

//     <nav className="navbar navbar-expand-lg bg-black navbar-dark">
//         <div className="container">
//             <a className="navbar-brand px-2" href="index.html">Pizzería <img src="./src/assets/img/logo.png" alt="Mamma Mía!" className="img-fluid logo"/></a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto">
//                     <li className="nav-item px-2 mb-xl-0 mb-2">
//                         <a className="btn btn-outline-light" href="#">🍕 Home</a>
//                     </li>

//                     {token ? (
//                         <>
//                         <li className="nav-item px-2 mb-xl-0 mb-2">
//                             <a className="btn btn-outline-light" href="#">🔓 Profile</a>
//                         </li>
//                         <li className="nav-item px-2 mb-xl-0 mb-2">
//                             <a className="btn btn-outline-light" href="#">🔒 Logout</a>
//                         </li>
//                         </>
//                     ) : (
//                         <>
//                         <li className="nav-item px-2 mb-xl-0 mb-2">
//                             <a className="btn btn-outline-light" href="#">🔐 Login</a>
//                         </li>
//                         <li className="nav-item px-2 mb-xl-0 mb-2">
//                             <a className="btn btn-outline-light" href="#">🔐 Register</a>
//                         </li>
//                         </>
//                     )}
//                 </ul>

//                 <ul className="navbar-nav">
//                     <li className="nav-item px-2">
//                         <a className="btn btn-outline-warning" href="#">🛒 Total: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(total)}</a>
//                     </li>
//                 </ul>

//             </div>
//         </div>
//     </nav>
//   )
// }

// export default Navbar