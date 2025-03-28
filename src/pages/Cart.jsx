import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const Cart = () => {

  const { cart, calcularTotal, masPizza, menosPizza, vaciarCarrito } = useContext(CartContext)
  const { user, token } = useContext(UserContext)
  const navigate = useNavigate()

  const handleCheckout = async () => {

    if (!user || !token) {
      Swal.fire({
        title: "Oh oh",
        text: "Debes iniciar sesión para hacer tu compra",
        icon: "warning"
      })
      navigate('/login')
      return
    }

    if (cart.length === 0) {
      Swal.fire({
        title: "Carrito vacío",
        text: "No puedes disfrutar con el carrito vacío! Nosotros te guiamos al paraíso de las pizzas",
        icon: "warning"
      })
      navigate('/')
      return
    }

    try {
      const res = await axios.post('http://localhost:5001/api/checkouts', { cart }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (token) {
        Swal.fire({
          title: "Compra exitosa!",
          text: `Ñami! ya puedes disfrutar de tu pizza ${user?.email || "pizzamaníac@"}!`,
          icon: "success"
        }).then(() => {
          vaciarCarrito()
        })
      }
    } catch (error) {
      console.error("Error en el checkout", error)
      Swal.fire({
        title: "Error",
        text: "Hubo un problema con tu compra, puedes intentar nuevamente?",
        icon: "error"
      })
    }
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Detalles del pedido:</h1>
      {cart.map((pizza) => (
        <div className="row align-items-center justify-content-center mb-4" key={pizza.id}>
        <div className="col-sm-auto col-10 mb-sm-0 mb-3"><img src={pizza.img} alt={pizza.name} className="img-cart"/></div>
        <div className="col-lg-2 col-sm-3 col-5 mb-sm-0 mb-3"><h5>{pizza.name}</h5></div>
        <div className="col-xl-1 col-md-2 col-sm-3 col-5 text-sm-start text-end mb-sm-0 mb-3"><span>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(pizza.price)}</span></div>
        <div className="col-auto">
            <div className="d-flex align-items-center gap-3">
                <button className="btn btn-danger" onClick={() => menosPizza(pizza.id)}>-</button>
                <span className="cantidad">{pizza.count}</span>
                <button className="btn btn-danger" onClick={() => masPizza(pizza)}>+</button>
            </div>
        </div>
        </div>
      ))}

      <hr />
        <div className="text-center">
            <h3 className="mb-3 text-uppercase">Total: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(calcularTotal())}</h3>
            <div>
              <button className="btn btn-dark text-uppercase" onClick={handleCheckout}>Pagar</button>
            </div>
        </div>
    </div>
  )
}

export default Cart