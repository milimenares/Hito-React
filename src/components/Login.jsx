import { useState } from 'react'

const Login = () => {

    const [entrar, setEntrar] = useState({
        email: '',
        pass: ''
    })

    const handleEntrar = (evento) => {
        setEntrar({ ...entrar, [evento.target.name]: evento.target.value })
    }

    const handleSubmit = (evento) => {
        evento.preventDefault()

        const {email, pass} = entrar //este es el destructuring

        if(!email.trim() || !pass.trim()){
            Swal.fire({
              title: "ERROR",
              text: "Por favor, debes rellenar todos los campos",
              icon: "error"
            });
            return
          }

          if(pass.length <= 5){
            Swal.fire({
              title: "OH OH!",
              text: "Tu contraseña debe tener al menos 6 caracteres",
              icon: "warning"
            });
            return
          }

          if(pass === '123456') {
            Swal.fire({
                title: "Mamma Mía!",
                text: "Tu ingreso ha sido exitoso",
                icon: "success"
              });
              setEntrar({email:'', pass:''})
              return
          }

        Swal.fire({
            title: "ERROR",
            text: "La contraseña es incorrecta, intenta nuevamente",
            icon: "error"
          });
    }

  return (
    <div className='container py-5'>
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6">
          <h1>Login</h1>
          <div className="card p-4">
            <form onSubmit={handleSubmit}>
              <input type='email' value={entrar.email} onChange={handleEntrar} name='email' placeholder='Ingresa tu email' className='form-control'></input>
              <input type='password' value={entrar.pass} onChange={handleEntrar} name='pass' placeholder='Ingresa tu contraseña' className='form-control'></input>
              <button type='submit' className="btn btn-danger mx-auto d-block">Enviar</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login