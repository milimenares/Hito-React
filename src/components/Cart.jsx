import { useState } from "react"
import { pizzaCart } from "../pizzas"

const Cart = () => {

  const [cart, setCart] = useState(pizzaCart)

  const calcularTotal = () => {
    return cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0)
  }

  const masPizza = (id) => {
    const newCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    )
    setCart(newCart)
  }

  const menosPizza = (id) => {
    const newCart = cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0) // eliminar si count llega a 0

    setCart(newCart)
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
                <button className="btn btn-danger" onClick={() => masPizza(pizza.id)}>+</button>
            </div>
        </div>
        </div>
      ))}
      <hr />
        <div className="text-center">
            <h3 className="mb-3 text-uppercase">Total: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(calcularTotal())}</h3>
            <div><button className="btn btn-dark text-uppercase">Pagar</button></div>
        </div>
    </div>
  )
}

export default Cart