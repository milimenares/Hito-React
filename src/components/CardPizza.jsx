const CardPizza = ({img, name, price, ingredients}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-11 mb-4 d-flex">
        <div className="card">
            <img src={img} alt="Pizza" className="card-img-top" />
            <div>
                <h2>Pizza {name}</h2>
                <hr/>
                <div className="ingredientes">
                    <h5>Ingredientes:</h5>
                    <p>{ingredients}</p>
                </div>
                <hr/>
                <h4>Precio: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(price)}</h4>
                <div className="botones">
                    <button className="btn btn-danger mx-1">Ver más</button>
                    <button className="btn btn-danger mx-1">Añadir</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardPizza