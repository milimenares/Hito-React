import { pizzas } from "../pizzas"
import CardPizza from "./CardPizza"
import Header from "./Header"

const Home = () => {
  return (
    <>

    <Header/>
    <div className="container-fluid fondo-home">
      <div className="container pt-5 pb-4">
        <div className="row justify-content-center">
          {pizzas.map((pizza) => (
            <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
            />
          ))}
        </div>
      </div>
    </div>

    </>
  )
}

export default Home