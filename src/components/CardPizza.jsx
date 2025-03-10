import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CardPizza = ({ id, img, name, price, ingredients }) => {

    const { masPizza } = useContext(CartContext)

  return (
    <div className="col-lg-4 col-md-6 col-sm-11 mb-4 d-flex">
        <div className="card">
            <img src={img} alt={name} className="card-img-top" />
            <div>
                <h2>Pizza {name}</h2>
                <hr/>
                <div className="ingredientes">
                    <h5>Ingredientes:</h5>
                    <ul className="list-unstyled">
                        {ingredients.map((ingredient) => (
                            <li key={ingredient}>🍕 {ingredient}</li>
                        ))}
                    </ul>
                </div>
                <hr/>
                <h4>Precio: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(price)}</h4>
                <div className="botones">
                    <button className="btn btn-danger mx-1">Ver más</button>
                    <button className="btn btn-danger mx-1" onClick={() => masPizza({ id, img, name, price })}>Añadir</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardPizza