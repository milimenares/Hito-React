const Navbar = () => {

    const total = 25000;
    const token = false;

  return (

    <nav className="navbar navbar-expand-lg bg-black navbar-dark">
        <div className="container">
            <a className="navbar-brand px-2" href="index.html">Pizzería <img src="./src/assets/img/logo.png" alt="Mamma Mía!" className="img-fluid logo"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item px-2 mb-xl-0 mb-2">
                        <a className="btn btn-outline-light" href="#">🍕 Home</a>
                    </li>

                    {token ? (
                        <>
                        <li className="nav-item px-2 mb-xl-0 mb-2">
                            <a className="btn btn-outline-light" href="#">🔓 Profile</a>
                        </li>
                        <li className="nav-item px-2 mb-xl-0 mb-2">
                            <a className="btn btn-outline-light" href="#">🔒 Logout</a>
                        </li>
                        </>
                    ) : (
                        <>
                        <li className="nav-item px-2 mb-xl-0 mb-2">
                            <a className="btn btn-outline-light" href="#">🔐 Login</a>
                        </li>
                        <li className="nav-item px-2 mb-xl-0 mb-2">
                            <a className="btn btn-outline-light" href="#">🔐 Register</a>
                        </li>
                        </>
                    )}
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item px-2">
                        <a className="btn btn-outline-warning" href="#">🛒 Total: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(total)}</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
  )
}

export default Navbar