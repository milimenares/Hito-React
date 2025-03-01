import { useEffect, useState } from "react"

const Pizza = () => {

    const [datosPizzas, setDatosPizzas] = useState({})

    const getPizzas = async () => {
        try {
            const res = await fetch('http://localhost:5001/api/pizzas/p001')
            const data = await res.json()
            setDatosPizzas(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getPizzas()
    }, [])

    if (!datosPizzas.id) {
        return <p>Cargando... 🍕</p>
      }

  return (
    <div key={datosPizzas.id} className="container-fluid py-5">
        <div className="container">
            <div className="card">
                <div className="row justify-content-center">
                    <div className="col-md-6 pe-md-0">
                        <img src={datosPizzas.img} alt={datosPizzas.name} className="img-pizza w-100"/>
                    </div>
                    <div className="col-md-6 ps-md-0 pe-auto">
                        <div className="py-lg-5 py-4 px-4">
                            <h3>{datosPizzas.name}</h3>
                            <p>{datosPizzas.desc}</p>
                            <ul>
                            {datosPizzas.ingredients.map(ingrediente => (
                                <li key={ingrediente}>🍕 {ingrediente}</li>
                            ))}
                            </ul>
                            <div className="d-flex justify-content-around pt-3">
                            <h5>Precio: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(datosPizzas.price)}</h5>
                            <button className="btn btn-dark">Añadir 🛒</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pizza