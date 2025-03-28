import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const UserContext = createContext()

const UserProvider = ({ children }) => {

  const [entrar, setEntrar] = useState({ email: '', password: '' })
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [registerData, setRegisterData] = useState({ email: '', password: '' })
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const navigate = useNavigate()

  // registro de usuario
  const registerUser = async (email, password) => {
    try {
      console.log("enviando datos al backend:", { email, password })
      const res = await axios.post('http://localhost:5001/api/auth/register', {
        email,
        password
      })

      const { token } = res.data
      localStorage.setItem('token', token)
      setToken(token)
      console.log("usuario registrado", res.data)
      Swal.fire({
        title: `¡Te has registrado con éxito, ${user?.email || "pizzamaníac@"}!`,
        text: "Comienza a disfrutar de nuestras pizzas con 50% de descuento solo para tí!",
        icon: "success",
      })
    } catch (error) {
      console.error('Error en el registro:', error)
      setError('Error al registrar el usuario')
    }
}

const handleSubmitRegister = async (evento) => {
  evento.preventDefault()

  if (!registerData.email || !registerData.password) {
    Swal.fire({
      title: "Oh oh!",
      text: "Debes ingresar email y contraseña, intenta nuevamente!",
      icon: "warning",
    })
    return
  }

  try {
    await registerUser(registerData.email, registerData.password)
    setRegisterData({ email: '', password: '' })
  } catch (error) {
    console.log(error)
    Swal.fire({
      title: "Error",
      text: "Hubo un problema al registrar tu cuenta. Intenta nuevamente.",
      icon: "error",
    })
  }
}

  //datos del usuario en perfil
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      const fetchUser = async () => {
        try {
          const res = await axios.get('http://localhost:5001/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
          })
          setUser(res.data)
          navigate('/profile')
        } catch (error) {
          console.error('Error al obtener usuario:', error)
          localStorage.removeItem('token')
          setUser(null)
        }
      };

      fetchUser()
    }
  }, [token])


  //en el login
  const handleEntrar = async (evento) => {
      setEntrar({ ...entrar, [evento.target.name]: evento.target.value })
  }

  //en el register
  const handleChange = (evento) => {
    setRegisterData({ ...registerData, [evento.target.name]: evento.target.value})
  }

  //autenticacion de usuario
  const auth = async (email, password) => {
    setLoading(true)
    try {
        const URL = 'http://localhost:5001/api/auth/login'
        const payload = { email, password }
        const res = await axios.post(URL, payload) //solicitud al backend

        const { token } = res.data

        if (res.status === 200) {
            localStorage.setItem('token', token) // token en el localStorage
            setToken(token)

            const userRes = await axios.get('http://localhost:5001/api/auth/me', {
              headers: { Authorization: `Bearer ${res.data.token}` },
          })
          setUser(userRes.data)
          navigate('/profile')
          console.log("user logueado:", userRes.data);
          console.log("token guardado:", token);
          return true // autenticación exitosa
        }
    } catch (error) {
        console.error(error)
        Swal.fire({
                title: "Error",
                text: "Credenciales incorrectas, intenta nuevamente",
                icon: "error",
              })
        setLoading(false)
        return false
    } finally {
        setLoading(false)
    }
}

  //funcion para manejar el submit del login
  const handleSubmit = async (evento) => {
      evento.preventDefault()

      const success = await auth(entrar.email, entrar.password)

        if(success){
          Swal.fire({
            title: "Mamma Mía!",
            text: "Tu ingreso ha sido exitoso",
            icon: "success"
          })
          setEntrar({email:'', password:''}) //limpio el form
          navigate('/profile')
        }
  }

  //funcion para manejar el logout
  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
    navigate('/')
    console.log('Logout exitoso')
  }

    const stateGlobalUser = {
      user,
      entrar,
      error,
      loading,
      token,
      registerData,
      setError,
      setLoading,
      registerUser,
      handleEntrar,
      handleSubmit,
      handleSubmitRegister,
      handleChange,
      handleLogout
    }

  return (
    <UserContext.Provider value={stateGlobalUser}>
      {children}
    </UserContext.Provider>
  )

}


export default UserProvider