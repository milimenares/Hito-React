import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Login = () => {
  const { entrar, error, handleSubmit, handleEntrar } = useContext(UserContext)

  return (
    <div className='container py-5'>
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6">
          <h1>Login</h1>
          <div className="card p-4">
            <form onSubmit={handleSubmit}>
              <input type='email' value={entrar.email} onChange={handleEntrar} name='email' placeholder='Ingresa tu email' className='form-control'></input>
              <input type='password' value={entrar.password} onChange={handleEntrar} name='password' placeholder='Ingresa tu contraseña' className='form-control'></input>
              {error && <p className="text-danger">{error}</p>}
              <button type='submit' className="btn btn-danger mx-auto d-block" disabled={!entrar.email || !entrar.password} >Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login