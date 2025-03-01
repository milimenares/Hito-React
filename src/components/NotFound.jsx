import { Container } from "react-bootstrap"
import NotfoundImage from '../assets/img/notfound.png'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <Container className='text-center py-5'>
      <img src={NotfoundImage} className="img-fluid img-notfound mb-4"/>
      <h5>PERO</h5>
      <h1>¡OH OH!</h1>
      <h5>Aquí No encontrarás PIZZA</h5>
      <Link to='/' className='btn btn-dark mt-3'>Volver a la Pizzería</Link>
    </Container>
  )
}

export default NotFound