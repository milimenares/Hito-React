import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/img/logo.png'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

const Navigation = () => {

  const validarRuta = ({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link nav-warning'

  const { calcularTotal } = useContext(CartContext)
  const { user, handleLogout } = useContext(UserContext)

    return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/' className='brand'>Pizzería<Image src={Logo} className='img-fluid logo ms-2 mb-xxl-1'/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className={validarRuta}>
              <Button variant='outline-light'>🍕 Home</Button>
            </NavLink>
            { user ? (
                <>
                <NavLink to='/profile' className={validarRuta}>
                  <Button variant='outline-light'>🔓 Profile</Button>
                </NavLink>
                <Nav.Link>
                  <Button onClick={handleLogout} variant='outline-danger'>❌ Logout</Button>
                </Nav.Link>
                <NavLink to='/profile' className={validarRuta}>
                  <Button variant='link' style={{ color: 'white', textDecoration: 'none' }} className='d-lg-block d-none'>Hola! {user?.email}</Button>
                </NavLink>
                </>
            ) : (
                <>
                <NavLink to='/login' className={validarRuta}>
                  <Button variant='outline-light'>🔐 Login</Button>
                </NavLink>
                <NavLink to='/register' className={validarRuta}>
                  <Button variant='outline-light'>🔐 Register</Button>
                </NavLink>
                </>
            )}
          </Nav>
          <Nav>
            <NavLink to='/cart' className="my-0 my-md-2">
                <Button variant='outline-warning'>🛒 Total: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(calcularTotal())}</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation