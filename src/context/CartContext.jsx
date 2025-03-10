import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext() //creo el contexto y lo exporto

const CartProvider = ({ children }) => {

    const URL = 'http://localhost:5001/api/pizzas'

    const [datosHome, setDatosHome] = useState([])
    const [cart, setCart] = useState([])

    const getDatosHome = async () => {
        try {
          const res = await fetch(URL)
          const data = await res.json()
          setDatosHome(data)
        } catch (error) {
          console.log(error.message)
        }
      }

      useEffect(() => {
        getDatosHome()
    }, [])

      const masPizza = (pizza) => {
        setCart((currentItems) => {
            const existingItem = currentItems.find((item) => item.id === pizza.id)
            if (existingItem) {
                return currentItems.map((item) =>
                item.id === pizza.id ? { ...item, count: item.count + 1 } : item
                )
            } else {
                return [...currentItems, { ...pizza, count: 1 }]
            }
        })
      }

      const menosPizza = (id) => {
        setCart((currentItems) =>
            currentItems.map((item) =>
                item.id === id ? { ...item, count: item.count - 1 } : item
            ).filter((item) => item.count > 0)
        )
      }

      const calcularTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.count, 0)
      }

      const stateGlobal = {
        datosHome,
        getDatosHome,
        cart,
        calcularTotal,
        masPizza,
        menosPizza,
    }

    return (
        <CartContext.Provider value={stateGlobal}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider