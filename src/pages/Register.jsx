import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const RegisterPage = () => {
  const { error, loading, handleChange, handleSubmitRegister, registerData } = useContext(UserContext)

  return (
    <div className='container py-5'>
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6">
          <h1>Register</h1>
          <div className="card p-4">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmitRegister}>
              <input type='email' value={registerData.email} onChange={handleChange} name='email' placeholder='Ingresa tu email' className='form-control'></input>
              <input type='password' value={registerData.password} onChange={handleChange} name='password' placeholder='Ingresa una contraseña' className='form-control'></input>
              <button type='submit' className="btn btn-danger mx-auto d-block" disabled={loading}>
                {loading ? 'Registrando...' : 'Enviar'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RegisterPage