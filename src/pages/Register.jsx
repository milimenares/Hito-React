import { useState } from 'react'

const RegisterPage = () => {
    const [usuario, setUsuario] = useState({
      email: '',
      pass1: '',
      pass2: ''
    })

    const handleUsuario = (evento) => {
      setUsuario({ ...usuario, [evento.target.name]: evento.target.value })
    }

    const handleSubmit = (evento) => {
      evento.preventDefault()

      const {email, pass1, pass2} = usuario //este es el destructuring

      if(!email.trim() || !pass1.trim() || !pass2.trim()){
        Swal.fire({
          title: "ERROR",
          text: "Por favor, debes rellenar todos los campos",
          icon: "error"
        });
        return
      }

      if(pass1.length <= 5 || pass2.length <= 5){
        Swal.fire({
          title: "OH OH!",
          text: "Tu contraseña debe tener al menos 6 caracteres",
          icon: "warning"
        });
        return
      }

      if(pass1 !== pass2){
        Swal.fire({
          title: "NO COINCIDEN",
          text: "Asegúrate de que ambas contraseñas sean iguales",
          icon: "warning"
        });
        return
      }

      Swal.fire({
        title: "Mamma Mía!",
        text: "Tu registro ha sido exitoso",
        icon: "success"
      });
      setUsuario({email:'', pass1:'', pass2:''})
    }

  return (
    <div className='container py-5'>
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6">
          <h1>Register</h1>
          <div className="card p-4">
            <form onSubmit={handleSubmit}>
              <input type='email' value={usuario.email} onChange={handleUsuario} name='email' placeholder='Ingresa tu email' className='form-control'></input>
              <input type='password' value={usuario.pass1} onChange={handleUsuario} name='pass1' placeholder='Ingresa una contraseña' className='form-control'></input>
              <input type='password' value={usuario.pass2} onChange={handleUsuario} name='pass2' placeholder='Repite la contraseña' className='form-control'></input>
              <button type='submit' className="btn btn-danger mx-auto d-block">Enviar</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RegisterPage