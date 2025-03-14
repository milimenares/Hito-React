const Profile = () => {
  return (
    <div className='container py-5'>
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6">
          <h1 className="mb-4">Profile</h1>
          <div className="d-flex align-items-center justify-content-between">
            <h6>Usuario: test@test.com</h6>
            <button type='' className="btn btn-danger">Cerrar Sesión</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile