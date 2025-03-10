import { useContext } from "react"
import CardPizza from "../components/CardPizza"
import Header from "../components/Header"
import { CartContext } from "../context/CartContext"

const Home = () => {

  const {datosHome} = useContext(CartContext)

  return (
    <>
    <Header/>
    <div className="container-fluid fondo-home">
      <div className="container pt-5 pb-4">
        <div className="row justify-content-center">
          {datosHome.map((datoHome) => (
            <CardPizza
            key={datoHome.id}
            id={datoHome.id}
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