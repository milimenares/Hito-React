// import { pizzas } from "../pizzas"
import CardPizza from "../components/CardPizza"
import Header from "../components/Header"
import { useEffect, useState } from "react"

const Home = () => {

  const [datosHome, setDatosHome] = useState([])

  const getDatosHome = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/pizzas')
      const data = await res.json()
      setDatosHome(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getDatosHome()
}, [])

  return (
    <>

    <Header/>

    <div className="container-fluid fondo-home">
      <div className="container pt-5 pb-4">
        <div className="row justify-content-center">
          {datosHome.map((datoHome) => (
            <CardPizza
            key={datoHome.id}
            name={datoHome.name}
            price={datoHome.price}
            ingredients={datoHome.ingredients}
            img={datoHome.img}
            desc={datoHome.desc}
            />
          ))}
        </div>
      </div>
    </div>

    </>
  )
}

export default Home